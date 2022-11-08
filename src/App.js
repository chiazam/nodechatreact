// import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">

//        <section class="text-3xl font-bold underline">fuck you</section>

//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import a from "./class/a.js";
import signlog from "./com/signlog.js";

let App = ()=>{

    let end = a.uniqid();

let content=(<section id={end+"appbox"}>
    
    <signlog.Signlogtemp/>

</section>);

return(<section id={end+"appcase"}>{content}</section>);

};

export default App;
