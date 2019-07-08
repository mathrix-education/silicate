const fs = require('fs');
const path = require('path');

const root = path.resolve(`${__dirname}/../..`);
const project = process.argv[2];
const commit = process.argv[3];
const directory = `${root}/node_modules/@mathrix/${project}`;
const packageJson = `${directory}/package.json`;
const packageJsonVal = JSON.parse(fs.readFileSync(packageJson).toString());
const version = `${packageJsonVal.version}-${commit}`;

packageJsonVal.version = version;
fs.writeFileSync(packageJson, JSON.stringify(packageJsonVal, undefined, 2));
