function theBeatlesPlay(musicians, instruments) {
  var newArray = []
  for (var i = 0; i < musicians.length; i++) {
    newArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return newArray
}

function johnLennonFacts(facts) {
  var i = 0
  while(i > facts.length; i++) {
    facts.push(`${facts[i]}!!!`)
  }
return facts;
}

function iLoveTheBeatles(n) {
  var newArray = []
  do{
    newArray.push("I love the Beatles!")
}
while(n < 15) {
  n++
  return newArray;
}
