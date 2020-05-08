const initBasccket = require("./index");
const o = [
  {
    id: "1ceb8c95-736f-4da3-86d9-86d55893b38a",
    total_fruits: 3,
    total_weight: 5,
    fruit_counts: [
      { type: "apple", weight: 1.5, color: "green" },
      { type: "apple", weight: 1, color: "red" },
      { type: "pear", weight: 2.5, color: "green" }
    ]
  }
];

test("Test output content", () => {
  expect(initBasccket()).toBe(o);
});
