import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./Pages/Home.jsx";
import Tab from "./Tab.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Home/>
		{/* <Tab /> */}
	</StrictMode>,
);
