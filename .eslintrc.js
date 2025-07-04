module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: `react-app`,
  rules: {
    // カスタムルールをここに追加
    'no-console': 'warn',
    'no-unused-vars': ['error', { 
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_' 
    }],
    'react/prop-types': 'off', // PropTypesは使用していないため
  },
  overrides: [
    {
      files: ['**/*.js', '**/*.jsx'],
      rules: {
        // JavaScript特有のルール
      }
    }
  ]
}