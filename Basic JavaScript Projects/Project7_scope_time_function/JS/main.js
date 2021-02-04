var X = 10;//global variable
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100 + "<br>");
}
Add_numbers_1();
Add_numbers_2();
function Add_numbers_3() {
    var Y = 10;//local variable
    document.write(20 + Y + "<br>");
}
function Add_numbers_4() {
    document.write(Y + 100);
}
Add_numbers_3();
Add_numbers_4();//should NOT show up when viewed on html
function Add_numbers_3() {
    var Y = 10;//local variable
    document.write(20 + Y + "<br>");
}
function Add_numbers_4() {
    console.log(Y + 100);//using console.log() method to debug
}
Add_numbers_3();
Add_numbers_4();
function get_Date() {
    if (new Date().getHours() <= 23) {//using the time method with if conditional statement
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}
function get_Minutes() {
    if (new Date().getMinutes() < 30) {
        document.getElementById("Minutes").innerHTML = "It's the first half of the hour!";
    }
}
function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {//using else conditional statement
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}
function Time_function() {//using the else if conditional statement
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}