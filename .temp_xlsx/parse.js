const xlsx = require('xlsx');
const fs = require('fs');

const workbook = xlsx.readFile('C:/Users/ndocm/Downloads/I3SN S1 2025- 2026.xlsx');
const data = {};

workbook.SheetNames.forEach(sheetName => {
  const sheet = workbook.Sheets[sheetName];
  const json = xlsx.utils.sheet_to_json(sheet, { defval: "" });
  
  // Filter out empty rows (where all values are empty strings)
  const cleaned = json.filter(row => Object.values(row).some(v => v !== ""));
  data[sheetName] = cleaned;
});

fs.writeFileSync('C:/Users/ndocm/Desktop/site_i3sn/.temp_xlsx/parsed.json', JSON.stringify(data, null, 2));
console.log('Successfully written to parsed.json');
