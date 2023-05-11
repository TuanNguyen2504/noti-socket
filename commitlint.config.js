module.exports = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: {
    parserOpts: {
      headerPattern: /^(.*)\((.*)\):\s(.*)$/,
      headerCorrespondence: ['type', 'scope', 'subject']
    }
  },
  rules: {
    'header-max-length': [2, 'never', 100],
    'type-enum': [
      2,
      'always',
      [
        '✨ feat',
        '🐞 fix',
        '🔴 debug',
        '🔥 hotfix',
        '🚧 wip',
        '🌈 style',
        '📝 docs',
        `⚡ perf`,
        '🔁 revert',
        '🔨 build',
        '🛠️ refactor',
        '🔧 setup',
        '🧪 test',
        '🚀 deploy',
        '🐳 docker',
        '🎉 init'
      ]
    ],
    'subject-empty': [2, 'never'],
    'type-empty': [2, 'never'],
    'scope-empty': [2, 'never']
  }
};
