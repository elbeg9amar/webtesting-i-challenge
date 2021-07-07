const { template } = require("@babel/core");
const { tsObjectKeyword } = require("@babel/types");

module.exports = {
  success,
  fail,
  repair,
  get,
};
let item = {
  name:"Player",
  enhancement : 15,
  durability: 60 ,
};
function success(item) {
  if(item.enhancement  == 20) {
      return item
  }else {
    return  {...item, [item.enhancement ]: item.enhancement  + 1 }
  }
}

function fail(item) {
  
  if(item.enhancement < 15){
    return {...item, durability: item.durability - 5 }
  } else if (item.enhancement === 15){
    return {...item, durability: item.durability - 10 }
  } else {
    return {...item, enhancement: item.enhancement - 1}
  }
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}





