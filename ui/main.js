console.log('Loaded!');
var button=document.getElementById('counter');

button.onclick=function()
{
  //Create a request
   var request=new XMLHttpRequest();
   
   //capture the response and store it in a variable
   request.onreadystatechange=function()
   {
       if(request.onreadystatechange===XMLHttpRequest.DONE)
     {
       if(request.status===200)
       {
       var counter=request.responseText;
       
   var span=document.getElementById('count');
span.innerHTML=counter.toString();

if(counter%2===0)
{
button.innerHTML="Like";
button.style.width="50px";
}
else
{
button.innerHTML="Liked";
button.style.width="50px";
}
}
}
};
//Make the request
request.open('GET','http://praveen94.imad.hasura-app.io/counter',true);
request.send(null);
   
 };
    
