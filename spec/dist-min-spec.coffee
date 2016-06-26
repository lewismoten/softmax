softmax = require("../dist/softmax.min")

describe "dist minified", ->
  it "works in environment", ->
    expect(softmax [1]).toEqual [1]
