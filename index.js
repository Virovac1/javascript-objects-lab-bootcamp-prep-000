var recipes= {}; //not sure if what was asked for but this empty object seems to work

//returns a clone object with the orignal key value pairs and the new key value pairs
//but can't this only add one key-pair at a time?
function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({},object,{[key]:value })
}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(object,{[key]:value }) 
}