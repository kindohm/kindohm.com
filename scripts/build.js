const fsExtra = require('fs-extra')

console.log('building.');

const srcFolder = `${__dirname}/..`;

const fs = require('fs');
const distFolder = `${srcFolder}/dist`;

console.log(`out dir: ${distFolder}`);

if (fs.existsSync(distFolder)) {
  console.log('removing existing dist folder');
  fs.rmdirSync(distFolder, { recursive: true });
}

console.log('creating dist folder');
fs.mkdirSync(distFolder);

console.log('copying files');
const files = ['index.html', 'newsletter.html', 'style.css', '404.html'];

files.forEach((file) => {
  console.log(file);
  fs.copyFileSync(`${srcFolder}/${file}`, `${distFolder}/${file}`);
});

fsExtra.copySync(`${srcFolder}/posts`, `${distFolder}/posts`)

console.log('done');
