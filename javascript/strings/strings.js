// var mobileName="Tata Indicom"
// document.getElementById("mobileLength").innerHTML=mobileName.length
// console.log(mobileName.length)

// var mobilePrice=30000
// document.getElementById("mobilePrice").innerHTML=mobilePrice
// console.log(mobilePrice)


var mobileFirstName="Tata"
var mobileLastName="Indica"
console.log(mobileFirstName +" "+ mobileLastName)
console.log(mobileFirstName.concat(" ",mobileLastName))
console.log(mobileFirstName.concat("-",mobileLastName))
console.log(mobileLastName.toUpperCase())
console.log(mobileFirstName.toLocaleLowerCase())

var newcar="    BMW    caaer   "
// newcar=newcar.trim()
console.log(newcar)
console.log(newcar.length)
newcar=newcar.trim()
console.log(newcar.trim().length)

console.log(newcar.trim())
console.log(newcar.length)

var fruit="apple"
console.log(fruit.length-1)


let para="HTML Tutorial CSS Tutorial JavaScript orange yellow  Tutorial How To Tutorial SQL Tutorial Python Tutorial W3.CSS TutorialBootstrap Tutorial"
console.log(para.includes("yellow"))
console.log(para.includes("blue"))


let bike="pulsar 150 engine 150"
console.log(bike.replace("150", 200))
console.log(bike.replaceAll("150", 200))

let myName="Vishnu vardhan"
console.log("my first name is =", myName.slice(0,6));
console.log(myName.slice(7,14))
console.log(myName.slice(7,myName.length))

console.log("In my name is at third letter is ", myName.charAt(3).toUpperCase())
console.log(myName.charAt(myName.length-1).toLocaleUpperCase())


let fruitsList="Apple, Banana, Graphe, Orange, Mango"
console.log(fruitsList.split(","))

let fruitsListq="Apple-Banana-Graphe-Orange-Mango"
console.log(fruitsListq.split("-"))




