
//condition


function getValue(){

var voterAge=document.getElementById("voterage").value;
console.log(voterAge);

if (voterAge >=18){
    console.log("Eligible to vote")
    document.getElementById("eligible").innerHTML="Eligible to vote"
}
else{
    console.log("Not Eligible to vote")
    document.getElementById("eligible").innerHTML="Not Eligible to vote"
}

}

//else if
// let percentage=67;
let percentage=window.prompt("enter a your percentage")

if(percentage===100){
console.log("A+ Grade");
}
else if(percentage >= 91 && percentage <= 99){
    console.log("A Grade")
}
else if(percentage >= 81 && percentage <= 90){
    console.log("B+ Grade")
}
else if(percentage >=71 && percentage <= 80){
    console.log("B Grade")
}
else if(percentage >= 61 && percentage <= 79){
    console.log("C Grade")
}
else{
   console.log("enter a valid percentage") 
}