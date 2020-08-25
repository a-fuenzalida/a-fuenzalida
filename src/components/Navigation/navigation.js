import React from 'react'
import { Link } from 'gatsby'
import { Nav, Item } from './navigationStyles'
import Icon from '../../../assets/Icon'

import { navigationData } from '../../mock/data'

export default function Navigation({ actualPage }) {
  const isActualPage = (page) => {
    return page === actualPage
  }

  return (
    <Nav>
      { 
        navigationData.map(item => (
          <Item key={item.title}>
            <Link to={item.url}>
              <Icon name={item.icon} size="1.3em" color={isActualPage(item.url) ? '#b06ab3' : '#909bb3'} />
            </Link>
          </Item>
        ))
      }
    </Nav>
  )
}
