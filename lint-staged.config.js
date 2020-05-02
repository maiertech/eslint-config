module.exports = {
  '*.js': ['eslint --fix', 'git add'],
  '*.md': ['prettier --write', 'prettier --check', 'git add'],
};
