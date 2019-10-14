function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  const upper = word.charAt(0).toUpperCase() + word.substring(1);
  return upper;
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  var fInitial = firstName.charAt(0).toUpperCase()
  var lInitial = lastName.charAt(0).toUpperCase()
  const result = fInitial + "." + lInitial
  return result;
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  const vatWorkout = vatRate / 100;
  const vatPrice = vatWorkout * originalPrice
  const result = vatPrice + originalPrice;
  return +result.toFixed(2);
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  const reductionWorkout = reduction / 100
  const reductionRate = reductionWorkout * originalPrice
  const reducedPrice = originalPrice - reductionRate
  return +reducedPrice.toFixed(2);
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  return str.length % 2 ? str.substr(str.length / 2, 1) : str.substr((str.length / 2) - 1, 2);
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  return word.split("").reverse().join("");
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  // cant seem to figure this one out my reverse word code doesn't work here.
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required"); 
  var occurs = 0;
  for (var i=0; i<users.length; i++) {
    if ( 'type' in users[i] && users[i].type === "Linux" ) occurs++;
  }
  return occurs;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  var sum = scores.reduce(function(a, b) { return a + b; }, 0);
  // need to get this explained.
  var newValue = sum / scores.length
  return +newValue.toFixed(2)
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
    if (n % 15 == 0) return "FizzBuzz".toLowerCase(); 
    else if (n % 3 == 0) return "Fizz".toLowerCase(); 
    else if (n % 5 == 0) return "Buzz".toLowerCase();
    else return n;
}


module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
