const { test, expect } = require('@playwright/test');
const { readData } = require('../../utils/dataHandler');

test('Read inventory count from file', async () => {
  const data = readData(); // <-- define the object
    console.log('Data read from file:', data); // Optional debug log

    expect(data).toHaveProperty('inventoryCount');
    expect(typeof data.inventoryCount).toBe('number');
    expect(data.inventoryCount).toBeGreaterThan(0);
});


