<?php

namespace app\services\queries;

use app\models\CommentsModel;
use yii\db\Query;

class GetListComment extends CommentsModel
{
    public function getComments()
    {
        $query = new Query();
        $resultQuery = $query->select(['idComment', 'name', 'dateTime', 'textComment'])
            ->from('comments')
            ->all();
        return $resultQuery;
    }
}
