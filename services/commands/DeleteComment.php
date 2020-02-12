<?php


namespace app\services\commands;

use app\models\CommentsModel;

class DeleteComment extends CommentsModel
{
    public function deleteComment($requestData)
    {
        ['idComment' => $idComment] = $requestData;
        $result = $this->findOne($idComment);
        $result->delete();
        return 'success';
    }
}