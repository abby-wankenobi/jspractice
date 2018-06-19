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


//accessing various elements in an array
//calling a function within an array, with another array element as an argument
// var arr = [
//   1,
//   false,
//   {
//     name: "abby",
//     address: "123 main st"
//   },
//   function(name) {
//     var greeting = "hello ";
//     console.log(greeting + name);
//   },
//   "hello"
// ]
//
// console.log(arr);
// arr[3](arr[2].name)


//automatic semicolon insertion
//if curly brackets are placed on the line after the return statement,
//the console.log will not work, as JS automatically puts a semicolon after return keyword

// function getPerson () {
//   //will return undefined if curly brackets are on next line
//   return {
//     firstname: "Tony"
//   }
// }
//
// console.log(getPerson())
