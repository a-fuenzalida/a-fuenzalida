import React, { useState } from 'react'
import { Nav } from './navigationStyles'

export default function Navigation() {
  const [items, setItems] = useState([
    {
      name: 'home',
      url: '/',
      active: false
    },
    {
      name: 'about',
      url: '/about',
      active: false
    },
    {
      name: 'projects',
      url: '/projects',
      active: false
    },
    {
      name: 'contact',
      url: '/contact',
      active: false
    },
  ])

  return (
    <Nav>
      { items.map(item => (
        <p>{item.name}</p>
      )) }
    </Nav>
  )
}
