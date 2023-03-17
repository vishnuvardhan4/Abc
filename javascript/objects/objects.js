const cars={

           carName:"Benz",
           model:"Gl 4DI",
           color:"Blue",
           price:"10 crores",
           mileage:"30kmph",
           availableColors:["white", "orange", "green", "black"],
           fullName:function (){
                    console.log(this.carName+" "+this.model)
                    
           }

           }
        //    console.log(cars);
           console.log(cars.model="GLA 4DI") //modifying
           cars.carType="Diesel" //adding new property
           console.log(cars);
           delete cars.mileage
           console.log(cars)

           const carFullName=cars.carName+" "+cars.model;
           console.log("car fullanme is",carFullName)
           
          console.log("available cars are",cars.availableColors) // colors in arrays
          console.log(cars.availableColors[0]) //accessing first element of color in array
          
        //   console.log(cars.fullName())
        cars.fullName();  //calling a anonymous function displaying at line number 10


var firstName="tanish"

const student={
      firstName:"Vishnu",
      lastName:"Vardhan",
      age:27,
      bloodGroup:"B +ve",
      fullName:()=>console.log(student.firstName+" "+student.lastName),
    //   fullName1:function(){console.log(this)}
      fullName1:()=>console.log(this.firstName+" "+this.lastName)  //in arrow function this keyword refers to the global vairables so in arrow function its doesn't work this keyword to refer childrens
}

student.fullName()
student.fullName1() //its taking fistname variable is outside of the object
