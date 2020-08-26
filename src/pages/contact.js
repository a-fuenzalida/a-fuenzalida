import React, { useState } from 'react'
import Layout from '../components/Layout/Layout'
import { Container, Title, Input, Textarea } from '../components/UI'
import { InputGroup } from '../styles/contact.styled'
import Seo from '../components/Seo'

export default function Contact(props) {
  const [values, setValues] = useState({})

  const handleChange = event => {
    const { target } = event
    const { name, value } = target
    setValues({
      ...values,
      [name]: value
    })
  }

  return (
    <Layout actualPage={props.path}>
      <Seo title="Contacto" />
      <Container>
        <Title>CONTACTO</Title>
        <InputGroup>
          <Input 
            type="text" 
            name="name" 
            placeholder="Nombre" 
            iconName="user"
            autocomplete="off"
            onChange={handleChange}
            value={values.name}
          />
          <Input 
            type="email" 
            name="email" 
            placeholder="Email" 
            iconName="email" 
            autocomplete="off"
            onChange={handleChange}
            value={values.email}
          />
        </InputGroup>
        <Textarea 
          name="message" 
          placeholder="Mensaje"
          autocomplete="off"
          onChange={handleChange}
          value={values.message}
        />
      </Container>
    </Layout>
  )
}