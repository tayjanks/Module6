const {shuffleArray} = require('./utils')
const fruit = [{id:1, name: 'Apple'},{id:2, name:'Pear'}]

describe('shuffleArray should', () => {
test ("be an Array", () => {
expect(shuffleArray(fruit)).toEqual(
    expect.arrayContaining([
      expect.objectContaining({id:1})
      
    ]))}
  )
})

  test ("be the same length", () => 
expect(shuffleArray(fruit).length).toEqual(fruit.length)
  );








