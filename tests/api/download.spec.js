const { test } = require('@playwright/test');
const fs = require('fs');
const path = require('path');
const https = require('https');
const { saveData, readData } = require('../../utils/dataHandler');

const fileUrl = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/doc/dummy.doc';
const filePath = path.join(__dirname, '../../temp/dummy.doc');
const modifiedPath = path.join(__dirname, '../../temp/modified_dummy.doc');

test('Download, modify and save file', async () => {
  const file = fs.createWriteStream(filePath);
  await new Promise((resolve, reject) => {
    https.get(fileUrl, response => {
      response.pipe(file);
      file.on('finish', () => file.close(resolve));
    }).on('error', reject);
  });

  const content = fs.readFileSync(filePath);
  fs.writeFileSync(modifiedPath, content);
  const existing = fs.existsSync(path.join(__dirname, '../../temp/data.json'))
    ? JSON.parse(fs.readFileSync(path.join(__dirname, '../../temp/data.json')))
    : {};
  fs.writeFileSync(path.join(__dirname, '../../temp/data.json'), JSON.stringify({ ...existing, filePath: modifiedPath }));
});