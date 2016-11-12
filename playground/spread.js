function add(a,b){
  return a+b;
}
var toAdd = [9,5]
console.log(add(...toAdd));

var groupA = ['ala','corrie'];

var groupB = ['don'];

var final= [...groupB, 3,...groupA];
console.log(final);

var person = ['Andrew', 23];
var person2 = ['Andre', 24];

function greeting(name,age){
  console.log(`Hi ${name}, you are ${age}`);
}

greeting(...person);
greeting(...person2);

var name = ['mike','marcin'];
var final = ['marcin'];
final.push(...name);
final.forEach((item)=>{
  console.log('Hi '+item);
});
