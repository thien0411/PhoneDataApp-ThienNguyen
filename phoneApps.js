/*
*Cse 120 Homework 2 Program 3: Phone Apps
*
* Thien Nguyen
*/


function result(){


  var minute = $("#minute").val();
  var day       = $("#day").val();
  var minutesUsed     = $("#minutesUsed").val();


  //Check Error

    if( isNaN(minute) || isNaN(day)  || isNaN(minutesUsed)  ){

      addErrorBox("You must inter a number, not string!!");
      throw new Error("stop");

    }



   if( minute < 0 || minutesUsed < 0  ){

      addErrorBox("You must in the the positive values");
      throw new Error("stop");

    }

  if( day < 1 || day > 30){

      addErrorBox("Day must  be from 1 to 30");
      throw new Error("stop");
  }



  minute = minute*1;
  day = day*1;
  minutesUsed= minutesUsed*1


  var currentAverageMinPerDay = minutesUsed/day;  //current daily average min per day that the user has been used

  var averageMinPerDay = minute/30;

  var status;


  if (currentAverageMinPerDay > averageMinPerDay){

      status = "You are EXCEEDING  your average daily use  (" + averageMinPerDay.toFixed(2)  +
                  " min/day), continuing this high usage, you'll exceed your minute plan by "  +
                  (currentAverageMinPerDay*30 - minute).toFixed(2) + " minutes" +
                  "<br />" +
                  "To stay below your minute plan, use no more than " + ((minute - minutesUsed)/(30 -day)).toFixed(2) + " min/day to the end of the month.";

  } else {

     status =  "Your average daily use is good. To stay below your minute plan, you could you up to " +
                 ((minute - minutesUsed)/(30 -day)).toFixed(2)  +
                 " min/day to the end of the month." ;

  }


   var result = "<div class='col-md-5'> " +
                  "<div class='alert alert-success'> " +
                     "<button type='button' class='close' data-dismiss='alert'>&times;</button> " +

                     day + " days used, " + (30 -day) + " days remaining " +  "<br />" +
                      "Average daily use: " + currentAverageMinPerDay.toFixed(2) + " mins/day \n" + "<br />" + status


                      "</div></div>";



  $("#resultsDiv").empty().append(result).hide().fadeIn("slow");

}


//Erorr Message
function addErrorBox(errorMessage) {
  var errorDiv = '<div class="alert alert-danger alert-dismissible" role="alert">' +
                 '<button type="button" class="close" data-dismiss="alert">' +
                 '<span aria-hidden="true">&times;</span>' +
                 '<span class="sr-only">Close</span></button>' +
                 '<strong>ERROR!</strong> '+errorMessage+'</div>';
  $('#errorArea').empty();
  $('#errorArea').append(errorDiv);
  $('#errorArea').hide().fadeIn("slow");
}




/*
//prompt user for number of minutes in the plan
var minutes = prompt("Enter the number of minutes in the plan per 30 day period: ");
var m  = parseFloat(minutes);


//promt user for current day
var day = prompt("Enter the current day in the 30 day period, d (1 <= d <= 30): ");
var d  = parseFloat(day);


// ask total number of minutes used so far
var minutesUsed = prompt("Enter the total number of minutes used so far: ");
var u = parseFloat(minutesUsed);


//check error
if(m < 0 || d < 0 || d >30|| u < 0) {

	throw new Error("You should enter a valid number");

}


var currentAverageMinPerDay = u/d;  //current daily average min per day that the user has been used

var averageMinPerDay = m/30;   //the daily average min/day in the plan

//Print out the message

console.log(d + " days used, " + (30 -d) + " days remaining ");


console.log("Average daily use: " + currentAverageMinPerDay.toFixed(2) + " mins/day \n");




if (currentAverageMinPerDay > averageMinPerDay) {


	console.log("You are EXCEEDING  your average daily use  "+ averageMinPerDay.toFixed(2)  +  " min/day), continuing this high usage, you'll exceed your minute plan by "  + (currentAverageMinPerDay*30 - m).toFixed(2) + " minutes \n");
	console.log("To stay below your minute plan, use no more than " + ((m - u)/(30 -d)).toFixed(2) + " min/day to the end of the month.");

} else console.log("Your average daily use is good. To stay below your minute plan, you could you up to " + ((m - u)/(30 -d)).toFixed(2)  + " min/day to the end of the month." );


*/

