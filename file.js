const fs = require('fs').promises;

async function openFile() {
  try {
    const data = 'assignment1 node js - fs module'
    await fs.writeFile('assignment.txt', data);
  } catch (error) {
    console.error(`error occured while writing to a file`);
  }
}

openFile()