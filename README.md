![Shorten your URL web app by alex disdier](/screenshot.gif?raw=true "Gif Shorten your URL web app by alex disdier")

# Synopsis

This is an open source web app to shorten urls. I will be using ReactJS for the front-end and NodeJS for the back-end

## Usage example

- See demo front-end - https://short-url-ad.herokuapp.com/

- See back-end - https://short-url-alex-disdier.herokuapp.com/

## ✅ Functionalities

- Enter an URL to shorten
- Display a list of all the shorten URLs already created by users
- Each shorten URL will be unique and a maximum length of 5 characters
- Display the number of visits each shorten URLs already has
- The shorten URL will redirect to the original page
- Each time a shorten URL is clicked, the counter for that URL will be incremented
- Copy the short URL created
- URL Validation
- Mobile responsive

## Directory Structure

```bash

shorten-url
├── public
├── src
│   ├── assets
│   │   ├── css
│   │   ├── img
│   │   ├── domain.js
│   ├── components
│   │   ├── Header
│   │   ├── Loading
│   │   ├── Table
│   │   │   └── Line
│   │   └── Validation
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   └── serviceWorker.js
├── .gitignore
├── package-lock.json
├── package.json
└── README.md

```

## Running the project

Clone this repository :

```bash
git clone https://github.com/alexdisdier/shorten-url.git

cd shorten-url
```

Start the server:

```bash
npm start
```

Build the project

```bash
npm run build
```

## Built With

- html
- css
- [JavaScript](https://developer.mozilla.org/bm/docs/Web/JavaScript)
- [React.js](https://reactjs.org/docs/hello-world.html)
- [Create React App](https://facebook.github.io/create-react-app/docs/getting-started)

## Acknowledgments

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
