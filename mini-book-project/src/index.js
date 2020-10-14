import React from "react";
import ReactDOM from "react-dom";

//CSS for the React Project
//grabbing css from the source -> notice that it is good only for small projects due to name collisions.
import "./index.css"; //./ means file in same folder ../ is file in parent folder

//setup variables. //can do a list but can also do object book = {img: , title: , author:  }

const books = [
  {
    id: 1, //id for the unique react item identification
    title: "Room on the Broom",
    author: "Julia Donaldson",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/A1XyS0D1S-L._AC_UL200_SR200,200_.jpg",
  },
  {
    id: 2, //id for the unique react item identification
    title: "Modern Comfort Food",
    author: "Ina Garten",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/81CTXWG01OL._AC_UL200_SR200,200_.jpg",
  },
  {
    id: 3, //id for the unique react item identification
    title: "The Antiquarian Sticker Book: Over 1,000…",
    author: "Odd Dot",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/A1Xhi8TtpFL._AC_UL200_SR200,200_.jpg",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} book={book}></Book>;
      })}
      {/* popular spread operator way of doing things
        {books.map((book) => {
          return <Book key={book.id} book{...book}></Book>;
        })
        */}
    </section>
  );
}

// another way to destructure
// const Books = ({img, title, author}) => {

// }
//notice children destructure - elements that we add between open and closing brackets!!!. make sure to call them children to access them later.
const Book = (props /* { img, title, author, children } */) => {
  //destructuring inside brackets above
  const { img, title, author } = props.book; //destructuring of props if passing in props

  //if using spread operator just have this
  // const { img, title, author } = props
  return (
    <article className="book">
      <img src={img} alt=""></img>
      <h1>{title}</h1>
      <h3
        style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}
      >
        {author}
      </h3>
      {props.children}
      {/* <p>{let x = 6;</p>  would actually not work as this does not return a value*/}
      {/* <p>{6+6}</p> this would work for example*/}
    </article>
  );
};

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
