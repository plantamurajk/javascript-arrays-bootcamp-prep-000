function addElementToBeginningOfArray(array, element){
  newArray = [element, ...array]
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array[1] = [element]
  return array
}