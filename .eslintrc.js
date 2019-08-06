module.exports = {
  parserOptions: {
    ecmaVersion: 7,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  parser: "babel-eslint",
  extends: ["airbnb", "prettier", "prettier/react", "prettier/standard"],
  env: {
    browser: true,
    mocha: true,
    node: true,
    jest: true
  },
  plugins: ["prettier"],
  rules: {
    "react/no-array-index-key": 0,
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "no-use-before-define": 0,
    "jsx-a11y/no-autofocus": 0,
    "react/sort-comp": 0,
    "react/prefer-stateless-function": 0,
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["to"]
      }
    ],
    "jsx-a11y/label-has-for": [
      2,
      {
        required: {
          some: ["nesting", "id"]
        }
      }
    ],
    "no-underscore-dangle": 0,
    "no-debugger": 0,
    "no-console": 0,
    "import/no-named-as-default": 0,
    "import/prefer-default-export": 0,
    "object-shorthand": 0,
    "react/forbid-prop-types": 0,
    "class-methods-use-this": 0,
    "no-param-reassign": [
      2,
      {
        props: false
      }
    ],
    "react/jsx-filename-extension": 0,
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "**/test/**",
          "**/*.test.js",
          "**/rollup*.js",
          "**/karma.conf.js",
          "**/setupTests.js",
          "**/*stories.js",
          "**/jest.*.js",
          "**/utils/tests.js"
        ],
        optionalDependencies: false
      }
    ],
    "import/extensions": [
      "error",
      "always",
      {
        js: "never",
        jsx: "never",
        mjs: "never"
      }
    ],
    "prettier/prettier": [
      "error",
      {
        singleQuote: true
      }
    ]
  },
  overrides: [
    {
      files: "*.test.js",
      rules: {
        "no-unused-expressions": "off"
      }
    }
  ],
  settings: {
    "import/resolver": {
      node: {
        paths: ["./src"]
      }
    }
  }
};
