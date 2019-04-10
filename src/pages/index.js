import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`kindohm`, `music`, `tidalcycles`, `livecoding`, `code`, `algorave`, `computer`, `programming`, `chaska`, `minneapolis`, `mike hodnick`, `hodnick`]} />
    <h2 className="h3">Mike Hodnick</h2>
    <h2 className="h3">Sound Artist/Programmer from Chaska, MN, USA.</h2>

    <ul>
      <li className="h3">
        <Link to="/bio/">Bio</Link>
      </li>
      <li className="h3">
        <Link to="/cv/">CV</Link>
      </li>
      <li className="h3">
        <Link to="/releases/">Releases</Link>
      </li>
      <li className="h3">
        <a href="//youtube.com/kindohm">YouTube</a>
      </li>
      <li className="h3">
        <a href="//instagram.com/kindohm_">Instagram</a>
      </li>
      <li className="h3">
        <a href="//github.com/kindohm">GitHub</a>
      </li>
      <li className="h3">
        <a href="mailto:mike@kindohm.com">Email</a>
      </li>
      <li className="h3">
        <a href="//twitter.com/kindohm">Twitter</a>
      </li>
    </ul>
  </Layout>
)

export default IndexPage
