// const vishnu={
//     name : "Vishnu",
//     age : 27,
//     rollNo : 1,
//     college : "Sri sai junior college"
//   }
//   const tanish={
//     name : "Tanish",
//     age : 7,
//     rollNo : 1,
//     college : "Sri sai junior college"
//   }
//   console.log(tanish)







  // function StudentDetails(name, age, gender, mobile, college, city){
  //   this.Name= name;
  //   this.Age=age;
  //   this.Gender=gender; 
  //   this.Mobile=mobile;
  //   this.College=college;
  //   this.City=city;
  // }

  // const studentOne=new StudentDetails("Vishnu", 27, "male", 7013789794, "JNTUH college", "Hyderabad");
  // console.log(studentOne);

  // const studentTwo=new StudentDetails("shiva", 25,"male", 8736657373, "CVR college", "Vizag");
  // console.log(studentTwo)

  // studentOne.Name="Tanish";
  // console.log(studentOne)

  // delete(studentOne.Age)
  // console.log(studentOne)

  // studentOne.Height="6ft";
  // console.log(studentOne)


  //copying objects shallow copy


  const vishnu={
    name : "Vishnu",
    age : 27,
    rollNo : 1,
    college : "Sri sai junior college"
  }
  console.log(vishnu)

  const tanish={
    name : "Tanish",
    age : 7,
    rollNo : 1,
    college : "Sri sai junior college"
  }
  // console.log(tanish)

  const raaj=vishnu;
  console.log(raaj)

 console.log(vishnu)
  
 raaj.name="raaj"
 console.log(raaj)
 console.log(vishnu)
  



