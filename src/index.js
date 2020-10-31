const config = {
  extends: [
    'plugin:@shopify/esnext',
    'plugin:@shopify/react',
    'plugin:@shopify/node',
    'plugin:@shopify/prettier',
  ],
  rules: {
    'id-length': 'off',
    '@shopify/jsx-no-hardcoded-content': 'off',
    'babel/object-curly-spacing': ['error', 'always'],
    'node/no-extraneous-require': 'error',
    'react/jsx-pascal-case': 'off',
  },
};

export default config;
