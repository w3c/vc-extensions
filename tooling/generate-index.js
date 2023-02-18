
const fs = require('fs');
const path = require('path');

// set directories and paths
const specificationsDir = path.join(__dirname, '../specifications');
const indexFile = path.join(specificationsDir, 'index.json');

// Process all spec files and generate an index file
(async () => {

  const allSpecs = [];
  process.stdout.write('Processing:');
  fs.readdirSync(specificationsDir).forEach(filename => {
    // skip index file
    if(filename === 'index.json') {
      return;
    }

    const specFile = path.join(specificationsDir, filename);
    const specData = fs.readFileSync(specFile, 'utf-8');
    process.stdout.write(' ' + filename);

    try {
      const specJson = JSON.parse(specData);
      allSpecs.push(specJson);
    } catch(e) {
        console.error('\n\n❌ ERROR: Failed to parse', filename, e);
        process.exit(1);
    }
  });

  if(allSpecs.length > 0) {
    fs.writeFileSync(indexFile, JSON.stringify(allSpecs, null, 2), 'utf-8');
    console.log('\n\nGenerated /specifications/index.json.');
  } else {
    console.error('\n\n❌ ERROR: No files found in specifications directory');
    process.exit(1);
  }

})();
