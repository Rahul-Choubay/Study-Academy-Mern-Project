import './App.css';
import MyRoute from './myrou/MyRoute';
import { BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <MyRoute />
  </BrowserRouter>
  );
}

export default App;
