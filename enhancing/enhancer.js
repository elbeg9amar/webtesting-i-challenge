const { template } = require("@babel/core");
const { tsObjectKeyword } = require("@babel/types");

module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  if(item.enchancement == 20) {
      return item
  }else {
    return  {...item, [item.enchancement]: item.enchancement + 1 }
  }
}

function fail(item) {
  if(item.enhancement < 15){
    return {...item, [item.durability]: item.durability - 5 }
  } else if (item.enhancement >= 15){
    return {...item, [item.durability]: item.durability - 10 }
  } else if (item.enhancement > 16){
    return {...item, [item.enhancement]: item.enhancement - 1}
  }
}

function repair(item) {
  return { ...item };
}

function get(item) {
  return { ...item };
}





