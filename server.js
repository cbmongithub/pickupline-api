const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const { pickuplines } = require('./pickuplines')

// Get rid of duplicate pickup lines
//const duplicates = pickuplines.filter((x, i) => pickuplines.indexOf(x) !== i)
//
//for (const x of duplicates) {
//  console.log(`Duplicate: ${x} at indexes ${
//    [...Array(pickuplines.length).keys()].filter(i => pickuplines[i] === x)}`);
//}

app.get('/', (req, res) => {
  const randomNum = Math.floor(Math.random() * pickuplines.length)
  const pickupLine = pickuplines[randomNum]
  res.json({ pickup_line: pickupLine })
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
