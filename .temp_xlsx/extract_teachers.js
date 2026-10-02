const fs = require('fs');
const data = require('./parsed.json');

const teachersSet = new Set();
const teachersInfo = {};

data.Feuil1.forEach(row => {
  const name = row["NOM et PRENON DE L’enseignant"]?.trim();
  const ue = row["              Unité d'enseignement"]?.trim();
  const grade = row["GRADE"]?.trim();

  if (name) {
    teachersSet.add(name);
    if (!teachersInfo[name]) {
      teachersInfo[name] = {
        name,
        grade: grade || "",
        subjects: new Set()
      };
    }
    if (ue) {
      teachersInfo[name].subjects.add(ue);
    }
  }
});

const teachers = Array.from(teachersSet).map(name => {
  const info = teachersInfo[name];
  const id = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  return {
    id: id,
    name: info.name,
    title: info.grade || "Enseignant",
    specialty: Array.from(info.subjects).slice(0, 3).join(", "),
    department: "I3SN",
    imageUrl: "/images/teachers/teacher-placeholder.jpg",
    email: `${id}@i3sn.cm`,
    phone: "+237 6XX XX XX XX",
    bio: `Enseignant à l'I3SN. Dispensant les cours suivants: ${Array.from(info.subjects).join(', ')}.`
  };
});

fs.writeFileSync('teachers_extracted.json', JSON.stringify(teachers, null, 2));
console.log('Extracted', teachers.length, 'teachers');
