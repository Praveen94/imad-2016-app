//console.log('Loaded!');
var button=document.getElementById('counter');


//submit name

var submit=document.getElementById('submit-btn');
submit.onclick=function()
{
var nameInput=document.getElementById('name');
var name=nameInput.value;
 var request=new XMLHttpRequest();
  request.onreadystatechange=function()
  {
      if(request.readyState==XMLHttpRequest.DONE)
  {
    if(request.status===200)
    {
     var names=request.responseText;
    names=JSON.parse(names);
    var list='';
for(var i=0;i<names.length;i++)
{
    list+="<li>"+names[i]+"</li>";
}
var ul=document.getElementById('namelist');
ul.innerHTML=list;

    }
  }
      
  };
  
  
  
  
  
  
//    counter+=1;

request.open('GET','http://praveen94.imad.hasura-app.io/submit_name?name='+name,true);    
request.send(null);
    
};















