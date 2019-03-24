module.exports = {
  globals: {
    describe: false,
    before: false,
    after: false,
    it: false,
    module: false,
    afterEach: false,
    beforeEach: false
  },
  rules: {
    'node/no-missing-import': ['error', {
      'allowModules': [],
      'resolvePaths': ['node_modules', './', './tests'],
      'tryExtensions': ['.js']
    }]
  }
}
