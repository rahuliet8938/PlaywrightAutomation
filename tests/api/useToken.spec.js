const { test, expect } = require('@playwright/test');
const settings = require('../../config/settings.json');
const { readData } = require('../../utils/dataHandler');

test('Use ConvertAPI to convert uploaded file to PDF', async () => {
  const { fileId } = readData();
  const secret = settings.secret;

  const url = `https://v2.convertapi.com/convert/doc/to/pdf?Secret=${secret}&File=${fileId}`;
  const response = await fetch(url);
  expect(response.status).toBe(200);

  console.log('Converted PDF file URL or binary:', await response.text());
});
