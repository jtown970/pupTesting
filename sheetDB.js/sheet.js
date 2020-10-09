const { GoogleSpreadsheet } = require('google-spreadsheet');

module.exports = class Sheet {
  constructor() {
    this.doc = new GoogleSpreadsheet('1F1XlGxpgyDnv9ORV8PtW0i8uLuNjlzZJ_UaBIjkXmgc');
  }
  async load() {
    await this.doc.useServiceAccountAuth(require('./credentials.json'));
    
    await this.doc.loadInfo(); 
  }
  async addRows(rows, i){
    const sheet = this.doc.sheetsByIndex[i]; 
    await sheet.addRows(rows);
  }
  async getRows (i){
    const sheet = await this.sheetsByIndex[i];
    const rows = await this.getRows();
    return rows
  }
}