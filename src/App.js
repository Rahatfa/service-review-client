import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import router from './Router/Routes/Routes';

function App() {
  
  return (
    <div className="App">
      <div className='homepage'>
      
      
      <RouterProvider router={router}></RouterProvider>
      
      </div>
      
    </div>
  );
}

export default App;
