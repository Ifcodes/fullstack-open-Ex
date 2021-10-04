const uniqueElement = arr => {
  const res = [...new Set(arr)]
  
  res.sort((a, b) => a - b)

  return res
}

console.log(uniqueElement([1, 2, 2, 4, 5, 4, 5, 3, 6, 7,]))

