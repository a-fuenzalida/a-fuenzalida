import React from 'react'
import Layout from '../components/Layout/Layout'
import { Container, Title, Text } from '../components/UI'

import { aboutData } from '../mock/data'

export default function About(props) {
  return (
    <Layout actualPage={props.path}>
      <Container>
        <div>
          <Title>{aboutData.title}</Title>
          <Text>{aboutData.text}</Text>
        </div>
      </Container>
    </Layout>
  )
}