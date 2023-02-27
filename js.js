//class room 


//Exs.1
function ex1() {
    let num = parseInt(prompt("please enter a number"))
if (num % 2==0) {
    document.write("The number is even");
}
else {
    document.write("The number is odd");
}
}


//Exs.2

function ex2 () {
    let num1 = Number(prompt("Please enter your number "));
    let num2 = Number(prompt("Please enter your number "));
    let num3 = Number(prompt("Please enter your number "));
    let num4 = Number(prompt("Please enter your number "));
 
  
    let sum = num1 + num2 + num3 + num4;
    average = sum / 4;
  
    document.write(average);
}
 
//Exs.3
function ex3() {

    let player = prompt("Please enter your name ");
    let score = prompt("please enter yore score");
  
    let player2 = prompt("Please enter your name ");
    let score2 = prompt("please enter yore score");
  
    if (Number(score) > Number(score2)) {
      document.write(player + " " + score);
    } else {
      document.write(player2 + " " + score2);
    }
  }

  //Exs.4
  function ex4() {
    let hour = prompt("please give me an hour from 5AM to 23PM");

    if (hour >= 5 && hour <= 11  ){
    document.write("Good morning")
    }
    else if (hour >=12 && hour <=17 ){
        document.write("Good afternoon")
    }
    else if (hour >=18 && hour <= 23){
    document.write("good evening")
    }
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
  
    document.write(
      " Net profit from operating the train line in the morning " + total
    );
   }

   //Exs.6
   function ex6() {

    let price = prompt("please enter the price of the car");
    let payments = prompt("please enter desired number of payments (till 24 )");

    const priceAfterDiscount = Math.floor(price - price * 0.05);
    const total = Math.floor(priceAfterDiscount / payments);
    const fiftyback = Math.floor(priceAfterDiscount-(19*50))

    if (payments > 24) {
      return document.write("u can take only till 24 payments ");
    }
    else if(payments == 19) {
        document.write(  " The price of the car after the discount: " +  priceAfterDiscount +
         " you receives NIS 50 back for each payment: " 
        +  fiftyback + " ." + " Number of payments: " + total)
   }
    else {
        document.write(" The price of the car after the discount: " +
        priceAfterDiscount + " Number of payments: " + total );
     }   
  }


   //Exs.7
  function ex7() {
    let peoples = prompt("amount passengers of bus stop");

    if (peoples === 12 ){
      document.write("a bus is full and leave the station")
    }
    else if (peoples < 12) {
      document.write("not enough people to drive ")
    }
    else if (peoples > 12) {
      document.write("the bus is going out " + (Math.abs(peoples-12)) + " wating for another taxi ")
    }
  
  }

     //Exs.8
     function ex8() {
        let students = parseInt(prompt("Please enter the number of students"));
      
        let security = Math.floor(students / 30);
      
        if (students % 30 > 0) {
          security++;
        }
      
        document.write(" A number of security guards " + security);
      
        const first_Aid = Math.floor(students / 50);
        document.write(" number of medics " + first_Aid);
      
        const medic = Math.floor(students / 100);
        document.write(" number of medics " + medic);
      }

         //Exs.9
     function ex9() {

     let day = prompt("Please enter one of the day in the week");
     const foo = "Thursday"

     if (foo === "Thursday" || foo === "thursday" || foo == 5 ) {
    document.write("!Thursday! Yay")
}
    else{
    document.write("wrong")
}
     }

  //Exs.10
  function ex10(){
    let BMI = prompt("Please enter your BMI");

if(BMI <= 18 ){
   document.write(" the BMI is too low.")
}
else if (BMI >=25){
    document.write(" the BMI Too high")
}
else {
    document.write(" the BMI is normal")
}
  }

  function ex12() {
  let num = 100,
  result =0 
  result= Math.sqrt(num)
  document.write(result)
  }


  function ex16 () {
    let x = 4;
for (let i = 0; i < array; i++) {
    const element = array[i];
    
}


  }