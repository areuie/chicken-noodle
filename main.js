function check11() {
    var question11a = document.quiz.question11a.value;
    var question11b = document.quiz.question11b.value;
    var question11c = document.quiz.question11c.value;
    var question11d = document.quiz.question11d.value;
    var sum = 0;
    
    if (question11a == "y=-4.9(x-9)(x+9)") {
        document.getElementById("textbox11a").style.background = "green";
        sum++;
    }
    else {
        document.getElementById("textbox11a").style.background = "red";
    }
    if (question11b == "y=-4.9(x-9.5)(x+7)") {
        document.getElementById("textbox11b").style.background = "green";
        sum++;
    }
    else {
        document.getElementById("textbox11b").style.background = "red";
    }
    if (question11c == "Yes") {
        document.getElementById("mc11c").style.color = "green";
        document.getElementById("mc11c").style.color = "green";
        sum++;
    }
    else {
        document.getElementById("mc11c").style.color = "red";
        document.getElementById("mc11c").style.color = "red";
    }
    if (question11d == "5.8") {
        document.getElementById("textbox11d").style.background = "green";
        sum++;
    }
    else {
        document.getElementById("textbox11d").style.background = "red";
    }

    if (sum == 4) {
        document.getElementById("right").style.visibility = "visible";
        document.getElementById("wrong").style.visibility = "hidden";
    }
    else {
        document.getElementById("wrong").style.visibility = "visible";
        document.getElementById("right").style.visibility = "hidden";
    }
}

function check12() {
    var question2a = document.quiz.question1a.value;
    var question2b = document.quiz.question1b.value;
}