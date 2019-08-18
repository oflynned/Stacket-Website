import React, { Component } from "react"
import { Helmet } from "react-helmet"

import NavBar from "../components/nav/NavBar"

import "./index.css"
import { Button } from "../components/input/Button"

class Index extends Component {
  constructor() {
    super()
    this.state = {
      submittedEmail: false,
      selectedIndex: 0,
    }
  }

  onNavHeadingClick = index => {

  }

  onSubmitEmail = email => {
    this.setState({ submittedEmail: true })
  }

  render() {
    return (
      <div className={"index"}>
        <Helmet> />
          <title>stacket</title>/>
        </Helmet>

        <NavBar headings={["About"]}
                selectedIndex={this.state.selectedIndex}
                onClick={this.onNavHeadingClick}/>

        <div className={"index-content"}>
          <h1>Visualise your workflow<br/>&amp; facilitate software development</h1>
          <h3>stacket is the easiest and fastest way to simplify project<br/>
            management and get a product from idea to production.</h3>

          <div className={"email-holder"}>
            <input name={"email-input"} placeholder={"email@domain.com"}/>
            <Button label={"Get started"} onClick={this.onSubmitEmail}/>
          </div>

          {
            this.state.submittedEmail &&
            <h3>Thank you! You will be notified when stacket.io has product availability updates.</h3>
          }

          {/*<div className={"preview-holder"}>*/}
          {/*  <img className={"preview"} src={require("../assets/images/macbook-outline.png")}/>*/}
          {/*</div>*/}
        </div>

        <footer>
          <div className={"line"}/>
          <p>&copy; stacket.io {new Date().getFullYear()}</p>
        </footer>
      </div>
    )
  }
}

export default Index
