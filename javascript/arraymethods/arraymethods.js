// const Bikes=["Honda","Bullet","Pulsar","Yamaha"]
// console.log(Bikes);
// console.log("First bike is = ",Bikes[1]);
// console.log(Bikes.length)

// const numbrofbikes=Bikes.length;
// console.log(numbrofbikes)
// document.getElementById("totalBikes").innerHTML=numbrofbikes;
// console.log("last Bike is :", Bikes[numbrofbikes-1])

// //adding elements to the end of array push
// console.log(Bikes)
// Bikes.push("Royal Enfield")
// console.log(Bikes)

// //removing elements to the end of array pop
// console.log(Bikes)
// const removeditems=Bikes.pop()
// // Bikes.pop()
// // console.log(Bikes)
// console.log(removeditems)
// console.log(Bikes)

// //shift method is used to delete the element at first 

// Bikes.shift();
// console.log(Bikes)


// //unshift method is used to add the element at first 
// console.log(Bikes)
// Bikes.unshift("Cbr","FZ");
// console.log(Bikes)

// let bikeStringData=Bikes.toString()
// console.log(bikeStringData)

// let joinData=Bikes.join("*")
// console.log(joinData)

// console.log(Bikes)
// let seletedBikes=Bikes.slice(1,3)
// console.log(seletedBikes)

// console.log(Bikes)
// console.log(Bikes.splice(2,1,"verna", "Qualis"))
// console.log(Bikes)

// //sort
// const bikeSort=Bikes.sort()
// console.log(bikeSort)

// const bikeReverse=Bikes.reverse()
// console.log(bikeReverse)

const Numbers=[12,44,252,56,2348,6732,9327,88,930,34.4,5,17]

// const numbersMax=Math.max.apply(null,Numbers)
// console.log(numbersMax)


// const numbersMax=Math.min.apply(null,Numbers)
// console.log(numbersMax)


// const numbersMax=Numbers.sort()
// console.log(numbersMax)


// const numbersMax=Numbers.sort((a,b)=> a-b)
// console.log(numbersMax)


const numbersMax=Numbers.sort((a,b)=> b-a)
console.log(numbersMax)