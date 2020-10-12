import React from "react"; //ES6 JavaScript to add react functionality as a module
import ReactDom from "react-dom"; //importing dom dependency to use Render method to inject js into html file unnder root

//must capitalize the name of the function
function Greeting() {
  //this function must return html (which is in fact officially jsx)
  return <h4>This is Oleg and this is my first component</h4>; //html that will be displayed on the screen
}

//must pass in with closing tag <Greeting/> or <Greeting></Greeting>
ReactDom.render(<Greeting />, document.getElementById("root")); //notice we pass in the component and the div to which we are injecting it
