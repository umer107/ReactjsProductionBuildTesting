import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class PopUp extends Component
{
screenSignIn = ()=>
{
  alert('SignIn');
}
popupClose=()=> {

   $('.popup-login').slideUp(150);
   $('.signUp-form').addClass('hide').addClass('opacity0');
    $('.signIn-form').removeClass('hide');

}

  //Render
  render()
  {
     var style =
     {
        display: "none"
     }
    return(

      <div className="popup-login popupcontainer bg-white " style = {style} >
   <div>
       <div className="popupLogo absolute">
           <img src="../images/popup-logo.png" />
       </div>
       <div className="popupClose absolute" onClick={() => this.popupClose()}>
           <a href="javascript:;"> <img src="../images/popup-close.png" /> </a>
       </div>
   </div>
   <div className="popup-content relative">

       <div className="popup-inner-container">
           <div className="signIn-form">
               <h2 className="color-blue align-center">Sign in with your account</h2>
               <form action="javascript:;" method="POST">
                   <input type="text" name="email" className="email-field" placeholder="Email-Address" />
                   <input type="password" name="password" className="password-field hide" placeholder="Password"  />
                   <p className="align-right one-half-pad-top fs-14 forget-password-field hide" ><a href="javascript:;" className="color-blue fw-400">Forgot?</a></p>
                   <input type="submit" value="Sign in" className="bg-white fs-17 color-blue pointer double-gap-top d-b auto-margin" />
                   <div className="social-login full align-center fifty-pad-top">
                       <a href="javascript:;" className="d-i-b double-gap-right "><span className="facebookLogin d-i-b"></span></a>
                       <a href="javascript:;" className="d-i-b double-gap-right "><span className="googleLogin d-i-b"></span></a>
                       <a href="javascript:;" className="d-i-b"><span className="twitterLogin d-i-b"></span></a>
                   </div>
                   <div className="signUp-link align-center full">
                       <p className="fs-14">Don’t have an account? <span className="color-blue fw-500 screen-signup  pointer">Sign up!</span></p>
                   </div>
               </form>
           </div>
           <div className="signUp-form hide opacity0">
               <h2 className="color-blue align-center">Sign up with new account</h2>
               <form action="javascript:;" method="POST">
                   <input type="text" name="firstname" className="two-half-gap-bottom" placeholder="First Name" />
                   <input type="text" name="lastname" className="two-half-gap-bottom" placeholder="Last Name" />
                   <input type="text" name="email" className="two-half-gap-bottom" placeholder="Email-Address" />
                   <input type="password" name="password" className="two-half-gap-bottom" placeholder="Password" />
                   <input type="submit" value="Sign Up" className="bg-white fs-17 color-blue pointer double-gap-top d-b auto-margin" />
                   <div className="social-login full align-center fifty-pad-top">
                       <a href="javascript:;" className="d-i-b double-gap-right "><span className="facebookLogin d-i-b"></span></a>
                       <a href="javascript:;" className="d-i-b double-gap-right "><span className="googleLogin d-i-b"></span></a>
                       <a href="javascript:;" className="d-i-b"><span className="twitterLogin d-i-b"></span></a>
                   </div>
                                   <div className="signUp-link align-center full">
                   <p className="fs-14">Already have an account? <span className="color-blue fw-500 screen-signIn  pointer" onClick={() => this.screenSignIn()}>Sign in!</span></p>
               </div>

               </form>
           </div>
           <div className="popup-details">
               <div className="full">
                   <img src="../images/login-image1.png" />
                   <p className="color-blue fs-20  triple-pad-top pad-bottom">Stop searching and start following</p>
                   <p className="fs-14">Follow your favorite properties, areas and agents.<br /> Keep updated on the everything you love</p>
               </div>
               <div className="full triple-pad-top">
                   <img src="../images/login-image2.png" />
                   <p className="color-blue fs-20  triple-pad-top pad-bottom">Download followit on your mobile</p>
                   <p className="fs-14">Connect all your devices so you can be the first <br /> to know  when anything changes in the market</p>
               </div>


           </div>

       </div>

   </div>
</div>


    );
  }
}


export default PopUp;
