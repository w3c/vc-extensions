
const Ajv = require("ajv")
const yaml = require('js-yaml');
const fs   = require('fs');
const path   = require('path');
const ajv = new Ajv({ strict: false });

const vcSpecDir = path.join(__dirname, '../specifications');

const schema = yaml.load(fs.readFileSync('./specification-entry.yml', 'utf8'));
const validate = ajv.compile(schema)

const getAllSpecEntries = () =>{
    const files = fs.readdirSync(vcSpecDir);
    const entries = files.filter((file)=>{
        // ignore the index file.
        return file !== 'index.json';
    }).map((file) => {
        const fileContent =
          fs.readFileSync(path.join(vcSpecDir, file)).toString();
        let vcSpec = {
          error: 'specifications/' + file
        };
        try {
          vcSpec = JSON.parse(fileContent);
        } catch(e) {
          console.error('❌ Failed to parse specification entry: ' +
            'specifications/' + file);
        }
        return vcSpec;
    }).sort((a, b)=>{
        return a.name > b.name ? 1 : -1;
    })
    return entries
}

const validateSpecEntry = (entry)=>{
    const valid = validate(entry)
    if (!valid) {
        console.error(entry)
        console.error(validate.errors)
    }
    return valid;
}

(async ()=>{
    console.log('🧙 validating specification directory');
    const entries = getAllSpecEntries();
    entries.forEach((entry)=>{
        const valid = validateSpecEntry(entry)
        if (!valid){
            console.error('❌ invalid specification entry: ' + JSON.stringify(entry, null, 2));
            process.exit(1);
        }
    })
    console.log('✅ specification directory is valid.');
})();
