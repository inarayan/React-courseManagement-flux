import React from 'react';
import About from './About';
import HomePage from './HomePage';
import Header from './common/Header';
import CoursePage from './CoursesPage';
function App(){

    function getPage(){
        const Route = window.location.pathname;
        if(Route==="/about"){
            return <About/>;
        }
        if(Route==="/courses"){
            return <CoursePage/>;
        }
        return <HomePage />;
    };

    return(
    <div className="containerFluid">
    <Header/>
       { getPage()}
    </div>
    );
    
    
    

}

export default App;

