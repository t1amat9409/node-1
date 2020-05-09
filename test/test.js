var assert = require('assert');
const util = require("../load_contents");
const input = './input.json';
const fs = require('fs');


const expected = [{
    "id": "1ceb8c95-736f-4da3-86d9-86d55893b38a",
    "total_fruits": 3,
    "total_weight": 5,
    "fruit_counts": [{
        "type": "apple",
        "count": 2
    }, {
        "type": "pear",
        "count": 1
    }]
}]  


const fail_test = [
    {
      id: "1ceb8c95-736f-4da3-86d9-86d55893b38a",
      total_fruits: 3,
      total_weight: 5
    }
];

describe('Test scenerios', () => {
    let rawdata = fs.readFileSync(input);
    let data = (JSON.parse(rawdata) || []);
    const a = new util.FruitBasket(data[0])

    describe('Success test', () => {
        const output = util.initBasccket(data);
        it('should pass test', () => {
            assert.deepEqual(output, expected)
        });
    })
    
    describe('Success test == output deep test with exact data types', () => {
        const type = util.objectTypify(util.initBasccket(data)[0]);
        const agaisnt = util.objectTypify(a.toOutput()[0]);
        it('should pass test', () => {
            assert.deepEqual(type, agaisnt)
        });
    })

    describe('Weight', () => {
        it('have allowed weight', () => {
            if(a.weight()>a.max_weight){
                assert.throws(()=>{

                }, 'Reached max weight')
            }
        })
    })
    
    describe('Failure test', () => {
        const fail = fail_test
        it('should fail test', () => {
            assert.deepEqual(a.toOutput(), fail)
        });
    })
    
})