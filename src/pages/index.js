import React, { Component } from "react"
import { Helmet } from "react-helmet"

import NavBar from "../components/nav/NavBar"
import Button from "../components/input/Button"

import { fetchResource } from "../common/http"

import "./index.css"

class Index extends Component {
  constructor() {
    super()
    this.state = {
      error: null,
      email: null,
      submittedEmail: false,
      selectedIndex: 0,
    }
  }

  onEmailChange = event => {
    this.setState({ email: event.target.value })
  }

  onSubmitEmail = () => {
    const { email } = this.state
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    }

    if (email) {
      fetchResource("/waiting-list", options)
        .then(() => {
          this.setState({ submittedEmail: true, email: null, error: null })
        })
        .catch(error => {
          this.setState({ error })
        })
    }
  }

  render() {
    return (
      <div className={"index"}>
        <Helmet> />
          <title>stacket.io | Your project manager</title>/>
        </Helmet>

        <NavBar headings={["About"]}
                selectedIndex={this.state.selectedIndex}/>

        <div className={"index-content"}>
          <h1>Visualise your workflow<br/>&amp; facilitate software development</h1>
          <h3>stacket is the easiest and fastest way to simplify project<br/>
            management and get a product from idea to production.</h3>

          <div className={"email-holder"}>
            <input name={"email-input"} placeholder={"email@domain.com"} onChange={this.onEmailChange}/>
            <Button label={"Get started"} onClick={this.onSubmitEmail}/>
          </div>

          {
            this.state.submittedEmail &&
            <h3>Thank you! You will be notified when stacket.io has product availability updates.</h3>
          }

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
