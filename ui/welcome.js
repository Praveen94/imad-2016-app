var myString="Hi Everyone.I am Praveen Ramkumar.This is my web app.";
var myArray=myString.split("");
var loopTimer;
function frameLooper()
{

if(myArray.length>0)
{
document.getElementById("myTypingText").innerHTML+=myArray.shift();
}
else{
clearTimeout(loopTimer);
}
loopTimer=setTimeout('frameLooper()',100);


}
frameLooper();
