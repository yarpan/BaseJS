const fs = require('fs');
const testSuite = [];

for (let i = 1; i <= 7; i++) {
  const fileName = `../test-data/test_${i.toString().padStart(2, '0')}.json`;
  try {
    const jsonData = JSON.parse(fs.readFileSync(fileName, 'utf8'));
    testSuite.push(jsonData);
  } catch (error) {
    console.error(`Помилка при зчитуванні файлу ${fileName}: ${error.message}`);
  }
}