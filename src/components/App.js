import { BrowserRouter as Router } from 'react-router-dom'
import { DataProvider } from "../GlobalState";
import MainRoute from "./routes/MainRoute";

function App() {
  return (
    <DataProvider>
      <Router>
        <div className="App">
          <MainRoute />
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
