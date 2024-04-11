import './App.css';
import ParentComponent from './components/ParentComponent';
import ConditionalP from './components/ConditionalP';
import Welcomemessage from './components/Welcomemessage';
import Proptypes from './components/Proptypes';
import Passfunctions from './components/Passfunctions';

function App() {
  return (
    <div>
      <ParentComponent />
      <ConditionalP/>
      <Welcomemessage/>
      <Proptypes/>
      <Passfunctions/>
    </div>
  );
}

export default App;
