
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Homepage } from './views/Homepage';
import { Game } from './views/Game';
import { FERoutes } from './models/enum';
import { CharacterCreation } from './views/CharacterCreation';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={FERoutes.Homepage} element={<Homepage />} />
          <Route path={FERoutes.Game} element={<Game />} />
          <Route path={FERoutes.CharacterCreation} element={<CharacterCreation />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
