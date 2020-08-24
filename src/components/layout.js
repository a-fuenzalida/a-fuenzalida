import React, { Fragment } from "react"
import { GlobalStyle, LayoutBody, Main } from "./layoutStyles"
import Navigation from "./navigation"

export default function Layout({ children }) {
  return (
    <Fragment>
      <GlobalStyle />
      <LayoutBody>
        <aside>
          <Navigation />
        </aside>
        <Main>
          {children}
        </Main>
      </LayoutBody>
    </Fragment>
  )
}