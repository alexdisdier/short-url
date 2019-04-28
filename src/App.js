import React, { Component } from "react";
import axios from "axios";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import Header from "./components/Header/Header";
import Table from "./components/Table/Table";
import domain from "./assets/domain";

import "./assets/css/reset.css";
import "./App.css";

// apollo client setup
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

class App extends Component {
  state = {
    urls: [],
    url: "",
    copy: false,
    isValid: true,
    windowWidth: window.innerWidth
  };

  componentDidMount() {
    window.addEventListener("resize", () =>
      this.setState({ windowWidth: window.innerWidth })
    );
  }

  handleShort = event => {
    const name = event.target.name;
    const value = event.target.value;
    const stateToUpdate = {};
    if (this.isValidURL(value)) {
      this.setState({
        isValid: true
      });
    }
    stateToUpdate[name] = value;
    this.setState(stateToUpdate);
  };

  addShort = async () => {
    let urls = [];
    if (this.state.urls !== undefined) {
      urls = [...this.state.urls];
    }
    const { url } = this.state;
    try {
      if (this.isValidURL(url)) {
        const response = await axios.post(domain + "shorten", {
          url: this.state.url
        });
        urls.push(response.data);
        await this.setState({
          urls: urls
        });
      } else {
        this.setState({
          isValid: false
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  incVisits = async id => {
    try {
      const urls = [...this.state.urls];
      await axios.post(domain + "update/" + id);
      for (let i = 0; i < urls.length; i++) {
        if (urls[i]._id === id) {
          urls[i].visits++;
        }
      }
      this.setState({
        urls: urls
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  // Source: https://hackernoon.com/copying-text-to-clipboard-with-javascript-df4d4988697f
  copyToClipboard = async url => {
    const el = document.createElement("textarea");
    el.value = url;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    await this.setState({
      copy: true
    });
    setTimeout(() => {
      this.setState({
        copy: false
      });
    }, 2000);
  };

  // Function to check if the url entered is of a conventional format
  // source: https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url
  isValidURL = str => {
    const pattern = new RegExp(
      "^(https?:\\/\\/)?" +
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
        "((\\d{1,3}\\.){3}\\d{1,3}))" +
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
        "(\\?[;&a-z\\d%_.~+=-]*)?" +
        "(\\#[-a-z\\d_]*)?$",
      "i"
    );
    return !!pattern.test(str);
  };

  renderTable = () => {
    const { windowWidth } = this.state;

    return (
      <Table copyToClipboard={this.copyToClipboard} windowWidth={windowWidth} />
    );
  };

  render() {
    const { url, isValid, copy } = this.state;
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <span className={copy ? "clipboard-show" : "clipboard-hidden"}>
            Copied
          </span>
          <Header
            url={url}
            isValid={isValid}
            addShort={this.addShort}
            handleShort={this.handleShort}
            copy={copy}
          />
          {this.renderTable()}
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
