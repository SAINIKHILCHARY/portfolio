
import AboutandExperience from "./components/AboutandExperience";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./utils/Layout";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";




const App = () => {
  return (
    <div className="lg:p-36 p-5 lg:pt-10 ">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route element={<AboutandExperience />} index />
            <Route element={<AboutMe />} path="/about-me" />
            <Route element={<Experience />} path="/experience" />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
 

/* import React from "react";
import ReactDOM from "react-dom";
import AboutandExperience from "./components/AboutandExperience";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./utils/Layout";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

connectDB();

// Make sure `App` is declared only once
const App = () => {
  return (
    <div className="lg:p-36 p-5 lg:pt-10 ">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route element={<AboutandExperience />} index />
            <Route element={<AboutMe />} path="/about-me" />
            <Route element={<Experience />} path="/experience" />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById('root'));

 */