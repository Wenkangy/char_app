
import './App.css';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import homePage from './pages/homePage';
import ChatPages from './pages/ChatPages';

function App() {
  return (
    <div className="App">
      <Route path = "/" component = {homePage} exact/>
      <Route path = "/chats" component = {ChatPages}/>
    </div>
  );
}

export default App;
