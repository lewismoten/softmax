softmax = require("../dist/softmax")

describe "dist raw", ->
  it "works in environment", ->
    expect(softmax [1]).toEqual [1]
