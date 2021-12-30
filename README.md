![Continuous Integration](https://github.com/alexdisdier/short-url/workflows/Continuous%20Integration/badge.svg?branch=master)

![Shorten your URL web app by alex disdier](/screenshot.gif?raw=true 'Gif Shorten your URL web app by alex disdier')

# Synopsis

This is an open source web app to shorten urls. I used ReactJS for the front-end and NodeJS for the back-end

## Usage example

- See [demo front-end](https://ptitlink.live)

- See [back-end source code](https://ptitlink.herokuapp.com)

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

## 🚧 Working progress

- Apollo Client on git branch **apollo** (My Table functional component uses my GraphQL endpoint using apollo client)
  - Need to implement my GraphQL resolvers

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

command line to change all your js files into ts

```bash
  for file in *.js; do mv "$file" "${file%.js}.ts"; done
```

Make sure to import all the @types for your modules.

## Running the project

Clone this repository :

```bash
git clone https://github.com/alexdisdier/shorten-url.git

cd shorten-url
```

Test different branches:

```bash
git checkout apollo
git checkout Jest
```

Start the server:

```bash
yarn start
```

Build the project

```bash
yarn build
```

## Built With

- html
- css
- [JavaScript](https://developer.mozilla.org/bm/docs/Web/JavaScript)
- [React.js](https://reactjs.org/docs/hello-world.html)
- [Create React App](https://facebook.github.io/create-react-app/docs/getting-started)

## Acknowledgments

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## AWS backend

### sync upstream changes

```bash
amplify pull
```

### update your types locally

```bash
 amplify codegen
```

### push local changes upstream

```bash
amplify push
```

### aws troubleshooting

https://docs.amplify.aws/cli/graphql/authorization-rules

- since we gitignore aws-exports, for CI purposes, we need to create a file of the same name when running remotely a build.

  - I added a script `npm run create:aws:export` to `package.json` which I run in a [GitHub action](.github/workflows/ci.yml) before running the build.
  - [create-aws-export](scripts/create-aws-export.js)

- since aws hook will automatically deploy once we merge branch into master, we need to deploy the backend along with the frontend. For this purpose, we'll download the amplify.yml to our project and add the backend build.

  - aws amplify -> App settings -> Build settings
  - https://github.com/aws-amplify/amplify-console/issues/470#issuecomment-622191679
  - https://docs.aws.amazon.com/amplify/latest/userguide/build-settings.html#frontend-with-backend

- one more step: within Amplify Console - Advanced Settings, we should configure the version of Amplify CLI used for our CI/CD builds to the latest. Then add a new role. This will allows amplify to build the backend and provide a aws-exports file when building the frontend.

  - aws amplify -> App settings -> Build settings
  - https://github.com/aws-amplify/amplify-cli/issues/6117#issuecomment-742623717

If we accidentally commit some aws files which should be kept secret. In order to delete file from Git history, you have to use the “git filter-branch” command and specify the command to be executed on all the branches of your Git history.

`<path_to_file>` is the path from root.

```bash
## from anywhere
brew install git-filter-repo

## from your project folder root
git filter-branch --force --index-filter --prune-empty "git rm --cached --ignore-unmatch <path_to_file>" HEAD

git push
```

- https://devconnected.com/how-to-delete-file-on-git/
