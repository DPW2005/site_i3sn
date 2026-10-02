const fs = require('fs');
const data = require('./parsed.json');

const courses = {};

// Clean CIBLE strings (e.g. "SFM1/TEK1" -> ["SFM1", "TEK1"])
function processCible(cibleStr, ue) {
  if (!cibleStr) return;
  const parts = cibleStr.split('/');
  parts.forEach(p => {
    p = p.trim().replace(/\s+/g, '');
    if (!p) return;
    
    // Extract program (letters) and year (number)
    const match = p.match(/^([a-zA-Z\-]+)(\d*)$/);
    if (match) {
      const prog = match[1].toUpperCase();
      const year = match[2] || "1";
      
      if (!courses[prog]) courses[prog] = {};
      if (!courses[prog][year]) courses[prog][year] = new Set();
      
      courses[prog][year].add(ue);
    } else {
      // If no match, just group it anyway
      if (!courses[p]) courses[p] = {};
      if (!courses[p]["1"]) courses[p]["1"] = new Set();
      courses[p]["1"].add(ue);
    }
  });
}

data.Feuil1.forEach(row => {
  const cible = row['CIBLE'];
  const ue = row["              Unité d'enseignement"]?.trim();
  if (cible && ue) {
    processCible(cible, ue);
  }
});

// Convert Sets to Arrays
for (const prog in courses) {
  for (const year in courses[prog]) {
    courses[prog][year] = Array.from(courses[prog][year]);
  }
}

fs.writeFileSync('courses.json', JSON.stringify(courses, null, 2));
console.log('Successfully grouped courses into courses.json');
