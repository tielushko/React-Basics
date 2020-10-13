import React from "react";
import ReactDOM from "react-dom";

//CSS for the React Project
//grabbing css from the source -> notice that it is good only for small projects due to name collisions.
import "./index.css"; //./ means file in same folder ../ is file in parent folder

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />

      {/* <p>{let x = 6;</p>  would actually not work as this does not return a value*/}
      {/* <p>{6+6}</p> this would work for example*/}
    </article>
  );
};

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/A1XyS0D1S-L._AC_UL200_SR200,200_.jpg"
    alt=""
  ></img>
);

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
const Title = () => {
  const title = "Room on the Broom"; //can be outside or inside the functions, it really depends.
  return <h1>{title}</h1>;
};

const author = "Julia Donaldson"; // outside variable example
const Author = () => (
  <h3 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}>
    {author.toUpperCase()}
  </h3>
);

ReactDOM.render(<BookList />, document.getElementById("root"));
