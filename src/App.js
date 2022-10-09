import "./App.css";
import MainDash from "./components/MainDash/MainDash";
import RightSideBar from "./components/RightSideBar/RightSideBar";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
	return (
		<div className="App">
			<div className="AppGlass">
				<Sidebar />
				<MainDash />
				<RightSideBar />
			</div>
		</div>
	);
}

export default App;
