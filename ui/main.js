//console.log('Loaded!');
var button=document.getElementById('counter');

button.onclick=function(){
  var request=new XMLHttpRequest();
  request.onreadystatechange=function()
  {
      if(request.readystate===XMLHttprequest.DONE)
  {
    if(request.status===200)
    {
      var counter= request.responseText;
    var span=document.getElementById('count');
span.innerHTML=counter.toString();
        
    }
  }
      
  };
  
  
  
  
  
  
//    counter+=1;

request.open('GET','http://http:praveen94.imad.hasura-app.io/counter',true);    
request.send(null);
    
};

    



