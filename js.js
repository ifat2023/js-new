//class room 
function writeToResult(text){
    var element= document.getElementById("result");
    element.innerHTML+=text;
 
    }

//Exs.1
function ex1() {
    let num = parseInt(prompt("please enter a number to check if is even or odd"))
if (num % 2==0) {
   writeToResult("The number is even");
}
else {
    writeToResult("The number is odd");
}
writeToResult("<hr>") ;
}


//Exs.2

function ex2 () {
    let num1 = Number(prompt("Please enter your number "));
    let num2 = Number(prompt("Please enter your number "));
    let num3 = Number(prompt("Please enter your number "));
    let num4 = Number(prompt("Please enter your number "));
 
  
    let sum = num1 + num2 + num3 + num4;
    average = sum / 4;
  
    writeToResult(average);
    writeToResult("<hr>") ;
}
 
//Exs.3
function ex3() {

    let player = prompt("Please enter your name ");
    let score = prompt("please enter yore score");
  
    let player2 = prompt("Please enter your name ");
    let score2 = prompt("please enter yore score");
  
    if (Number(score) > Number(score2)) {
        writeToResult(player + " " + score);
    } else {
        writeToResult(player2 + " " + score2);
    }
    writeToResult("<hr>") ;
  }

  //Exs.4
  function ex4() {
    let hour = prompt("please give me an hour from 5AM to 23PM");

    if (hour >= 5 && hour <= 11  ){
        writeToResult("Good morning")
    }
    else if (hour >=12 && hour <=17 ){
        writeToResult("Good afternoon")
    }
    else if (hour >=18 && hour <= 23){
        writeToResult("good evening")
    }
    writeToResult("<hr>") ;
  }

   //Exs.5
   function ex5() {
    let funds = prompt("Please specify the number of funds in the train");
    let time = prompt( "Please specify the time of day ? morning, noon or evening");
    let salary = prompt("The driver's salary");
  
    const price = 6.6;
    const traveling = Math.floor(120 * funds);
    const morning = Math.floor(price * traveling);
    const noon = Math.floor(price * (0.9 * traveling));
    const evening = Math.floor(price * (0.7 * traveling));
  
    const tax = 0.17;
    let total = 0;
  
    if (time == "morning") {
      total = morning - tax * morning - salary;
    } else if (time == "noon") {
      total = noon - tax * noon - salary;
    } else if (time == "evening") {
      total = evening - tax * evening - salary;
    }
  
    writeToResult(
      " Net profit from operating the train line in the morning " + total
    );
    writeToResult("<hr>") ;
   }

   //Exs.6
   function ex6() {

    let price = prompt("please enter the price of the car");
    let payments = prompt("please enter desired number of payments (till 24 )");

    const priceAfterDiscount = Math.floor(price - price * 0.05);
    const total = Math.floor(priceAfterDiscount / payments);
    const fiftyback = Math.floor(priceAfterDiscount-(19*50))

    if (payments > 24) {
      return writeToResult("u can take only till 24 payments ");
    }
    else if(payments == 19) {
        writeToResult(  " The price of the car after the discount: " +  priceAfterDiscount +
         " you receives NIS 50 back for each payment: " 
        +  fiftyback + " ." + " Number of payments: " + total)
   }
    else {
        writeToResult(" The price of the car after the discount: " +
        priceAfterDiscount + " Number of payments: " + total );
     }   
     writeToResult("<hr>") ;
  }


   //Exs.7
  function ex7() {
    let peoples = prompt("amount passengers of bus stop");

    if (peoples === 12 ){
        writeToResult("a bus is full and leave the station")
    }
    else if (peoples < 12) {
        writeToResult("not enough people to drive ")
    }
    else if (peoples > 12) {
        writeToResult("the bus is going out " + (Math.abs(peoples-12)) + " wating for another taxi ")
    }
    writeToResult("<hr>") ;
  }

     //Exs.8
     function ex8() {
        let students = parseInt(prompt("Please enter the number of students"));
      
        let security = Math.floor(students / 30);
      
        if (students % 30 > 0) {
          security++;
        }
      
        writeToResult(" A number of security guards " + security);
      
        const first_Aid = Math.floor(students / 50);
        writeToResult(" number of medics " + first_Aid);
      
        const medic = Math.floor(students / 100);
        writeToResult(" number of medics " + medic);

        writeToResult("<hr>") ;
      }

         //Exs.9
     function ex9() {

     let foo= prompt("Please enter one of the day in the week");
     
     if (foo === "Thursday" ||foo === "thursday" || foo == 5 ) {
        writeToResult("!Thursday! Yay")
}
    else{
        writeToResult("wrong")
}
writeToResult("<hr>") ;
     }

  //Exs.10
  function ex10(){
    let BMI = prompt("Please enter your BMI");

if(BMI <= 18 ){
    writeToResult(" the BMI is too low.")
}
else if (BMI >=25){
    writeToResult(" the BMI Too high")
}
else {
    writeToResult(" the BMI is normal")
}
writeToResult("<hr>") ;
  }

  //Exs.11
  function ex11() {

  }

  //Exs.12
  function ex12() {
  let num = 100,
  result =0 
  result= Math.sqrt(num)
  writeToResult(result)
  writeToResult("<hr>") ;
  }

  //Exs.13
  function ex13() {
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
writeToResult("display")
writeToResult("<hr>") ;
  }


 //Exs.14
 function ex14() {
    open.window
          }
        
 //Exs.15
 function ex15() {
let text = document.querySelector("date");
let date = new Date();
let hour = date.getHours();
let minuts = date.getMinutes();
let day = date.getDate();
let month = date.getMonth()+1;
let year = date.getFullYear();
writeToResult(`The hour is: ${hour}:${minuts} - the date is: ${day}/${month}/${year} `)
writeToResult("<hr>") ;
}

//Exs.16
function ex16 () {
    let num = prompt("please enter a number")
    
    for (let i = 0; i < num-1; i++) {
        writeToResult("hello ,")   
   }
        writeToResult("hello")  
        writeToResult("<hr>") ;
   }

   //Exs.17
function ex17 () {
    for (let i = 0; i <= 10; i++) {
        writeToResult("smile ") 
   
    }

    writeToResult("<hr>") ;
}

   //Exs.18
   function ex18 () {
    let a = Number(prompt("please enter first number"));
    let b = Number(prompt("please enter second number"));

    if (a>b) {
        alert("The largest number is " + a)
    }
    else {
        alert("The largest number is " + b)
    }
   }

  //Exs.19
  function ex19 () {
let tip = Number(prompt("How many percent to put?"));
let amount= Number (prompt ("Specify the amount in the account"))

const total = math.floor(tip * amount)

writeToResult(total)
writeToResult("<hr>") ;
  }