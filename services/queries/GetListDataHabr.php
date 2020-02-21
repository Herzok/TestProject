<?php


namespace app\services\queries;


class GetListDataHabr
{

    private $domDoc;
    private $xPath;
    private $resArr;
    private $allData;

    public function __construct()
    {
        $this->domDoc = new \DOMDocument();
        $this->allData = [];
    }

    public function getDataHabr()
    {
        $i = 1;
        while ($i < 3) {
            $this->domDoc->loadHTML($this->curlConnect($i), LIBXML_NOERROR);
            $this->xPath = new \DOMXpath($this->domDoc);
            $this->mergeUnionSctruct();
            $this->allData = array_merge($this->allData, $this->resArr);
            $i++;
        }
        return $this->allData;
    }

    private function curlConnect($page)
    {
        $ch = curl_init('https://habr.com/ru/page' . $page . '/');
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_USERAGENT, 'Chrome/33.0.1750.154');
        curl_setopt($ch, CURLOPT_AUTOREFERER, true);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
        $result = curl_exec($ch);
        curl_close($ch);
        $repairer = new \tidy();
        $repairer->parseString($result);
        return $repairer;
    }

    private function getTitles()
    {
        $this->resArr = [];
        $elements = $this->xPath->query(".//h2[@class='post__title']/a");
        foreach ($elements as $el) {
            $text = $hub = str_replace("\r\n", ' ', $el->nodeValue);
            $this->resArr[] = [
                'title' => $text,
                'href' => $el->getAttribute('href')
            ];
        }
    }

    private function getHubs()
    {
        $hubs = [];
        $elements = $this->xPath->query(".//ul[@class='post__hubs inline-list']");
        foreach ($elements as $item) {
            $hub = str_replace("\r", '', $item->nodeValue);
            $hub = str_replace("\n", '', $hub);
            $hubs[] = ['hubs' => $hub];
        }
        return $hubs;
    }

    private function getPreviews()
    {
        $previewTexts = [];
        $elements = $this->xPath->query(".//div[@class='post__text post__text-html']");
        foreach ($elements as $item) {
            $text = str_replace("\r", '', $item->nodeValue);
            $text = str_replace("\n", '', $text);
            $previewTexts[] = ['text' => $text];
        }
        return $previewTexts;
    }

    private function mergeUnionSctruct()
    {
        $this->getTitles();
        $resHubs = $this->getHubs();
        $resPreviews = $this->getPreviews();
        for ($i = 0; $i < count($this->resArr); $i++) {
            $this->resArr[$i] = array_merge($this->resArr[$i], [
                'text' => $resPreviews[$i]['text'],
                'hubs' => $resHubs[$i]['hubs']
            ]);
        }
    }


}