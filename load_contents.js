const fs = require('fs');
const input = __dirname + "/input.json";
const output = __dirname + "/output.json";
const path = input;//process.argv[2];

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

/**
 * FRUIT PROJECT CLASSES
 * @class Fruit - for fruit object
 * @class FruitBasket - fruit basket object
 */

class Fruit {
  constructor(data) {
    this.type = data.type || null;
    this.weight = data.weight || 0;
    this.color = data.color || null;
  }
}

class FruitBasket {
  constructor({ id, contents, max_weight }) {
    if(!id){
      throw new Error('Invalid id passed')
    }
    const _contents = contents || [];
    console.log(max_weight, id)
    this.id = id;
    this.contents = _contents.map(item => new Fruit(item));
    this.max_weight = max_weight || 0;
    this.toFile = this.toFile.bind(this);
    this.fruits = this.fruits.bind(this);
    this.weight = this.weight.bind(this);
    this.fruitsByType = this.fruitsByType.bind(this);
    this.toOutput = this.toOutput.bind(this)
  }

  fruits(count = false) {
    //count = false to return raw contents, count = true to return count
    return count ? this.contents.length : this.contents;
  }

  fruitsByType(type = "", count = false) {
    //count = false to return raw contents, count = true to return count
    const _fruitsOfType = this.contents.filter(item => item.type === type);
    return count ? _fruitsOfType.length : _fruitsOfType;
  }

  weight() {
    const _weights = this.contents.map(item => item.weight);
    return _weights.length === 0?0:_weights.reduce((a, b) => a + b);
  }

  toFile() {
    const { id, weight } = this;
    const content = {
      id,
      total_fruits: this.contents.length,
      total_weight: weight(),
      fruit_counts: this.contents
    };

    let rawdata = fs.readFileSync(output);
    const output_ = JSON.parse(rawdata) || [];
    const data = output_.filter(item => item.id !== id);
    data.push(content);
    let data_ = JSON.stringify(data);
    fs.writeFileSync(output, data_);
  }
  
  toOutput(filter = false) {
    //const { id, weight } = this;
    const type_match = {};
    this.contents.forEach((item, i)=>{
      if(type_match[item.type]){
        type_match[item.type] = type_match[item.type] + 1;
      } else{
        type_match[item.type] = 1;
      }
    });

    const fruits = Object.keys(type_match).map((item)=>{
      return {
        type: item,
        count: type_match[item]
      }
    });

    const content = {
      id:this.id,
      total_fruits: this.contents.length,
      total_weight: this.weight(),
      fruit_counts: fruits
    };

    return [content];
  }
}


//Fruit project runner
const initBasccket = () => {
  let rawdata = fs.readFileSync(input);
  let data = (JSON.parse(rawdata) || []);
  const test = new FruitBasket(data[0]);

  //console.log(test);
  //console.log(test.fruits(true));
  //console.log(test.fruitsByType("apple", true));
  //console.log(test.weight());
  //console.log(test.toFile());
  return test.toOutput();
};

const typify = (key, value) => {
  return {
    [key]: typeof value
  }; //returns {keyName:typeOf} e.g ("id", 100) === {"id":"number"}
};

const objectTypify = obj => {
  //console.log(typeof obj)
  let _obj = {};
  Object.keys(obj || {}).forEach((key, i) => {
    _obj[key] = typify(key, obj[key])[key];
  });

  return _obj//.toString(); //returns a stringified object<typify:type> 
};

//initBasccket();

module.exports = {
  initBasccket,
  objectTypify,
  typify,
  FruitBasket
};
