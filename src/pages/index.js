import React, { Component } from "react"
import { Helmet } from "react-helmet"

import NavBar from "../components/nav/NavBar"

import "./index.css"

class Index extends Component {
  constructor() {
    super()
    this.state = {
      selectedIndex: 0,
    }
  }

  render() {
    return (
      <div className={"index"}>
        <Helmet> />
          <title>stacket</title>/>
        </Helmet>

        <NavBar headings={["Girly", "Boyey", "Beany"]} selectedIndex={this.state.selectedIndex}/>

        <div className={"index-content"}>
          <h1>Visualise your workflow<br/>&amp; facilitate software development</h1>
          <h3>stacket is the easiest and fastest way to simplify project<br/>
            management and get a product from idea to production</h3>

          <div className={"preview-holder"}>
            <img className={"preview"} src={require("../assets/images/macbook-outline.png")}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Index
