<?php


namespace app\services\commands;


use app\models\CommentsModel;

class AddComment extends CommentsModel
{
    public function addComment($requestData)
    {
        ['name' => $this->name, 'comment' => $this->textComment] = $requestData;
        $this->dateTime = date('Y-m-d H:i:s',time());
        $this->getErrors();
        $result = $this->save();
        if ($result) {
            return "added";
        } else {
            return $this->getErrors();
        }
    }
}