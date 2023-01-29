
//---------------Good Review Values---------------------------
function ggIpt1(){
  //Gets and save good review for Q1
  var goodReview1 = document.getElementById("goodbtn1").value;
  localStorage.setItem("Q1", goodReview1);
  sessionStorage.setItem("Q1", goodReview1);
}

function ggIpt2(){
  //Gets and save good review for Q1
  var goodReview2 = document.getElementById("goodbtn2").value;
  localStorage.setItem("Q2", goodReview2);
  sessionStorage.setItem("Q2", goodReview2);
}

function ggIpt3(){
  //Gets and save good review for Q1
  var goodReview3 = document.getElementById("goodbtn3").value;
  localStorage.setItem("Q3", goodReview3);
  sessionStorage.setItem("Q3", goodReview3);
}

function ggIpt4(){
  //Gets and save good review for Q1
  var goodReview4 = document.getElementById("goodbtn4").value;
  localStorage.setItem("Q4", goodReview4);
  sessionStorage.setItem("Q4", goodReview4);
}
//---------------Good Review Values----------------------------

//-----------------Bad Review Values---------------------------
function gbIpt1(){
  //Gets and save good review for Q1
  var badReview1 = document.getElementById("badbtn1").value;
  localStorage.setItem("Q1", badReview1);
  sessionStorage.setItem("Q1", badReview1);
}

function gbIpt2(){
  //Gets and save good review for Q1
  var badReview2 = document.getElementById("badbtn2").value;
  localStorage.setItem("Q2", badReview2);
  sessionStorage.setItem("Q2", badReview2);
}

function gbIpt3(){
  //Gets and save good review for Q1
  var badReview3 = document.getElementById("badbtn3").value;
  localStorage.setItem("Q3", badReview3);
  sessionStorage.setItem("Q3", badReview3);
}

function gbIpt4(){
  //Gets and save good review for Q1
  var badReview4 = document.getElementById("badbtn4").value;
  localStorage.setItem("Q4", badReview4);
  sessionStorage.setItem("Q4", badReview4);
}
//----------------Bad Review Values----------------------------

//----------------Get Suggestion Values------------------------
function getSuggestion(){
  var newSuggestion = document.getElementById("suggestion").value;
  localStorage.setItem("Suggestion", newSuggestion);
  sessionStorage.setItem("Suggestion", newSuggestion);
}
//----------------Get Suggestion Values------------------------

