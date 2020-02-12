import React, { useState } from 'react'
import axios from 'axios'
import qs from 'qs'
import styled from 'styled-components'

const Input = styled.input`
  margin 3px;
  width: 300px;
  font-size: 13px;
  padding: 6px 0 4px 10px;
  border: 1px solid #cecece;
  background: #F6F6f6;
  border-radius: 8px;
`
const TextArea = styled.textarea`
   resize: none;
   margin: 3px;
   width:300px;
   height:150px;
   font-size: 13px;
  padding: 6px 0 4px 10px;
  border: 1px solid #cecece;
  background: #F6F6f6;
  border-radius: 8px;
`

const FormComment = styled.form`
  width:400px;
`
const ButtonComment = styled.button`
  font-weight: 700;
  color: white;
  text-decoration: none;
  padding: .8em 1em calc(.8em + 3px);
  border-radius: 3px;
  background: rgb(64,199,129);
  box-shadow: 0 -3px rgb(53,167,110) inset;
  transition: 0.2s;
  &:hover { background: rgb(53, 167, 110); }
  &:active {
  background: rgb(33,147,90);
  box-shadow: 0 3px rgb(33,147,90) inset;
}
`
const FormAddComment = () => {
  let [fName, setName] = useState('')
  let [fComment, setComment] = useState('')

  const submitComment = (event) => {
    event.preventDefault()
    axios.post(`/comments/add`, qs.stringify({ name: fName, comment: fComment }),
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
      .then(res => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleValueComment = (event) => {
    setComment(event.target.value)
  }
  const handleValueName = (event) => {
    setName(event.target.value)
  }

  return (
    <>
      <FormComment onSubmit={submitComment}>
        <Input
          onChange={handleValueName}
          placeholder={'Имя пользователя'}
          type="text"
        />
        <TextArea
          onChange={handleValueComment}
          placeholder={'Комментарий'}
          type="text"
        />
        <ButtonComment>Оставить комментарий</ButtonComment>
      </FormComment>
    </>
  )
}
export default FormAddComment
