import './App.scss';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navigation from './components/Navigation/Navigation';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Servers from "./pages/Servers";
import NotFound from "./pages/NotFound";
import { useSelector } from 'react-redux'


function App() {
  const isAuthorized = useSelector(state => state.auth.isAuthorized);

  return (
    <Router>
      <div className="App">
        <header className="App-header"></header>
        <Navigation />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/servers" element={<Servers isAuthorized={isAuthorized} />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
