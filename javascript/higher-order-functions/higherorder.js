// function addition(){
//     var a=Number(document.getElementById("a").value);
//     var b=Number(document.getElementById("b").value);
//     console.log(a,b)
//     // var sum=a+b;
//     // document.getElementById("result").innerHTML=sum;
//     document.getElementById("result").innerHTML=a+b;

// }
// // addition();

// function substract(){
    
//     var a=Number(document.getElementById("a").value);
//     var b=Number(document.getElementById("b").value);

//     document.getElementById("result1").innerHTML=a-b;

// }


// function multiply(){
    
//     var a=Number(document.getElementById("a").value);
//     var b=Number(document.getElementById("b").value);

//     document.getElementById("result2").innerHTML=a*b;

// }

// function divide(){
    
//     var a=Number(document.getElementById("a").value);
//     var b=Number(document.getElementById("b").value);

//     document.getElementById("result3").innerHTML=a/b;

// }

//calling only function


function addition(){
    // var a=Number(document.getElementById("a").value);
    // var b=Number(document.getElementById("b").value);

    document.getElementById("result").innerHTML=a+b;

}

function substract(a,b){
    
    // var a=Number(document.getElementById("a").value);
    // var b=Number(document.getElementById("b").value);

    document.getElementById("result1").innerHTML=a-b;

}


function multiply(a,b){
    
    // var a=Number(document.getElementById("a").value);
    // var b=Number(document.getElementById("b").value);

    document.getElementById("result2").innerHTML=a*b;

}

function divide(){
    
    // var a=Number(document.getElementById("a").value);
    // var b=Number(document.getElementById("b").value);

    document.getElementById("result3").innerHTML=a/b;

addition(a,b)

}

function calculate(){
    
    var a=Number(document.getElementById("a").value);
    var b=Number(document.getElementById("b").value);

    // substract(a,b)
    // addition(a,b)
    multiply(a,b)
}