import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
        <Route path="*" element={<Login />} />
    </Routes>
    </Router>

  );
}

export default App;
