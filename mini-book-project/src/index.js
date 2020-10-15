import React from "react";
import ReactDOM from "react-dom";

//CSS for the React Project
//grabbing css from the source -> notice that it is good only for small projects due to name collisions.
import "./index.css"; //./ means file in same folder ../ is file in parent folder

//import and export statements - ES6 JavaScript statements
import { books } from "./books"; //importing the list of book objects from books.js //notice the same name of variable and relative path and no extension since it js file

import SpecificBook from "./Book"; //default export
//notice that we need to change it when rendering in booklist

//export example with relative path.
import { greeting } from "./testing_path/testingPath";

function BookList() {
  console.log(greeting);
  return (
    <section className="booklist">
      {books.map((book) => {
        return <SpecificBook key={book.id} {...book}></SpecificBook>;
      })}
    </section>
  );
}

// another way to destructure
// const Books = ({img, title, author}) => {

// }
//notice children destructure - elements that we add between open and closing brackets!!!. make sure to call them children to access them later.

// const Image = (props) => <img src={img} alt=""></img>;

//JSX CSS example -
// adding style attr for the element
// setup curly braces since javascript object
// notice two curly braces one to go back to javasxcript world, another to create an object in javasript
// include the values in "" since it serves as the value for the object
// remember this CSS will be on the top as it is inline and will never be able to be overwritten

//JSX Javascript
//initialize the const variables that could be passed in
//access them with {}
// must return a value, cannot be an expression must be a statement
// const Title = (props) => {
//   console.log(props);
//   return <h1>{title}</h1>;
// };

// const Author = () => (
//   <h3 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}>
//     {author.toUpperCase()}
//   </h3>
// );

ReactDOM.render(<BookList />, document.getElementById("root"));
