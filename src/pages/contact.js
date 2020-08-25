import React from 'react'
import Layout from '../components/Layout/layout'
import Button from '../components/UI/Button'
import { Container, Title } from '../components/UI'
import { Epigraph, Subtitle, Figures } from '../components/Pages/indexStyles'
import Icon from '../../assets/Icon'

import { homeData, socialData } from '../mock/data'

export default function Contact(props) {
  return (
    <Layout actualPage={props.path}>
      <Container>
        <div>
          <Epigraph>{homeData.epigraph}</Epigraph>
          <Title>{homeData.title}</Title>
          <Subtitle>{homeData.subtitle}</Subtitle>
        </div>
        <Figures>
          {
            socialData.map(social => (
              <Button key={social.title} href={social.url} target="_blank">
                <Icon name={social.icon} />
                {' ' + social.title}
              </Button>
            ))
          }
        </Figures>
      </Container>
    </Layout>
  )
}