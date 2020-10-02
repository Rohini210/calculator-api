const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const port = 3000
app.use(express.urlencoded())

// Parse JSON bodies (as sent by API clients)
app.use(express.json())

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.get("/", (req, res) => {
  console.log("Get Request")
  return res.json({ message: "Hello World!" })
  // res.sendFile("Hello WOrld")
})
// your code goes here

// here

// Addition:
app.post("/add", (req, res) => {
  let value1 = req.body.value1
  let value2 = req.body.value2
  if (typeof value1 === "string" || typeof value2 === "string") {
    return res.status(400).json({ message: "Invalid Data Types" })
  }

  if (value1 > 1000000 || value2 > 1000000) {
    return res.status(400).json({ message: "Overflow" })
  }

  let sum = value1 + value2
  res.status(200).json({ message: "the sum of given two numbers", sum })
})

//Subtraction:

app.post("/subtract", (req, res) => {
  let value1 = req.body.value1
  let value2 = req.body.value2
  if (typeof value1 === "string" || typeof value2 === "string") {
    return res.status(400).json({ message: "Invalid Data Types" })
  }

  if (value1 < 1000000 || value2 < 1000000) {
    return res.status(400).json({ message: "Underflow" })
  }

  let diff = value1 - value2
  res.status(200).json({ message: "the difference of given two numbers", diff })
})

//Multiplication:

app.post("/multiply", (req, res) => {
  let value1 = req.body.value1
  let value2 = req.body.value2
  if (typeof value1 === "string" || typeof value2 === "string") {
    return res.status(400).json({ message: "Invalid Data Types" })
  }

  if (value1 > 1000000 || value2 > 1000000) {
    return res.status(400).json({ message: "Underflow" })
  }

  let mul = value1 * value2
  res.status(200).json({ message: "the product of given two numbers", mul })
})

//Division:

app.post("/division", (req, res) => {
  let value1 = req.body.value1
  let value2 = req.body.value2
  if (value2 === 0) {
    return res.status(400).json({ message: "Cannot be divided by Zero" })
  }

  let div = value1 / value2
  res.status(200).json({ message: "the division of given two numbers", div })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app
