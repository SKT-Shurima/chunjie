module.exports = {
  // root: true,
  // Specifies the ESLint parser
  parser: '@typescript-eslint/parser',
  extends: [
    // Uses the recommended rules from @eslint-plugin-react
    'plugin:react/recommended',
    // Uses the recommended rules from @typescript-eslint/eslint-plugin
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint'
  ],
  plugins: ['@typescript-eslint'],
  parserOptions: {
    // Allows for the parsing of modern ECMAScript features
    ecmaVersion: 2019,
    // Allows for the use of imports
    sourceType: 'module',
    project: './tsconfig.json',
    ecmaFeatures: {
      // Allows for the parsing of JSX
      jsx: true
    }
  },
  rules: {
    // our plugin
    'prettier/prettier': 1,
    '@typescript-eslint/adjacent-overload-signatures': 1,
    '@typescript-eslint/camelcase': 'warn',
    '@typescript-eslint/class-name-casing': 'error',
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'never'
      }
    ],
    '@typescript-eslint/explicit-function-return-type': [
      'off',
      { allowTypedFunctionExpressions: true }
    ],
    '@typescript-eslint/explicit-member-accessibility': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/interface-name-prefix': 0,
    // '@typescript-eslint/indent': [
    //   'error',
    //   2,
    //   { VariableDeclarator: 4, SwitchCase: 1 }
    // ],
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-inferrable-types': 2,
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/triple-slash-reference': [
      'error',
      {
        path: 'always',
        types: 'never',
        lib: 'never'
      }
    ],
    '@typescript-eslint/unbound-method': 'off',
    // eslint base
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error']
      }
    ],
    'no-const-assign': 'error',
    'no-debugger': 'error',
    'no-dupe-keys': 'error',
    'no-dupe-args': 'error',
    'no-duplicate-case': 'error',
    'no-extra-bind': 'error',
    'no-undef': 'error',
    'no-extra-boolean-cast': 'error',
    'no-new-object': 'error',
    'no-template-curly-in-string': 'error',
    'no-tabs': 'off',
    'max-depth': [0, 4], //嵌套块深度
    'max-params': [0, 3], //函数最多只能有3个参数
    eqeqeq: ['warn', 'always'],
    'react/display-name': 0,
    'react/jsx-filename-extension': [
      0,
      {
        extensions: ['.jsx', '.tsx', '.ts']
      }
    ],
    // 对于没有子元素的标签来说总是自己关闭标签
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true
      }
    ],
    'no-return-assign': 'error', // 禁止在 return 语句中使用赋值语句
    'object-shorthand': 'error' // 属性简写
  },
  settings: {
    react: {
      // Tells eslint-plugin-react to automatically detect the version of React to use
      version: 'detect'
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true
  },
  globals: {
    _: true
  }
};
