import React from 'react';
import About from './About';
import HomePage from './HomePage';
import Header from './common/Header';
import CoursePage from './CoursesPage';
import PageNotFound from './PageNotFound';
import ManageCoursePage from './ManageCoursePage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Route , Switch} from 'react-router-dom';

function App(){

    

    return(
    <div className="containerFluid">
    <ToastContainer autoClose={3000} hideProgressBar/>
    <Header/>
    <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/courses"  component={CoursePage}/> 
        <Route path="/About"  component={About}/>
        <Route path="/course/:slug" component={ManageCoursePage}/>
        <Route path="/course"  component={ManageCoursePage}/>
         <Route component={PageNotFound}/>
    </Switch>
      
    </div>
    );
    
    
    

}

export default App;

