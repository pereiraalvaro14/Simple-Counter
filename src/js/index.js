//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SimpleCounter from "./component/SimpleCounter.jsx";

//render your react application
let secondsVariable = 0;
setInterval(() => {
	ReactDOM.render(
		<SimpleCounter seconds={secondsVariable} />,
		document.querySelector("#app")
	);
	secondsVariable = secondsVariable + 1;
}, 1000);
