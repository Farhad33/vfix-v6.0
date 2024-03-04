'use client'
import { useEffect, useState } from'react'
import styled from'styled-components'
import { strapiAPI } from '@/lib/api'
import BlogBox from './BlogBox'


export default function Blogs() {
  const [data,  setData] = useState([])
  const url = '/articles?populate=services,thumbnail'
  
  useEffect(() => {
    strapiAPI(url)
    .then(response => setData(response.data.data))
    .catch(error => console.log('error => ', error))
  }, [])

  return (
    <BlogsContainer>
        {data.map((content, index) => (
            <BlogBox key={index} content={content}/>
        ))}
    </BlogsContainer>
  )
}

const BlogsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 50px;
    gap: 70px;
`