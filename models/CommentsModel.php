<?php

namespace app\models;

/**
 * This is the model class for table "comments".
 *
 * @property int $idComment
 * @property string $name
 * @property string $dateTime
 * @property string $textComment
 */
class CommentsModel extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'comments';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['name', 'dateTime', 'textComment'], 'required'],
            [['dateTime'], 'safe'],
            [['name'], 'string', 'max' => 30],
            [['textComment'], 'string', 'max' => 500],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'idComment' => 'Id Comment',
            'name' => 'Name',
            'dateTime' => 'Date Time',
            'textComment' => 'Text Comment',
        ];
    }
}
