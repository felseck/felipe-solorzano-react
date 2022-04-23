import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useSelector} from "react-redux";


function App4Router() {

  const counter = useSelector((state) => state.counter);

  return (


    <div className="card border-primary mb-3">
      <div className="card-header">App 4 - Router</div>
      <div className="card-body text-primary">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item active" aria-current="page"><Link to="/about">About</Link></li>
          </ol>
        </nav>


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
    </div>



  );
}


function Home() {

  

  
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>

        

      </main>

    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>

    </>
  );
}

export default App4Router;
