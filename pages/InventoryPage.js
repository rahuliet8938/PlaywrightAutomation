exports.InventoryPage = class InventoryPage {
  constructor(page) {
    this.page = page;
    this.inventoryItems = page.locator('.inventory_item');
  }

  async countItems() {
    return await this.inventoryItems.count();
  }
};