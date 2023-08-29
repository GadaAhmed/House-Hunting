
import React from "react";
import{Landing, Layout} from '../Pages'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import {
  HOME_PAGE,
  Details_PAGE,
  About_PAGE,
  LOGIN,
  REGISTER,
  SEARCH
} from '../Utilies/pathRoute';

import DetailsHouse from '../Pages/DetailsHouse'
import NotFound from '../Pages/NotFound'
import About from '../Pages/About'
import  Signin   from '../Pages/Signin'
import SignUp from "../Pages/SignUp";
import Search from "../Pages/SearchPage";


function App() {
  return (
    <Layout className="App">

      <Routes>
        
          <Route path={HOME_PAGE} element={<Landing />}/>
          
        
          <Route path={`${Details_PAGE}/:id`} element={<DetailsHouse />} />
          {/* <Route path={'/Search'} element={<Search />} /> */}
          <Route path={About_PAGE} element={<About />} />
          <Route path={LOGIN} element={<Signin />} />
          <Route path={REGISTER} element={<SignUp />} />
          <Route path={SEARCH} element={<Search />} />
          <Route path="*" element={<NotFound />} />     
      </Routes>

        

     


     
    

          
        
        


    
    </Layout>





  );
}

export default App;
