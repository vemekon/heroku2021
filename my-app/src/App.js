import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { Home } from "./Home";
import { Name } from "./Name";

function App() {
  return (
    <BrowserRouter>
      <Home />
      <Route path="/name" exact component={Name} />
    </BrowserRouter>
  );
}

export default App;
