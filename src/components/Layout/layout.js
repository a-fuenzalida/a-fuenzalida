import React, { Fragment, useState, useEffect, useRef } from 'react'
import * as THREE from 'three'
import NET from 'vanta/dist/vanta.net.min'
import { GlobalStyle, LayoutBody, Main } from './layoutStyles'
import Navigation from '../Navigation/navigation'

export default function Layout({ actualPage, children }) {
  const [vantaEffect, setVantaEffect] = useState(0)
  const globalRef = useRef(null)

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(NET({
        el: globalRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 500.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x282c34,
        backgroundColor: 0x14161A,
        points: 6.00,
        maxDistance: 24.00,
        spacing: 30.00
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <Fragment>
      <GlobalStyle />
      <LayoutBody ref={globalRef} >
        <Navigation actualPage={actualPage} />
        <Main>
          {children}
        </Main>
      </LayoutBody>
    </Fragment>
  )
}