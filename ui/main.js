console.log('Loaded!');
var c=0;
var button=document.getElementById('counter');

button.onclick=function()
{
    c+=1;
var span=document.getElementById('count');
span.innerHTML=c.toString();
};

