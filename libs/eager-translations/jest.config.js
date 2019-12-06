module.exports = {
  name: 'eager-translations',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/eager-translations',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
