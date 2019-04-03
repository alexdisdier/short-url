import React, { Component } from "react";
import axios from "axios";

import Header from "./components/Header/Header";
import Table from "./components/Table/Table";
import Loading from "./components/Loading/Loading";
import domain from "./assets/domain";

import "./assets/css/reset.css";
import "./App.css";

class App extends Component {
  state = {
    urls: [],
    url: "",
    copySuccess: "",
    isValid: true,
    isLoading: true
  };

  async componentDidMount() {
    try {
      const response = await axios.get(domain + "url");
      const urls = response.data.urls;
      await this.setState({
        urls: urls,
        isLoading: false
      });
    } catch (error) {
      console.log(error);
    }
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
    const urls = [...this.state.urls];
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

  // Source: http://localhost:3001/A5Z6z
  copyToClipboard = url => {
    const el = document.createElement("textarea");
    el.value = url;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
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
    const { isLoading, urls } = this.state;

    if (isLoading) {
      return <Loading />;
    } else {
      return (
        <Table
          urls={urls}
          incVisits={this.incVisits}
          copyToClipboard={this.copyToClipboard}
        />
      );
    }
  };

  render() {
    const { url, isValid } = this.state;
    return (
      <div className="App">
        <Header
          url={url}
          isValid={isValid}
          addShort={this.addShort}
          handleShort={this.handleShort}
        />
        {this.renderTable()}
      </div>
    );
  }
}

export default App;
