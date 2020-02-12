<?php


namespace app\controllers;

use app\services\commands\AddComment;
use app\services\commands\DeleteComment;
use app\services\queries\GetListComment;
use Yii;
use yii\filters\VerbFilter;

class CommentsController extends SiteController
{
    public function behaviors()
    {
        $this->enableCsrfValidation = false;
        return [
            'verbs' => [
                'class' => VerbFilter::className(),
                'actions' => [
                    'add' => ['get', 'put', 'post'],
                ],
            ],
        ];
    }

    public function actionAdd()
    {
        $request = Yii::$app->request;
        $post = $request->post();
        $addCommentCommand = new AddComment();
        return $addCommentCommand->addComment($post);
    }

    public function actionListComments()
    {
        $queryListComments = new GetListComment();
        return json_encode($queryListComments->getComments());
    }

    public function actionDelete()
    {
        $request = Yii::$app->request;
        $post = $request->post();
        $deleteCommentCommand = new DeleteComment();
        return $deleteCommentCommand->deleteComment($post);
    }
}