import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {path: '/', element: <div>This is default page</div>},
    {path: '/home', element: <div>Home Page</div>},
    {path: 'about', element: <div>This is about page</div>}
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
