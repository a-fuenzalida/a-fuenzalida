import React from 'react'
import Layout from '../components/Layout/Layout'
import { Container, Title, Card } from '../components/UI'
import { Gallery, ProjectsContainer } from '../styles/projects.styled'
import Seo from '../components/Seo'

export default function Projects(props) {
  return (
    <Layout actualPage={props.path}>
      <Seo title="Proyectos" />
      <Container>
        <Title>PROYECTOS</Title>
        <ProjectsContainer>
          <Gallery>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </Gallery>
        </ProjectsContainer>
      </Container>
    </Layout>
  )
}