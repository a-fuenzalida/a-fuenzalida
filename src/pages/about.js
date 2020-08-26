import React from 'react'
import Layout from '../components/Layout/Layout'
import { Container, Title, Text } from '../components/UI'
import Seo from '../components/Seo'

import { aboutData } from '../mock/data'

export default function About(props) {
  return (
    <Layout actualPage={props.path}>
      <Seo title="Sobre mí" />
      <Container>
        <Title>{aboutData.title}</Title>
        {
          aboutData.text.map(text => (
            <Text>{text}</Text>
          ))
        }
      </Container>
    </Layout>
  )
}