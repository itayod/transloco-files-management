module.exports = {
  name: 'transloco-files-management',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/transloco-files-management',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
