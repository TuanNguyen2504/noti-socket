// Reference: https://www.npmjs.com/package/cz-customizable

const TYPES = {
  feat: '✨ feat',
  debug: '🔴 debug',
  fix: '🐞 fix',
  hotfix: '🔥 hotfix',
  wip: '🚧 wip',
  style: '🌈 style',
  docs: '📝 docs',
  perf: `⚡ perf`,
  revert: '🔁 revert',
  refactor: '🛠️ refactor',
  build: '🔨 build',
  setup: '🔧 setup',
  test: '🧪 test',
  deploy: '🚀 deploy',
  docker: '🐳 docker',
  init: '🎉 init'
};
const SCOPES = ['socket', 'api'];

const DIVIDER = '';

module.exports = {
  types: [
    { value: TYPES.feat, name: `${TYPES.feat}: Add a new feature` },
    { value: TYPES.debug, name: `${TYPES.debug}: Debugging` },
    { value: TYPES.fix, name: `${TYPES.fix}: Fix a bug` },
    { value: TYPES.hotfix, name: `${TYPES.hotfix}: Hotfix a bug` },
    { value: TYPES.wip, name: `${TYPES.wip}: Work In Progress` },
    { value: TYPES.style, name: `${TYPES.style}: UI style only changes` },
    { value: TYPES.docs, name: `${TYPES.docs}: Add or update documentation, README.md` },
    { value: TYPES.perf, name: `${TYPES.perf}: A code change that improves performance` },
    { value: TYPES.revert, name: `${TYPES.revert}: Revert a commit` },
    { value: TYPES.refactor, name: `${TYPES.refactor}: Refactor partial or full source` },
    { value: TYPES.build, name: `${TYPES.build}: Add or update regards to build process` },
    { value: TYPES.setup, name: `${TYPES.setup}: Add project configuration` },
    { value: TYPES.test, name: `${TYPES.test}: Add tests` },
    { value: TYPES.deploy, name: `${TYPES.deploy}: Deploying stuff` },
    { value: TYPES.docker, name: `${TYPES.docker}: Docker, container configuration` },
    { value: TYPES.init, name: `${TYPES.init}: Initial commit` }
  ],
  scopes: SCOPES.map((s) => ({ name: s })),
  messages: {
    type: `${DIVIDER} Select the type of change that you're committing ${DIVIDER}`,
    scope: `\n${DIVIDER} Denote the SCOPE of this change (optional) ${DIVIDER}`,
    customScope: `${DIVIDER} Denote the SCOPE of this change ${DIVIDER}`,
    subject: `${DIVIDER} Write a SHORT, IMPERATIVE tense description of the change ${DIVIDER}\n`,
    body: `${DIVIDER} Provide a LONGER description of the change (optional). Use "|" to break new line ${DIVIDER}\n`,
    breaking: `${DIVIDER} List any BREAKING CHANGES (optional) ${DIVIDER}\n`,
    confirmCommit: `${DIVIDER} Are you sure you want to proceed with the commit above? ${DIVIDER}`
  },
  allowBreakingChanges: [TYPES.fix, TYPES.hotfix, TYPES.revert],
  allowCustomScopes: true,
  skipEmptyScopes: true,
  scopeOverrides: {},
  subjectLimit: 100,
  typePrefix: '',
  typeSuffix: '',
  skipQuestions: ['footer']
};
