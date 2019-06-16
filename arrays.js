function addElementToBeginningOfArray(array, element){
  newArray = [element, ...array]
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array[0] = [element, ...array]
  return array
}