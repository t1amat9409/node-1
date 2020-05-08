const fs = require('fs');
const path = process.argv[2];

const getFileContents = (path = "") => {
  const exists = fs.existsSync(path);
  if (exists) {
    const fStat = fs.statSync(path);
    if (fStat && fStat.size > 0) {
      const contents = fs.readFileSync(path);
      return contents ? contents : new Error("Error trying to get stats");
    } else if (fStat.size === 0) {
      return new Error("File exists but there is no content");
    } else {
      return new Error("Error trying to get stats");
    }
  } else {
    return new Error("File does not exist");
  }
};

const fileContent = getFileContents(path);
console.log(fileContent);
