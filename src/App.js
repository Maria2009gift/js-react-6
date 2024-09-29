
import './App.css';
import events from './upcoming-events.json'
import { PageBorder } from './componenets/PageBorder/PageBorder.jsx'

function App() {
  return (
    <>
      <PageBorder events={events}/>
    </>
  );
}

export default App;
