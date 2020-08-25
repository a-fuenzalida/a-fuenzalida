import React from 'react'
import Layout from '../components/Layout/layout'
import { Container, Title } from '../components/UI'
import { Subtitle } from '../components/Pages/indexStyles'

import { aboutData } from '../mock/data'

export default function About(props) {
  return (
    <Layout actualPage={props.path}>
      <Container>
        <div>
          <Title>{aboutData.title}</Title>
          <Subtitle>{aboutData.text}</Subtitle>
        </div>
      </Container>
    </Layout>
  )
}