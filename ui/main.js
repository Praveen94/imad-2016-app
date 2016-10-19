console.log('Loaded!');
var count=0;
var button=document.getElementById('counter');

button.onclick=function()
{
    count+=1;
var span=document.getElementById('count');
span.innerHTML=count.toString();
button.innerHTML="Liked";
    
};

