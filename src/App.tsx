import './App.scss';
import Home from './components/home/Home';
import Header from './views/Header';
import content from './api/content.json';

function App() {
  const { author, title } = content;
  return (
      <div className="App">
        <Header/>
        <Home author={ author } title={ title } />
      </div>
  );
}
export default App;
