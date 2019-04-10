import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
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

    <div>
      <iframe title="Algorithmic Art Assembly" width="560" height="315" src="https://www.youtube.com/embed/RiEq_h5UQJM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <br></br>
      <iframe title="Live Coding Conference 2016, Hamilton" width="560" height="315" src="https://www.youtube.com/embed/smQOiFt8e4Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <br></br>
      <iframe title="Mesabi Range" style={{border: 0, width: '400px', height: '406px'}} src="https://bandcamp.com/EmbeddedPlayer/album=3918382788/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/" seamless><a href="http://nadarecs.bandcamp.com/album/kindohm-mesabi-range">Kindohm - Mesabi Range by Kindohm</a></iframe>
      <br></br>
      <iframe title="RISC Chip" style={{border: 0, width: '400px', height: '406px'}} src="https://bandcamp.com/EmbeddedPlayer/album=2609768379/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/" seamless><a href="http://shop.conditional.club/album/risc-chip">RISC Chip by Kindohm</a></iframe>
    </div>


  </Layout>
)

export default IndexPage
