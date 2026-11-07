// src/ ফোল্ডারের ছোট ছোট ফাইল জোড়া দিয়ে data.json ও version.json বানায়।
// চালানোর নিয়ম:  node build.js
const fs = require('fs');
const path = require('path');

const read = (f) => {
  try {
    return JSON.parse(fs.readFileSync(f, 'utf8'));
  } catch (e) {
    console.error('JSON ভুল আছে: ' + f + '\n  ' + e.message);
    process.exit(1);
  }
};

// ফোল্ডারের সব .json ফাইল নামের ক্রমে পড়ে এক লিস্টে জোড়া দেয়
const readDir = (d) =>
  fs.readdirSync(d)
    .filter((f) => f.endsWith('.json'))
    .sort()
    .flatMap((f) => read(path.join(d, f)));

const out = {
  districts: read('src/meta/districts.json'),
  categories: read('src/meta/categories.json'),
  doctors: readDir('src/doctors'),
  hospitals: read('src/hospitals.json'),
  ambulances: read('src/ambulances.json'),
  rog_hospitals: read('src/rog_hospitals.json'),
  medical_colleges: read('src/medical_colleges.json'),
  addiction_centers: read('src/addiction_centers.json'),
  blood_banks: read('src/blood_banks.json'),
  homio_doctors: readDir('src/homio_doctors'),
};

// ডাটা ঠিক থাকলে ভার্সন বদলাবে না (অকারণ ডাউনলোড এড়াতে)
const json = JSON.stringify(out);
let oldJson = '';
try { oldJson = fs.readFileSync('data.json', 'utf8'); } catch (e) {}

if (json !== oldJson) {
  fs.writeFileSync('data.json', json);
  fs.writeFileSync('version.json', JSON.stringify({ version: Date.now() }));
  console.log('data.json নতুন তৈরি হয়েছে (' + json.length + ' অক্ষর)');
} else {
  console.log('কোনো পরিবর্তন নেই');
}
