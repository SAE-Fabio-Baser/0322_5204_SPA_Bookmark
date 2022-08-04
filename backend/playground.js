import fs from 'fs'

/*
fs.readFile('./.prettierrc', 'utf-8', (err, rawData) => {
  if (err) {
    console.error(err)
    return
  }

  let data

  try {
    data = JSON.parse(rawData)
  } catch (e) {
    console.error(e)
  }
})*/

fs.readdir('./models', (err, data) => {
  console.log(data)
})