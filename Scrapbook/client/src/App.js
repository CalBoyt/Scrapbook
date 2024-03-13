import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import ApplicationViews from "./components/ApplicationViews";
import { Header } from "./components/Header";
import Authorize from "./components/Authorize";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

	useEffect(() => {
		if (!localStorage.getItem("userProfile")) {
			setIsLoggedIn(false);
		}
	}, [isLoggedIn]);

  return (
    <div className="App">
      <Router>
			<Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
			{isLoggedIn ? (
				<ApplicationViews />
			) : (
				<Authorize setIsLoggedIn={setIsLoggedIn} />
			)}
      </Router>
    </div>
  );
}

export default App;