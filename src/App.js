import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/Router';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {publicRoutes.map((publicRoute, index) => {
          return (
            <Route
              key={index}
              path={publicRoute.path}
              element={
                <publicRoute.Layout>
                  <publicRoute.element />
                </publicRoute.Layout>
              }
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
