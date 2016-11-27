function loadLoginForm () {
    var loginHtml = `
     
  <div class="imgcontainer">
    <img src="/ui/img_avatar3.png" alt="Avatar" class="avatar">
  </div>

  <div class="container">
    <label><b>Username</b></label>
    <input type="text" id="username" placeholder="username" required /> 

    <label><b>Password</b></label>
    <input type="password" id="password" placeholder="Password" required />
<br /><br />
    <button type="submit" id="login_btn">Login</button> 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 <button type="submit" id="register_btn">Register</button>

  
</div>

  
        `;
    document.getElementById('login_area').innerHTML = loginHtml;
    
    //// Submit username/password to login
    var submit = document.getElementById('login_btn');
    submit.onclick = function () {
        
        validateForm();
        
        // Create a request object
        var request = new XMLHttpRequest();
        
        // Capture the response and store it in a variable
        request.onreadystatechange = function () {
          if (request.readyState === XMLHttpRequest.DONE) {
              // Take some action
              if (request.status === 200) {
                 alert("Sucess!");
              } else if (request.status === 403) {
                  alert("Invalid credentials. Try again?");
              } else if (request.status === 500) {
                 alert('Something went wrong on the server a');
                  submit.value = 'Login';
              } else {
                  alert('Something went wrong on the server b');
                  submit.value = 'Login';
              }
              loadLogin();
          }  
          
        };
        
        // Make the request
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        
        request.open('POST', '/login', true);
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify({username: username, password: password}));  
        submit.value = 'Logging in...';
        
    };
    
    var register = document.getElementById('register_btn');
    register.onclick = function () {
        // Create a request object
        var request = new XMLHttpRequest();
        
        // Capture the response and store it in a variable
        request.onreadystatechange = function () {
          if (request.readyState === XMLHttpRequest.DONE) {
              // Take some action
              if (request.status === 200) {
                  alert('User created successfully');
                  register.value = 'Registered!';
              } else {
                  alert('Could not register the user');
                  register.value = 'Register';
              }
          }
        };
        
        // Make the request
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        console.log(username);
        console.log(password);
        request.open('POST', '/create-user', true);
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify({username: username, password: password}));  
        register.value = 'Registering...';
    
    };
}

function loadLoggedInUser (username) {
    var loginArea = document.getElementById('login_area');
    loginArea.innerHTML = `
    <br/><br/>
    <a href="/logout"><button type="button" class="btn btn-default btn-sm">
          <span class="glyphicon glyphicon-log-out"></span> Log out
        </button></a>
      <center>  <h2><u>Welcome <i>${username}</i></u></h2> </center>
        
        
        <br/><br/><br/>
        <h3><center>You have Logged In!!!</center></h3>
    <img id="login_img" src="/ui/smile.png" />
    
    
    `;
}

function loadLogin () {
    // Check if the user is already logged in
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                loadLoggedInUser(this.responseText);
                write_article();
            } else {
                loadLoginForm();
                nowrite();
            }
        }
    };
    
    request.open('GET', '/check-login', true);
    request.send(null);
}

function loadArticles () {
        // Check if the user is already logged in
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            var articles = document.getElementById('articles');
            if (request.status === 200) {
               
                var articleData = JSON.parse(this.responseText);
                var content = `
                <div class="container">
                <div class="panel-group" id="accordion">
                <div class="panel panel-default">
      <div class="panel-heading">
        <h4 class="panel-title">
          

<a data-toggle="collapse" data-parent="#accordion" href="#collapse${[0]}">${articleData[0].heading}</a>
        </h4>
      </div>
      <div id="collapse${[0]}" class="panel-collapse collapse in">
        <div class="panel-body">${articleData[0].content}
        <br />
        <br />
        <a href="articles/${articleData[0].title}"><button class="btn btn-primary">View/Submit Comments</button></a>
        
        
        
        </div>
      </div>
   
    </div>`
                ;
               
                for (var i=1; i< articleData.length; i++) {
                    content += `<div class="panel panel-default">
      <div class="panel-heading">
        <h4 class="panel-title">
          

<a data-toggle="collapse" data-parent="#accordion" href="#collapse${[i]}">${articleData[i].heading}</a>
        </h4>
      </div>
      <div id="collapse${[i]}" class="panel-collapse collapse">
        <div class="panel-body">${articleData[i].content}
          <br />
        <br />
        <a href="articles/${articleData[i].title}"><button class="btn btn-primary">View/Submit Comments</button></a>
        </div>
      </div>
    </div>`;
                }
                
                content+=" </div></div>"
                
                articles.innerHTML = content;
            } else {
                articles.innerHTML('Oops! Could not load all articles!')
            }
        }
    };
    
    request.open('GET', '/get-articles', true);
    request.send(null);
}

function write_article()
{
    var submitArticle=`
    <h3>Write an article</h3>
    <br />
    <p>Title:<input type="text" id="art_title" placeholder="title" /></p>
    <br />
    <p>Date:<input type="text" id="art_date" placeholder="YYYY-MM-DD" /></p>
    <br />
    <p>Heading:<input type="text" id="art_heading" placeholder="heading" /></p>
    <br />
    <p>Content:</p>
    <br/><textarea rows="5" cols="200" id="art_content" placeholder="content">
</textarea>
    <br />
    <input type="submit" id="art_submit" value="Submit" />
    `;
    document.getElementById('write_article').innerHTML=submitArticle;
    
   var submit=document.getElementById('art_submit');
   submit.onclick=function()
   {
       var request=new XMLHttpRequest();
       request.onreadystatechange=function()
       {
        if(request.readyState==4 && request.status==200)
        {
        submit.value='Posted';
        }
       
            
        };
       var title=document.getElementById('art_title').value;    
       var date=document.getElementById('art_date').value;
       var heading=document.getElementById('art_heading').value;
       var content=document.getElementById('art_content').value;
       request.open('POST','/submit_article',true);
       request.setRequestHeader('Content-Type', 'application/json');
       request.send(JSON.stringify({title:title,date:date,heading:heading,content:content}));
        submit.value = 'Posting...';
       
   };
       
           
           
       }
       
function nowrite()
{
 var nowrite=  `<h3>Oops!!!You don't seem to be logged in.</h3>
 <img id="nowrite" src="/ui/bean.gif" alt="Sorry"/>
 
 
 
 `;
  document.getElementById('write_article').innerHTML=nowrite;
}
    
    

   
   



loadLogin();

loadArticles();

