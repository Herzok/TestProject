import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

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

const ListHeadHunter= () => {

  let [listHabrs, setlistHabrs] = useState([])

  const requestApi = () => {
    axios.get('https://rybinsk.hh.ru/search/vacancy?area=112&st=searchVacancy&text=%D0%9F%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%81%D1%82&from=suggest_post')
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
                <LabelName>{item['name']}   </LabelName>
                <LabelDate>{item['dateTime']}</LabelDate>
              </DivList>
              <LabelComment>{item['textComment']}</LabelComment>
            </MainDiv>
          )
        })
      }
    </>
  )
}
export default ListHeadHunter