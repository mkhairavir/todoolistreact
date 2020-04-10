import React from 'react';
import logo from './logo.svg';
import './App.css';
import FunctionBase from './component/FunctionBase';
import Navigasi from './component/Navigasi';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './component/Footer';
import './App.scss';
import Leyout from './component/Leyout';
import ClassBase from './component/ClassBase'


function App() {
  return (
    <div> 
        <div>
             <Navigasi />
             {/* <Switch> */}
               {/* <Route path="/"/> */}
              <FunctionBase />
              {/* <ClassBase /> */}
            {/* </Switch> */}
            <Footer />
        </div>
         
    </div>
  );
}

export default App;
