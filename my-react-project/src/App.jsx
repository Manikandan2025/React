// import { useState } from "react";

import "./App.css";
import Navbar from "./Component/Navbar.jsx";
import Footer from "./Component/Footer.jsx";

// function App() {
//   const [count, setCount] = useState(0);
//   const obj = [
//     "apple",
//     "mango",
//     "banana",
//     "orange",
//     "grape",
//     "kiwi",
//     "peach",
//     "pear",
//     "plum",
//     "pineapple",
//   ];

//   return (
//     <>
//       <div></div>
//       <h1>Welcome to React</h1>
//       <div className="card">
//         <button
//           onClick={() => setCount((count) => count + 1)}
//           onDoubleClick={() => setCount((count) => count - 2)}
//           onMouseOver={() => setCount((count) => count + 5)}
//           onMouseLeave={() => setCount((count) => count - 100)}
//         >
//           count is {count}
//         </button>
//         <div>
//           the elements are:
//           {obj.map((item, index) => {
//             return <div key={index}>{item}</div>;
//           })}
//         </div>
//       </div>
//     </>
//   );
// }

function App() {
  return (
    <>
      <Navbar />
      <Footer />
    </>
  );
}
export default App;
