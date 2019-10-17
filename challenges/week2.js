function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  for (let key in sandwich) {
    if (key === "fillings") {
      return sandwich[key];
    }
  }
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  for (let key in person) {
    if (person[key] === "Manchester") {
      return true;
    }
  }
  return false;
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  let busValue = people / 40;
  let busValueRound = Math.ceil(busValue);
  return busValueRound
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  //   var newArr = [];
  //   for (i=0; i < arr.length; i++)
  //   var nSheep = arr.includes("sheep")
  //  if (nSheep === true) {
  //   newArr.push(arr[i])
  //  }
  //  return newArr.length
  // }
}



function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  for (let key in person) {
    const kValue = person[key]
    if (kValue === "Manchester") {
    } else if (kValue.startsWith("M")) {
      return true;
    }
    return false;
  }
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
