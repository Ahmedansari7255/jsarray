
// var shin= 'Beerus'
// var shin= 'Champa'
// var shin= 'Arack'
// var shin= 'Gene'
// console.log(shin);

//1.Arrays heterogeneous
 var fruits= ['Apple',200,true]
 console.log(fruits);

 //2.accessing elements using index

 var fruits=['apple','banana','orange','grapes']
 console.log(fruits[0]);
 console.log(fruits[1]);
 console.log(fruits[2]);
 console.log(fruits[3]);
 console.log(fruits.length);

 //3.Pushing an element at last

 fruits.push('papaya')
 console.log(fruits);

 //4.popping an element from last

 fruits.pop()
 console.log(fruits);

 //5.adding an element at the beginning

 fruits.unshift('watermelon')
 console.log(fruits);

 //6.removing an element from the beginning
  
 fruits.shift('watermelon')
 console.log(fruits);

//7. concatenation of arrays

var x=[1,2,3,4]
var y=[5,6,7,8]

var z= x.concat(y)
var a=  y.concat(x)
console.log(z);
console.log(a);
 
//8.pushing and popping an element at a desired location

fruits.splice(2,0,'papaya')
console.log(fruits);



//8.iteration of an array(assignment)

var animals=['lion','tiger','leopard','jaguar','panther','puma','deer','elephant','fox','hyena']
for(var i=0,i<=animals.length-1 ,i++) {
console.log(animals[i]);
 }


  
