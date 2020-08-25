import React, { useState } from 'react'
import { Nav } from './navigationStyles'

import { navigationData } from '../../mock/data'

export default function Navigation() {
  return (
    <Nav>
      { navigationData.map(item => (
        <p>{item.icon}</p>
      )) }
    </Nav>
  )
}
