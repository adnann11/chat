import React from 'react'
import '../stylesheets/login.css'

const Login = () => {
  // (document).ready(
  //   function() {
  
  //     ('#signup').on("click", function() {
  //       var x = this.id;
  //       ("#" + x).removeClass("s-atbottom");
  //       ("#" + x).addClass("s-attop");
  //       ("#login").removeClass("l-attop");
  //       ("#login").addClass("l-atbottom");
  
  //     });
  
  //     ('#login').on("click", function() {
  //       var x = this.id;
  //       ("#" + x).removeClass("l-atbottom");
  //       ("#" + x).addClass("l-attop");
  //       ("#signup").removeClass("s-attop");
  //       ("#signup").addClass("s-atbottom");
  
  //     });
  
  //   }
  
  // );
    return (
        <div>
<div class="login-signup l-attop" id="login">
  <div class="login-signup-title">
    LOG IN
  </div>
  <div class="login-signup-content">
    <div class="input-name">
      <h2>Username</h2>

    </div>
    <input type="text" name="username" value="" class="field-input" />
    <div class="input-name input-margin">
      <h2>Password</h2>

    </div>
    <input type="text" name="password" value="" class="field-input" />
    <div class="input-r">


      <div class="check-input">
        <input type="checkbox" id="remember-me-2" name="rememberme" value="" class="checkme"/>
        <label class="remmeberme-blue" for="remember-me-2"></label>
      </div>
      <div class="rememberme"><label for="remember-me-2">Remember Me</label></div>
    </div>
    <button class="submit-btn">
          Enter
        </button>


    <div class="forgot-pass">
      <a href="#">Forgot Password?</a>
    </div>

  </div>
</div>


<div class="login-signup s-atbottom" id="signup">
  <div class="login-signup-title">
    SIGN UP
  </div>
  <div class="login-signup-content">
    <div class="input-name">
      <h2>Username</h2>

    </div>
    <input type="text" name="username" value="" class="field-input" />
    <div class="input-name input-margin">
      <h2>E-Mail</h2>

    </div>
    <input type="text" name="email" value="" class="field-input" />
    <div class="input-name input-margin">
      <h2>Password</h2>

    </div>
    <input type="text" name="password" value="" class="field-input" />

    <button class="submit-btn">
              Enter
            </button>


  </div>
</div>
        </div>
    )
}

export default Login
