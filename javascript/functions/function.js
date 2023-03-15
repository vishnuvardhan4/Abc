// //Regular Fuction

// function hello(){
//     console.log("hi hello welcome")
//     console.log("welocme to hyderabad")  
// }
// hello()

// //passing parameters and arguements

// function employeeName(name,place){         //passing parameters
// // console.log(`Hello! ${name} Welcome to ${place}`)
// console.log(`Hello! ${name} Welcome to ${place}`)
// console.log(` ${name}  is from Telangana `)
// }
// employeeName("Vishnu", "Hyderanad")                            //passing arguements
// employeeName("Akhil", "Kakinada")
// employeeName("Shiva", "Vizag")   


// function add(a,b){
//     var addition=a+b;
//     console.log(`addition of a, b is :${addition} `)
// }
// add(2,5)

// function myName(name){
//     console.log("My name is :",name)
// }
// myName("vishnu")
// myName("shiva")
// myName("akhil")



// //using teturn statement

// function studentDetails(firstName,lastName){
//   var fullName=firstName+lastName;
// //   console.log(fullName);  

//   return

// }
// studentDetails("vishnu","vardhan");

// function addition(){
//     var a =45;
//     var b=59;
//     var sum=a+b;
    
//     console.log(sum)
// }
// addition()

// function add(a,b){
//     var sum=a+b;
//     console.log(sum)
// }
// add(3,4)
// add(58,55)
// add(34,5)
// add(45,55)

// function addDoube(a,b,c){
//     var sum=a+b+c;
//     var addDoubleSum=2*sum;
//     console.log("double addistion is :",addDoubleSum)
// }
// addDoube(1,2,3)
// addDoube(4,42,5)
// addDoube(2,9,38)

// function addThrible(a,b,c){
//     var sum=a+b+c;
//     var addThribleSum=3*sum;
//     console.log("thrible addition is:",addThribleSum);
// }
// addThrible(1,2,3)
// addThrible(4,5,6)
// addThrible(19,35,78)

// function mulAbc(a,b,c,multiply){
//     var sum=a+b+c;
//     var result=sum*multiply;
//     console.log(result);
// }
// mulAbc(2,4,3,6)
// mulAbc(34,53,56,8)

//   function multiplyWithNumber(a,b,c,multiply){
//     var sum =a+b+c;
//     var result=sum*multiply;
//     // console.log(result)
//     return result
//   }
//   console.log(multiplyWithNumber(2,3,4,7))
//   console.log(multiplyWithNumber(3,45,5,6)

function addition(){

    // var aInput = document.getElementById("aValue")
    // var bInput = document.getElementById("bValue")
    var a =Number(document.getElementById("aValue").value);
    var b= Number(document.getElementById("bValue").value);

    var aName = document.getElementById("aValue").name;
    var bName = document.getElementById("bValue" ).name;
    var add=a+b;
    
console.log(`${aName} = ${a} and ${bName} = ${b} addition = ${add}`)
document.getElementById("result").innerHTML=add
}
addition()
 