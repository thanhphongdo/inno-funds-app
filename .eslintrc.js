module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'quote-props': 'off',
    'comma-dangle': 'off',
    'no-useless-constructor': 'off',
    'no-plusplus': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'no-multiple-empty-lines': 'off',
    'no-multi-assign': 'off',
    'space-infix-ops': 'off',
    'comma-spacing': 'off',
    'no-shadow': 'off',
    'one-var-declaration-per-line': 'off',
    'space-before-blocks': 'off',
    'block-spacing': 'off',
    'key-spacing': 'off',
    'prefer-template': 'off',
    'yoda': 'off',
    'quotes': 'off',
    'no-cond-assign': 'off',
    'eqeqeq': 'off',
    'space-unary-ops': 'off',
    'func-names': 'off',
    'comma-spacing': 'off',
    'object-shorthand': 'off',
    'semi': 'off',
    'object-curly-spacing': 'off',
    'import/newline-after-import': 'off',
    'import/first': 'off',
    'import/extensions': 'off',
    'no-param-reassign': 'off',
    'no-sequences': 'off',
    'one-var': 'off',
    'no-var': 'off',
    'semi-spacing': 'off',
    'space-before-function-paren': 'off',
    'prefer-arrow-callback': 'off',
    'no-undef': 'off',
    'no-restricted-globals': 'off',
    'keyword-spacing': 'off',
    'object-curly-newline': 'off',
    'no-void': 'off',
    'no-nested-ternary': 'off',
    'no-return-assign': 'off',
    'no-unused-expressions': 'off',
    'no-sequences': 'off',
    'eol-last': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'no-lone-blocks': 'off',
    'consistent-return': 'off',
    'no-useless-escape': 'off',
    'no-console': 'off',
    'prefer-rest-params': 'off',
    'no-mixed-operators': 'off',
    'consistent-return': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-this-alias': 'off',
    'strict': 'off',
    'no-new-func': 'off',
    'new-parens': 'off',
    'wrap-iife': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'lines-around-directive': 'off',
    'class-methods-use-this': 'off',
    'indent': 'off',
    'no-redeclare': 'off',
    'vars-on-top': 'off',
    'no-empty': 'off',
    'newline-per-chained-call': 'off',
    'no-restricted-syntax': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'no-self-assign': 'off',
    'prefer-destructuring': 'off',
    'block-scoped-var': 'off',
    'no-restricted-properties': 'off',
    'switch-colon-spacing': 'off',
    'default-case': 'off',
    'no-floating-decimal': 'off',
    'prefer-spread': 'off',
    'array-callback-return': 'off',
    'radix': 'off',
    'no-bitwise': 'off',
    'no-label-var': 'off',
    'no-labels': 'off',
    'guard-for-in': 'off',
    'valid-typeof': 'off',
    'no-continue': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'lines-between-class-members': 'off',
    'arrow-body-style': 'off',
    'comma-dangle': 'off',
    'max-len': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    'arrow-parens': 'off',
    'import/prefer-default-export': 'off',
    'no-extra-semi': 'off',
    'no-underscore-dangle': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    'no-trailing-spaces': 'off',
    'spaced-comment': 'off',
    'no-lonely-if': 'off',
    'brace-style': 'off',
    'no-eval': 'off',
    'max-classes-per-file': 'off',
    '@typescript-eslint/ban-types': 'off',
    'import/no-duplicates': 'off',
    'operator-linebreak': 'off',
    'curly': 'off',
    'nonblock-statement-body-position': 'off',
    'import/no-unresolved': 'off',
    // '': 'off',
    // '': 'off',
    // '': 'off',
    // '': 'off',
    // '': 'off',
    // '': 'off',
    // '': 'off',
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        mocha: true,
      },
    },
  ],
};
