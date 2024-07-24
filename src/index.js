// ! import the React and ReactDOM

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// ! get the div element with id root

const element = document.getElementById("root");

// ! Tell the react to control the element

const root = ReactDOM.createRoot(element);

// ! Add the Component which will return a JSX

// function App() {
//     // ? Simple Message

//     // return <h1>First React Practice</h1>;

//     // ? Using a variable

//     // let message = 'New Message!';
//     // if (Math.random() > 1) {
//     //     message = 'Working!';
//     // }
//     // return <h1>{ message }</h1>;

//     // -> Varaibles should be enclosed in a curly.

//     // ? Shorthands variable

//     // const date = new Date();
//     // const time = date.toLocaleTimeString();
//     // return <h1>{time}</h1>;
//     //// Alternate form
//     // return <h1>{new Date().toLocaleTimeString()}</h1>;

//     // ? Exercise
//     // const name = "Developer";
//     // return (
//     //     <div>
//     //         <h1>My name is : {name}</h1>
//     //     </div>
//     // );


    
// }

// ! Show the component

root.render(<App />);
