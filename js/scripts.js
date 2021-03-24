$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    const question1 = parseInt($("#question1").val());
    const question2 = parseInt($("#question2").val());
    const question3 = parseInt($("#question3").val());
    const question4 = parseInt($("#question4").val());
    const question5 = parseInt($("#question5").val());
    const question6 = parseInt($("#question6").val());
    const question7 = parseInt($("#question7").val());
    const question8 = parseInt($("#question8").val());
    const question9 = parseInt($("#question9").val());
    const question10 = parseInt($("#question10").val());
    $("#answer1").hide();
    $("#answer2").hide();
    $("#answer3").hide();
    $("#answer4").hide();
    
    let answer = question1 + question2 + question3 + question4 + question5 + question6 + question7 + question8 + question9 + question10;
    
    if(answer <= 10 && answer >= 1){
      $("#answer1").show();
    }else if(answer <=20 && answer >= 11){
      $("#answer2").show();
    }else if(answer <=30 && answer >= 21){
      $("#answer3").show();
    }else if(answer <=40 && answer >= 31){
      $("#answer4").show();
    }else if(answer >=40){
      $("#answer4").show();
    }
    


    event.preventDefault();
  });
});