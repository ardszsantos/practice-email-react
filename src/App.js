import './App.css';
import FooterComponent from './components/footer.js';
import MiddleContent from './components/middleContent.js';
import UpperEmail from './components/upperEmail.js';

function App() {
  return (
    <div className='mainContainer'>
      <UpperEmail/>
      <MiddleContent/>
      <FooterComponent/>
    </div>
  );
}

export default App;
