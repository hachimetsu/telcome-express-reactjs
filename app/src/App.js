import './App.scss';
import Navebar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Route from './Route'
const { $navbar, $footer } = require("./DB.json");
export default function App() {
  return <>
    <Navebar setJSON={$navbar} />
    <div className='text-center' style={{ minHeight: "45rem" }}>
      <Route />
    </div>
    <Footer setJSON={$footer} />
  </>
}




// import logo from './logo.svg';
// import './App.scss';
// import Route from './Route'
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <Route />
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

// export default App;
