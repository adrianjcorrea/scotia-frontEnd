import React, {Component} from 'react';

//accentialy the same as Register just some minor changes.
//since this component has a state therefore making it a smart component.
class LogIn extends Component{
//addind the constructor and super functions.
//Plus we will be using props so might aswell pass them in to our functions.
constructor(props){
  super(props);
//will have a state of empty strings in our Register form for our input fields.
//For our Login we just need Email and Password.
   this.state = {
      logInEmail: "",
      logInPassword: ""
   }
 }

//we add our render method and our return for content to be displayed on app.
render(){
  return(
    <div>
       <article>
         <main>
          <div>
            <fieldset id="Log-In">
              <legend>Log In</legend>
              <div>
                <label htmlFor="email-address">Email : </label>
                <input type="email" name="email-address" id="email-address" />
              </div>
              <div>
                <label htmlFor="password">Password : </label>
                <input type="password" name="password" id="password" />
              </div>
              <div>
                <input type="submit" value="LogIn" />
              </div>
              <div>
                <input type="submit" value="REGISTER" />
              </div>
            </fieldset>
          </div>
         </main>
       </article>
    </div>
  );
 }
}
//adding the export so I will be able to export it to main(parent) component.
export default LogIn;