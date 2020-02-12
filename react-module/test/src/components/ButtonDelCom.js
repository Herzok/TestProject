import React from 'react'
import axios from 'axios'
import styled from 'styled-components';
import qs from 'qs'

const Button = styled.button`
  font-weight: 700;
  color: white;
  text-decoration: none;
  padding: .8em 1em calc(.8em + 3px);
  background: #a83244;
  transition: 0.2s;
  &:hover { background: #8c2938; }
  &:active {
  background: #e6435b;
  box-shadow: 0 3px #992c3c inset;
`

const ButtonDelCom = ({idComment}) => {

  const delComment = () => {
    axios.post(`/comments/delete`, qs.stringify({ idComment: idComment }),
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
      .then(res => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }
 return (
   <Button onClick={delComment}>Удалить комментарий</Button>
 )
}

export default ButtonDelCom;