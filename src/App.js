import './css/App.css';
import './css/ButtonEffects.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Master from './pages'

function App() {
  return (
    <Router>
      <Master />
    </Router>
  );
}

export default App;
