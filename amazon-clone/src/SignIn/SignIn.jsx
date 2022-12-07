import React from 'react'
import "./SignIn.css"
import { Link } from 'react-router-dom'
function SignIn() {
    return (
            
      <div className='sign-in'>
          <div className="container">
                <div className="sign-in-amazon-logo">
                    <Link to="/">
                        <img className="sign-in-header-logo" alt="amazon" src="./amazon-icon-21121.jpg" />
                    </Link> 
                </div>
                
              <div className="sign-in-box">
                  <h1>Sign In</h1>
                  <label htmlFor="">Email or mobile phone number</label><br/>
                  <input className='input' type="text" name="email-phone" id="email-phone" /><br />
                  <input className='input' type="submit" value="Continue" /><br />
                  <div id="legalTextRow" className="para">
                    By continuing, you agree to Amazon's <a href="/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&amp;nodeId=200545940">Conditions of Use</a> and <a href="/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&amp;nodeId=200534380">Privacy Notice</a>.
                  </div><br />
                  <span className='para'>Need help?</span>     
              </div>

              <div className="signup">
                  <h5 className='new-to-amazon'>New to Amazon?</h5>
                  <input className='input' id='create-your-amazon-account' type="submit" value="Create your Amazon account" />
              </div>
              
          </div>
     </div>
        
  )
}

export default SignIn