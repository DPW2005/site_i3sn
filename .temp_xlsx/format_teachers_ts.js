const fs = require('fs');
const teachers = require('./teachers_extracted.json');

let tsContent = `export interface Teacher {
  id: string;
  name: string;
  title: string;
  specialty: string;
  department: string;
  imageUrl: string;
  email?: string;
  phone?: string;
  bio: string;
}

export const teachers: Teacher[] = [\n`;

teachers.forEach(t => {
  tsContent += `  {
    id: ${JSON.stringify(t.id)},
    name: ${JSON.stringify(t.name)},
    title: ${JSON.stringify(t.title)},
    specialty: ${JSON.stringify(t.specialty)},
    department: ${JSON.stringify(t.department)},
    imageUrl: ${JSON.stringify(t.imageUrl)},
    email: ${JSON.stringify(t.email)},
    phone: ${JSON.stringify(t.phone)},
    bio: ${JSON.stringify(t.bio)},
  },\n`;
});

tsContent += `];\n`;

fs.writeFileSync('../data/teachers.ts', tsContent);
console.log('Successfully generated teachers.ts');
