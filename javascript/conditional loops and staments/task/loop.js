
function marks(){
var englishSub=Number(document.getElementById("englishs").value);
console.log(typeof(englishSub));

var mathsSub=Number(document.getElementById("maths").value);
console.log(mathsSub);

var hindiSub=Number(document.getElementById("hindis").value);
console.log(hindiSub);

var teluguSub=Number(document.getElementById("telugus").value);
console.log(teluguSub);

var scienceSub=Number(document.getElementById("sciences").value);
console.log(scienceSub);

var socialSub=Number(document.getElementById("socials").value);
console.log(socialSub);

var marksTotal= englishSub+mathsSub+hindiSub+teluguSub+scienceSub+socialSub;
document.getElementById("total").innerHTML=marksTotal;

console.log(marksTotal)

var percentage=(marksTotal/6)
document.getElementById("percent").innerHTML=percentage;
console.log("percentage",percentage)


if(englishSub >=35 &&  mathsSub >=35 &&  
    hindiSub >=35 &&  teluguSub >=35 && 
    scienceSub >=35 &&  socialSub >=35 ){
        console.log("pass")
    }
    else{
        console.log("fail")
     
    }

    if(percentage==100){
        console.log("O Grade")
    }
    else if(percentage >=91 && percentage <=99){
        console.log("A+ Grade")
    }
    else if(percentage >=81 && percentage <=90){
        console.log("A Grade")
    }else if(percentage >=71 && percentage <=80){
        console.log("B+ Grade")
    }
    else if(percentage >=61 && percentage <=70){
        console.log("B Grade")
    }
    else if(percentage >=51 && percentage <=60){
        console.log("C+ Grade")
    }
    else if(percentage >=41 && percentage <=50){
        console.log("C Grade")
    }
    else{
        console.log("Failed")
    }


}
