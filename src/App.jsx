// // // import React from 'react';
// // // import Reel from './components/Reel';

// // // const App = () => {
// // //   return (
// // //     <div className="App">
// // //       <h1>Myntra Reels</h1>
// // //       <Reel />
// // //     </div>
// // //   );
// // // };

// // // export default App;








// // import React from 'react';
// // import Reel from './components/Reel';
// // import Influencer from './components/Influencer';
// // import FashionChallenge from './components/FashionChallenge';

// // function App() {
// //   return (
// //     <div className="App">
// //       <h1>Welcome to Myntra</h1>
// //       <Reel />
// //       <Influencer />
// //       <FashionChallenge />
// //     </div>
// //   );
// // }

// // export default App;






// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import Reel from './components/Reel';
// import Influencer from './components/Influencer';
// import FashionChallenge from './components/FashionChallenge';
// import './styles.css';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <nav>
//           <div className="nav-container">
//             <img src="/Images/logo.jpg" alt="Myntra Logo" className="logo" />
//             <ul>
//               <li>
//                 <Link to="/">Myntra TrendSpot</Link>
//               </li>
//               <li>
//                 <Link to="/reels">Reels</Link>
//               </li>
//               <li>
//                 <Link to="/influencer">Influencer</Link>
//               </li>
//               <li>
//                 <Link to="/fashion-challenge">Fashion Challenge</Link>
//               </li>
//             </ul>
//           </div>
//         </nav>

//         <div className="content">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/reels" element={<Reel />} />
//             <Route path="/influencer" element={<Influencer />} />
//             <Route path="/fashion-challenge" element={<FashionChallenge />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// const Home = () => (
//   <div>
//     <h1>Welcome to Myntra</h1>
//     <p>Select a section from the navigation bar.</p>
//   </div>
// );

// export default App;








import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Reel from './components/Reel';
import Influencer from './components/Influencer';
import FashionChallenge from './components/FashionChallenge';
import './styles.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <div className="nav-container">
            <img src="/Images/logo.jpg" alt="Myntra Logo" className="logo" />
            <ul>
              <li>
                <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
                  Myntra TrendSpot
                </NavLink>
              </li>
              <li>
                <NavLink to="/reels" className={({ isActive }) => (isActive ? 'active' : '')}>
                  Reels
                </NavLink>
              </li>
              <li>
                <NavLink to="/influencer" className={({ isActive }) => (isActive ? 'active' : '')}>
                  Influencer
                </NavLink>
              </li>
              <li>
                <NavLink to="/fashion-challenge" className={({ isActive }) => (isActive ? 'active' : '')}>
                  Fashion Challenge
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reels" element={<Reel />} />
            <Route path="/influencer" element={<Influencer />} />
            <Route path="/fashion-challenge" element={<FashionChallenge />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

const Home = () => (
  // <div>
  //   <h1>Welcome to Myntra</h1>
  //   <p>Select a section from the navigation bar.</p>
  // </div>
  <div>
    <div className="home-container">
    <header className="hero-section">
      <h1>Welcome to Myntra TrendSpot</h1>
      <p>Discover the latest trends, collaborate with influencers, and participate in exciting fashion challenges!</p>
    </header>

    <section className="feature-section">
      <div className="feature">
        <img src="/Images/reels.jpg" alt="Reels" className="feature-image" />
        <h2>Reels</h2>
        <p>Watch and shop from the latest fashion reels. Discover new styles and trends.</p>
        <NavLink to="/reels" className="feature-button">Explore Reels</NavLink>
      </div>

      <div className="feature">
        <img src="/Images/influencers.jpg" alt="Influencers" className="feature-image" />
        <h2>Influencer Collaborations</h2>
        <p>Follow your favorite influencers and see their latest fashion picks.</p>
        <NavLink to="/influencer" className="feature-button">Meet Influencers</NavLink>
      </div>

      <div className="feature">
        <img src="/Images/fashion-challenge.webp" alt="Fashion Challenge" className="feature-image" />
        <h2>Fashion Challenges</h2>
        <p>Participate in fashion challenges and get featured on our platform.</p>
        <NavLink to="/fashion-challenge" className="feature-button">Join Challenges</NavLink>
      </div>
    </section>
  </div>
  </div>
  
);

export default App;
