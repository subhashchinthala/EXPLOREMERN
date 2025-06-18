
    let users = [];

    const validateuser = () => {
      let email = document.getElementById("Email1").value;
      let pass = document.getElementById("pass1").value;

      const found = users.find((value) => value.email === email && value.pass === pass);
      if (found) {
        showHome();
      } else {
        document.getElementById("errorTxt").innerHTML = "Access Denied";
      }
    };
    const renderUserList = () => {
    let x= "<h4>Registered Users:</h4>";
    if(users.length==0){
        return "<p>No Users Registered</p>";

    }
    users.forEach(user => {
        x += `<p>${user.name} | ${user.email} | ${user.pass}</p>`;
    });
    
    return x;
};

    const loginForm = () => {
      const str = `<div>
        <h3>Login Form</h3>
        <p id='errorTxt'></p>
        <br>
        <div class="intro-form">
          <label for="Email1">Email:</label>
          <input type="text" id="Email1" placeholder="Email">
          <br><br>
          <label for="pass1">Password:</label>
          <input type="pass" id="pass1" placeholder="Password">
        </div>
        <br>
        <p><button class="btn1" onclick='validateuser()'>Submit</button></p>
        <br>
        <p><button class="btn1" onclick='registerForm()'>Create Account</button></p>
         <div>
         
     ${renderUserList()}
    </div>
      </div>`;
      root.innerHTML = str;
    };

    const saveUser = () => {
      let name = document.getElementById("user").value;
      let email = document.getElementById("Email").value;
      let pass = document.getElementById("pass").value;

      users.push({ name, email, pass });
      console.log(users); 
      loginForm();
    };

    const registerForm = () => {
      const str = `<div>
        <h3>Registration Form</h3>
        <div class="intro-form">
          <label for="user">Username:</label>
          <input type="text" id="user" placeholder="Username">
          <br><br>
          <label for="Email">Email:</label>
          <input type="text" id="Email" placeholder="Email">
          <br><br>
          <label for="pass">Password:</label>
          <input type="pass" id="pass" placeholder="Password">
        </div>
        <br>
        <p><button class="btn1" onclick='saveUser()'>Submit</button></p>
        <br>
        <p><button class="btn1" onclick='loginForm()'>Already a member? Login here...</button></p>
      </div>`;
      root.innerHTML = str;
    };

    const showHome = () => {
      const str = `<div>
        <h3>Welcome to the Home Page</h3>
        <p><button class="btn1" onclick='loginForm()'>Logout</button></p>
      </div>`;
      root.innerHTML = str;
    };
  