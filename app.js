// function waitThreeSeconds() {
//   var ms = 3000 + new Date().getTime();
//   while (new Date() < ms){}
//   console.log('finished function')
// }
//
// function clickHandler() {
//   console.log('click event');
// }
//
// document.addEventListener('click', clickHandler);
//
// waitThreeSeconds();
// console.log('finished execution')


// var objectLiteral = {
//   firstname: "mary",
//   isAProgrammer: true
// }
//



// console.log(JSON.stringify(objectLiteral));
//
// var jsonValue = JSON.parse('{ "firstname": "mary", "isAProgrammer": true}')
//
// console.log(jsonValue.firstname)



// greet();
//
// function greet() {
//   console.log('hi')
// }
//
// var anonymousGreet = function() {
//   console.log('hi');
// }
//
// anonymousGreet();
//
// function log(a) {
//   a();
// }
//
// log(function() {
//   console.log('hi')
// })


//using this in functions, while maintaining scope
//define new variable to point to "this" of object, not whole window
// var c = {
//   name: "c",
//   log: function() {
//     var self = this
//     self.name = "hello"
//     console.log(self)
//
//     var newfunction = function (newname) {
//       self.name = newname
//     }
//     newfunction("new name")
//     console.log(self)
//   }
// }
//
// c.log();
