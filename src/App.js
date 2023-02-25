import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Verify from "./pages/verify-success/Verify";
import Home from "./pages/Home/Home";
import TicketPage from "./pages/TicketPage/TicketPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="/activate/:uid/:token" element = {<Verify/>}/>
        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
        <Route path="*" element={<Home />} />
        <Route path="" element = {<Home/>}/>
        <Route path="/ticket/1" element ={<TicketPage/>}/>
    </Routes>
    </Router>

  );
}

export default App;
