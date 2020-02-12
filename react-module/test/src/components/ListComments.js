import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import ButtonDelCom from './ButtonDelCom'

const MainDiv = styled.div`
 border: 1px solid #cecece;
 width:300px;
`
const DivList = styled.div`
  height:30px;
  display: block;
`
const LabelComment = styled.div`
  position: relative;
  margin:3px;
  width:300px;
`
const LabelName = styled.label`
  margin: 3px;
  float: left;
`

const LabelDate = styled.label`
  margin: 3px;
  float: right;
`
const ListComments = () => {

  let [listComments, setListComments] = useState([])

  const requestApi = () => {
    axios.get('/comments/list-comments')
      .then(res => {
        const { data } = res
        setListComments(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    requestApi()
  }, [])

  return (
    <>
      {
        listComments.map(item => {
          return (
            <MainDiv>
              <DivList>
                <LabelName>{item['name']}   </LabelName>
                <LabelDate>{item['dateTime']}</LabelDate>
              </DivList>
              <LabelComment>{item['textComment']}</LabelComment>
              <ButtonDelCom
                requestApi={requestApi}
                idComment={item['idComment']}>Удалить комментарий</ButtonDelCom>
            </MainDiv>
          )
        })
      }
    </>
  )
}
export default ListComments