module.exports = {
  name: 'scoped-library',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/scoped-library',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
