import * as React from "react"
import type { HeadFC } from "gatsby"
import HeaderBar from "../components/header/HeaderBar"

const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <HeaderBar title="PhishWallet"/>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
