import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import VerificationPage from './pages/Verification/VerificationPage';
import Home from './pages/Home/Home';
import TicketPage from './pages/TicketPage/TicketPage';
import { Create } from './pages/NFTCreate/Create';
function App() {
	return (
		<Router>
			<Routes>
				<Route path='login' element={<Login />} />
				<Route path='signup' element={<Signup />} />
				<Route path='/verify/:token' element={<VerificationPage />} />
				{/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
				<Route path='*' element={<Home />} />
				<Route path='' element={<Home />} />
				<Route path='/ticket/1' element={<TicketPage />} />
				<Route path='/create-ticket' element={<Create/>}/>
			</Routes>
		</Router>
	);
}

export default App;
