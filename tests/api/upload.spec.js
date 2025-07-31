const { test } = require('@playwright/test');
const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');
const path = require('path');
const { readData, saveData } = require('../../utils/dataHandler');

test('Upload file to ConvertAPI using multipart/form-data', async () => {
  const { filePath } = readData();
  const form = new FormData();
  form.append('file', fs.createReadStream(filePath));

  const response = await axios.post('https://v2.convertapi.com/upload', form, {
    headers: form.getHeaders()
  });

  console.log('Upload response:', response.data);
  const previousData = readData();
  saveData({ ...previousData, fileId: response.data.FileId });
});
