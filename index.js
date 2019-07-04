var kittens = ["Milo","Otis","Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(postAddName){
  kittens.push(postAddName);
}
function destructivelyPrependKitten(prepAddName){
  kittens.unshift(prepAddName);
}
function destructivelyRemoveLastKitten(killLastName){
  kittens.pop(killLastName)
}
function destructivelyRemoveFirstKitten(killFirstName){
  kittens.shift()
}