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
    isLoading: true
  };

  async componentDidMount() {
    try {
      const response = await axios.get(`${domain}/url`);
      const urls = response.data.urls;
      this.setState({
        urls: urls,
        isLoading: false
      });
    } catch (error) {
      console.log(error);
    }
  }

  renderTable = () => {
    const { isLoading, urls } = this.state;

    if (isLoading) {
      return <Loading />;
    } else {
      return <Table urls={urls} />;
    }
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Header />
        {this.renderTable()}
      </div>
    );
  }
}

export default App;
