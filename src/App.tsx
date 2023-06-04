import { BrowserRouter, Route, Routes } from 'react-router-dom';
import s from './App.module.scss';
import Header from './component/Header/Header';
import Income from './component/Income/Income';
import FirstPage from './component/FirstPage/FirstPage';

function App() {

  return (
    <BrowserRouter>
      <div className={s.mainBox}>
        <div className={s.box}>
          <div className={s.headerBox}>
            <Header />
          </div>
          <div className={s.contentBox}>
            <Routes>
              <Route path='/navigator' Component={Income} />
              <Route path='/ListPage' Component={FirstPage} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
