import React from "react"; //ES6 JavaScript to add react functionality as a module
import ReactDom from "react-dom"; //importing dom dependency to use Render method to inject js into html file unnder root

//must capitalize the name of the function
//stateless functional component / always must return JSX

//JSX Rules
// return single element - use div wrappers but a lot of divs is not a good semantic - use article section footer, etc.
// div / section / article or fragment
// use camelCase for html attribute: instead of onclick use onClick
// className instead of class example instead of class attribute, use className
// close every element -> even the ones without the closing tags/  -> check image example
//  formatting - use parentheses for return

function Greeting() {
  //this function must return html (which is in fact officially jsx)
  return (
    //instead of wrapping in div div div can do <React.Fragment>
    <div>
      <h3>Hello People</h3>
      <ul>
        <li>
          <a href="google.com">hello world</a>
        </li>
        <img src="" alt=""></img>
        <input type="text" name="" id="" />
      </ul>
    </div>
  ); //html that will be displayed on the screen
} //html syntax allows us to return something more readable than the function below

//arrow function with createElement example
/* const Greeting = () => {
  return React.createElement(
    "div", //element
    {}, //object?? later in lecture
    React.createElement("h1", {}, "hello world") //child of the parent element
  );
}; */

//NESTED COMPONENTS, react tools

function GreetingTwo() {
  //general convention is to have this called as app then add nested components within it
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => <h2>john doe</h2>; //we are creating non explicit return component, then adding that into GreetingTwo
const Message = () => {
  return <p>This is my message</p>;
}; //arrow function statement with explicit return of the message

//must pass in with closing tag <Greeting/> or <Greeting></Greeting>
ReactDom.render(<Greeting />, document.getElementById("root")); //notice we pass in the component and the div to which we are injecting it
ReactDom.render(<GreetingTwo />, document.getElementById("root")); //notice we pass in the component and the div to which we are injecting it
