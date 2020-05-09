const util = require("./index");
const o = [
  {
    id: "1ceb8c95-736f-4da3-86d9-86d55893b38a",
    total_fruits: 3,
    total_weight: 5,
    fruit_counts: null
  }
];

const expectedOutputDummy = {
    id: "",
    total_fruits: 0,
    total_weight: 0,
    fruit_counts: []
  }

/**
** expected output object type :
{
  id: "string",
  total_fruits: "number",
  total_weight: "number",
  fruit_counts: "array"
} 
*/

test("Test output content", () => {
  const type = util.objectTypify(o[0]);
  expect(type).toBe(util.objectTypify(expectedOutputDummy));
});
