import React from 'react';
import Sidebar from './Sidebar/index';
import Footer from './Footer';
import Topbar from './Topbar';
import Main from './Main/index';
import style1 from '../assets/css/app.css';
import style2 from '../assets/css/style.css'

function App() {
  return (
    <div id="wrapper">
      <Sidebar/>

      <div id="content-wrapper" className="d-flex flex-column">

        <div id="content">
          <Topbar/>
          <Main/>
        </div>

        <Footer/>
      </div>
    </div>
  );
}

export default App;
