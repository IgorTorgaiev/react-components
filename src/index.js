import React from 'react';
import ReactDOM from 'react-dom';
import Gym from './App.js';


ReactDOM.render(<Gym />, document.getElementById('root'));



// Class Component
// Let's bear in mind that we always have to use extends React.Component
// In addition, we have to use such method as render(). 

// class Category extends React.Component {
//   render() {
//     return <h2>People are so different among each other and they belong to different categories</h2>;
//   }
// }
// ReactDOM.render(<Category />, document.getElementById('root'));

// Function Component

// function Work() {
//   return <p><strong>Entrepreneur</strong> :  I would rather be an self-employer than an employee</p>;
// }

// ReactDOM.render(<Work />, document.getElementById('root'));

// function Rich() {
//   return <p><strong>Rich</strong>: And, I would like to become a billioanire</p>;
// }
// ReactDOM.render(<Rich />, document.getElementById('text'));

// Component Constructor

// class Work extends React.Component {
//   constructor() {
//     super();
//     this.state = {poor: "builder"};
//   }
//   render() {
//     return <h2>I am afraid I will be earning so few while working as a {this.state.poor}.</h2>;
//   }
// }
// ReactDOM.render(<Work />, document.getElementById('root'));

// Props

// class Work extends React.Component {
//   render() {
//     return <h2>I am not a factory worker any more. I am already a  {this.props.job}. </h2>;
//   }
// }
// ReactDOM.render(<Work job="programmer"/>, document.getElementById('root'));

// Components inside the components

// class Singer extends React.Component {
//   render() {
//     return <h3>I listen to the songs of Elvis Presley</h3>;
//   }
// }

// class Artist extends React.Component {
//   render() {
//     return (
//       <div>
//         <p>But, I am an artist</p>
//         <Singer />
//       </div>
//     )
//   }
// }
// ReactDOM.render(<Artist  />, document.getElementById('root'));

// Components in the Files

