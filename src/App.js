import './App.css';
import MiddleContent from './components/middleContent.js';
import UpperEmail from './components/upperEmail.js';

function App() {
  return (
    <div className='mainContainer'>
      <UpperEmail/>
      <MiddleContent/>
    </div>
  );
}

export default App;
