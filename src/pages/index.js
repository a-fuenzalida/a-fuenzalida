import React from 'react'
import Layout from '../components/Layout/layout'
import Button from '../components/UI/Button'
import Icon, { GithubOutlined, LinkedinFilled } from '@ant-design/icons' 
import { Container, Title, Epigraph, Subtitle, Figures} from './indexStyles'

import { homeData, socialData } from '../mock/data'

export default function Home() {
  const icons = {
    github: GithubOutlined,
    linkedin: LinkedinFilled
  }

  return (
    <Layout>
      <Container>
        <div>
          <Epigraph>{homeData.epigraph}</Epigraph>
          <Title>{homeData.title}</Title>
          <Subtitle>{homeData.subtitle}</Subtitle>
        </div>
        <Figures>
          {
            socialData.map(social => (
              <Button>
                <Icon component={icons[social.icon]} style={{ fontSize: '1.3em' }} />
                {' ' + social.title}
              </Button>
            ))
          }
        </Figures>
      </Container>
    </Layout>
  )
}