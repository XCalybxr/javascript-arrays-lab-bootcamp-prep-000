var kittens = ["Milo","Otis","Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(postAddName){
  kittens.push(postAddName);
}
function destructivelyPrependKitten(prepAddName){
  kittens.unshift(prepAddName);
}
function destructivelyRemoveLastKitten(){
  kittens.pop();
}
function destructivelyRemoveFirstKitten(){
  kittens.shift();
}
function appendKitten(mkNewLast){
var newAppKittens = [...kittens, mkNewLast];
  return newAppKittens
}
function prependKitten(mkNewFirst){
  var newPrepKittens = [mkNewFirst, ...kittens];
  return newPrepKittens
}
function removeLastKitten(){
 var remlast = kittens.slice(0,-1);
 return remlast
}