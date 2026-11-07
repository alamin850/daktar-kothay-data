# ডাক্তার কোথায় — ডাটা রিপোজিটরি

## কীভাবে কাজ করে
- ডাটা এডিট করবে **শুধু `src/` ফোল্ডারে** (ছোট ছোট ফাইল)।
- কমিট করলে GitHub Action `build.js` চালিয়ে **`data.json`** আর **`version.json`** নিজে তৈরি করে।
- অ্যাপ প্রথমে `version.json` দেখে, বদলালে তবেই `data.json` নামায়।
- `data.json` ও `version.json` হাতে এডিট করো না, নিজে থেকে বদলে যাবে।

## ফোল্ডার
```
src/
├── meta/            districts.json, categories.json
├── doctors/         জেলা অনুযায়ী (natore.json, pabna.json, rajshahi.json)
├── homio_doctors/   বিভাগ অনুযায়ী (01_dhaka.json, 02_rajshahi.json ...)
├── hospitals.json
├── ambulances.json
├── rog_hospitals.json
├── medical_colleges.json
├── addiction_centers.json
└── blood_banks.json
```

## নতুন ডাটা যোগ
1. যে ফাইলে যোগ করবে সেটা খোলো (যেমন `src/doctors/natore.json`)।
2. শেষ `}` এর পর কমা দিয়ে নতুন `{ ... }` বসাও।
3. কমিট করো। ১ মিনিটের মধ্যে `data.json` নতুন হবে।

## নতুন জেলার ডাক্তার
`src/doctors/` এ নতুন ফাইল বানাও (যেমন `bogura.json`), ভেতরে `[ ... ]` অ্যারে। `build.js`-এ কিছু বদলাতে হবে না।

## নিজের কম্পিউটারে চেক
```
node build.js
```
JSON ভুল থাকলে ফাইলের নামসহ এরর দেখাবে।

## অ্যাপের জন্য
রিলিজের আগে `data.json` কপি করে অ্যাপের `app/src/main/assets/data.json`-এ বসাও।
