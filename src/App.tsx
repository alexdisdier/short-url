import * as React from 'react';
import axios from 'axios';

import Header from './components/Header/Header';
import Table from './components/Table/Table';
import Loading from './components/Loading/Loading';

import { addTextToClipboard, isValidURL } from './utils';
import domain from './assets/domain';
import { Urls } from './types';

import './assets/css/reset.css';
import './App.css';

interface AppState {
  urls: Array<Urls>;
  url: string;
  copy: boolean;
  isValid: boolean;
  isLoading: boolean;
  windowWidth: number;
}

class App extends React.Component<{}, AppState> {
  state: AppState = {
    urls: [],
    url: '',
    copy: false,
    isValid: true,
    isLoading: true,
    windowWidth: window.innerWidth
  };

  async componentDidMount() {
    window.addEventListener('resize', () =>
      this.setState({ windowWidth: window.innerWidth })
    );
    try {
      const response = await axios.get(`${domain}url`);
      const urls = response.data.urls;
      await this.setState({
        urls: urls,
        isLoading: false
      });
    } catch (error) {
      console.log(error);
    }
  }

  handleShort = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, value }: any = event.target;
    const stateToUpdate: any = {};
    if (isValidURL(value)) {
      this.setState({
        isValid: true
      });
    }
    stateToUpdate[name] = value;
    this.setState(stateToUpdate);
  };

  addShort = async () => {
    const { url, urls: stateUrls } = this.state;

    let urls: Array<Urls> = [];

    if (stateUrls !== undefined) {
      urls = [...stateUrls];
    }
    try {
      if (isValidURL(url)) {
        const response = await axios.post(`${domain}shorten`, {
          url
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

  incVisits = async (id: string) => {
    const { urls: stateUrls } = this.state;
    try {
      const urls: Array<Urls> = [...stateUrls];
      await axios.post(`${domain}update/${id}`);
      for (let i = 0; i < urls.length; i += 1) {
        if (urls[i]._id === id) {
          urls[i].visits += 1;
        }
      }
      this.setState({
        urls: urls
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  copyToClipboard = async (url: string) => {
    addTextToClipboard(url);
    await this.setState({
      copy: true
    });
    setTimeout(() => {
      this.setState({
        copy: false
      });
    }, 2000);
  };

  renderTable = () => {
    const { isLoading, urls, windowWidth } = this.state;
    if (isLoading) return <Loading />;
    return (
      <Table
        urls={urls}
        incVisits={this.incVisits}
        copyToClipboard={this.copyToClipboard}
        windowWidth={windowWidth}
      />
    );
  };

  render() {
    const { url, isValid, copy } = this.state;
    return (
      <div className="App">
        {copy && <span className="clipboard-show">Copied</span>}
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
