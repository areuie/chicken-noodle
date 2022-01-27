function check1() {
    var question1a = document.quiz.question1a.value;
    var question1b = document.quiz.question1b.value;
    var question1c = document.quiz.question1c.value;
    var question1d = document.quiz.question1d.value;
    var sum = 0;
    
    if (question1a == "y=-4.9(x-9)(x+9)") {
        document.getElementById("textbox1").style.background = "green";
        sum++;
    }
    else {
        document.getElementById("textbox1").style.background = "red";
    }
    if (question1b == "y=-4.9(x-9.5)(x+7)") {
        document.getElementById("textbox2").style.background = "green";
        sum++;
    }
    else {
        document.getElementById("textbox2").style.background = "red";
    }
    if (question1c == "Yes") {
        document.getElementById("multc1").style.color = "green";
        document.getElementById("multc2").style.color = "green";
        sum++;
    }
    else {
        document.getElementById("multc1").style.color = "red";
        document.getElementById("multc2").style.color = "red";
    }
    if (question1d == "5.8") {
        document.getElementById("textbox3").style.background = "green";
        sum++;
    }
    else {
        document.getElementById("textbox3").style.background = "red";
    }

    if (sum == 4) {
        document.getElementById("right").style.visibility = "visible";
    }
    else {
        document.getElementById("wrong").style.visibility = "visible";
    }
}