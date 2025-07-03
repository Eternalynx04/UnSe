import { runTests } from '@vscode/test-electron';

async function main() {
  try {
    await runTests({
      extensionDevelopmentPath: __dirname,
      extensionTestsPath: __dirname + '/extension.test.js',
    });
  } catch (err) {
    console.error('Failed to run tests');
    process.exit(1);
  }
}

main();
