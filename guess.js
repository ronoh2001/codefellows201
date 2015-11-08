  var greeting = alert('Lets play a game');
  var name = prompt('what is your name?');
    alert('Nice to meet you'+' '+name);

  var age = prompt('how old are you?');
  var differentAge = (42 - age);
  var youngAge = (age - 42);
  
  var numberCorrect = 0;
  
    var input1 = prompt("Does Ron have children?").toLowerCase();

    if ((input1 === "yes")||(input1 === "y")) {
      numberCorrect++;
     
      alert("You are right! He has two boys!" ) ;
      children(); 

    }
     else  {
      alert("Sorry you're wrong.  He has 2 boys");
      children();
      
    }
    function children() {
    var x = document.getElementById("truck").src;
    document.getElementById("child").innerHTML = x;
}

    var input2 = prompt("Is Ron a Hotel Manager?").toLowerCase();


    if ((input2 === "yes")||(input2 === "y")) {
      numberCorrect++;
      alert("you're right! He is the General Manager at the Holiday Inn Express!");

  } 
    else{
      alert("Sorry ...you're wrong.  He is the General Manager at the Holiday Inn Express");

  }

function hotel() {
    var x = document.getElementById("hotel").src;
    document.getElementById("job").innerHTML = x;
}

    var input3=prompt("Does Ron  I play a musical instrument?").toLowerCase();

    if ((input3 === "yes")||(input3 === "y")) {
      numberCorrect++;
      alert("Your right he plays the cello!");
      
    }
    else {
      alert("Sorry you are wrong.  He plays the cello");
      
    }
function cello() {
    var x = document.getElementById("cello").src;
    document.getElementById("instrument").innerHTML = x;
}

    var input4=prompt("Does Ron  wear glasses?").toLowerCase();

    if ((input4 === "yes")||(input4 === "y")) {
      numberCorrect++;
      alert("Your right he wears glasses");
    }
    else {
      alert("Sorry you are wrong.  He is blind as a bat");
    }


    var input5=prompt("How many years has Ron lived in Seattle?").toLowerCase();

    if (input5 == 9) {
      numberCorrect++;
      alert("Your right he has lived in Seattle for 9 years");
    }
    else {
      alert("Sorry you are wrong, he has lived in Seattle for 9 years");
    }


  var input6 = prompt("Guess how old Ron? is");

    if (input6 == 42) {
    numberCorrect++;

      alert("Your right! He is 42 years OLD!");
    }
   else {
     alert("Sorry you are wrong");

   }
     if (age <= 42) {
    alert('he is' + differentAge +' years older than you');}

      else {
       alert("wow he is" + " " + youngAge + " " + "younger than you are!");
      }


   {
    alert("You have " + numberCorrect + " answers correct!");
  } 
    // display alert showing number of correct answers
