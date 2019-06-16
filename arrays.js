function addElementToBeginningOfArray(array, element){
  var newArray = [element, ...array]
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array = [element, ...array]
  return array
}

function addElementToEndOfArray(array, element){
  var newArray = [...array, element]
}