const fs = require('fs');
const path = './temp/data.json';

exports.saveData = (data) => {
  const existing = fs.existsSync(path) ? JSON.parse(fs.readFileSync(path)) : {};
  fs.writeFileSync(path, JSON.stringify({ ...existing, ...data }));
};

exports.readData = () => JSON.parse(fs.readFileSync(path));