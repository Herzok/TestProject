<?php


namespace app\controllers;

use app\services\queries\GetListDataHabr;
use Yii;
use yii\filters\VerbFilter;

class ParserController extends SiteController
{
//    public function behaviors()
//    {
//        $this->enableCsrfValidation = false;
//        return [
//            'verbs' => [
//                'class' => VerbFilter::className(),
//                'actions' => [
//                    'add' => ['get', 'put', 'post'],
//                ],
//            ],
//        ];
//    }

    public function actionListHabr()
    {
        $getData = new GetListDataHabr();
        $result = $getData->getDataHabr();
        return json_encode($result);
    }
}