import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const MainDiv = styled.div`
 border: 1px solid #cecece;
 width:500px;
`
const DivList = styled.div`
  height:30px;
  display: block;
`
const LabelComment = styled.div`
  position: relative;
  margin:5px;
  width:500px;
`
const LabelName = styled.label`
  margin: 3px;
  float: left;
`

const LabelDate = styled.label`
  margin: 3px;
  float: right;
`
const ListHabr = () => {

  let [listHabrs, setlistHabrs] = useState([])

  const requestApi = () => {
    axios.get('/parser/list-habr')
      .then(res => {
        const { data } = res
        setlistHabrs(data)
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
        listHabrs.map(item => {
          return (
            <MainDiv>
              <DivList>
                <LabelName>{item['title']}</LabelName>
                <LabelDate>{item['hubs']}</LabelDate>
              </DivList>
              <LabelComment>{item['text']}</LabelComment>
              <a href={item['href']}>статья</a>
            </MainDiv>
          )
        })
      }
    </>
  )
}
export default ListHabr