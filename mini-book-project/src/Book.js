import React from 'react'

const Book = ({ img, title, author, children }) => {
  //attribute, eventHandler
  //onClick, onMouseOver
  const clickHandler = () => {
    alert("Hello world");
  };

  //example where we need to pass in arguments into the function
  const complexExample = (author) => {
    alert(author);
  };

  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt=""></img>
      <h1 onClick={() => alert(title)}>{title}</h1>
      <h4>{author}</h4>
      {children}
      <button type="button" onClick={clickHandler}>
        Reference Example
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        More complex example
      </button>
    </article>
  );
};

export default Book //can only have one default export per file but multiple named exports
