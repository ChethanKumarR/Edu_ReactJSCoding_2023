
// //const heading = React.createElement("h1", {}, "Namaste Everyone");
// const heading = React.createElement(
//     "h1", 
//     {
//         id:"title",
//     }, 
//     "Namaste Everyone!"
// );

// console.log(heading);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// //passing a react element inside the root
// root.render(heading);



const heading1 = React.createElement(
    "h1",
    {
        id:"title",
    },
    "Heading1"
);

const heading2 = React.createElement(
    "h2",
    {
        id:"title",
    },
    "Heading2"
);

const container = React.createElement(
    "div",
    {
        id:"container",
    },
    [heading1, heading2]

);

console.log(heading1);

const root = ReactDOM.createRoot(document.getElementById("root"));

{/* passing a react element inside the root of render method */}
//render method takes the React element and modifiys the DOM
root.render(container);

