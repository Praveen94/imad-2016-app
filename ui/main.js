console.log('Loaded!');
var counter=0;
var button=document.getElementById('counter');

button.onclick=function()
{
    counter+=1;
var span=document.getElementById('count');
span.innerHTML=counter.toString();
if(counter%2==0)
button.innerHTML="Like";
else
button.innerHTML="Liked";
};

