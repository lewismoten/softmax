softmax = require("../dist/index.min")

describe "dist minified", ->
  it "works in environment", ->
    expect(softmax [1]).toEqual [1]
