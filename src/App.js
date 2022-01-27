import "./App.css";
import TopRow from "./components/TopRow";
import BottomRow from "./components/BottomRow";

function App() {
  return (
      <div>
          <div className="container">
            <div className="head">
                Announcements
            </div>
            <TopRow/>
            <BottomRow/>
          </div>
      </div>
  );
}

export default App;
