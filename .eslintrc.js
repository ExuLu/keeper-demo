module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb',
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    // 'react/jsx-no-bind': [
    //   {
    //     ignoreDOMComponents: false,
    //     ignoreRefs: false,
    //     allowArrowFunctions: false,
    //     allowFunctions: false,
    //     allowBind: false,
    //   },
    // ],
  },
};
