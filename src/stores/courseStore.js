//Event emitter what will allow us to emit event
import { EventEmitter } from 'events';

import Dispatcher from '../appDispatcher';
import actionType from '../actions/actionType';
import { getCourses } from '../api/courseApi';

const CHANGE_EVENT = "change";
let _courses =[];

class CourseStore extends EventEmitter{

    addChangeListener(callback){
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback){
        this.removeListener(CHANGE_EVENT, callback);
    }

    emitChange(){
        this.emit(CHANGE_EVENT);
    }
    getCourses() { 
        return _courses
    }

    getCoursesBySlug(slug){
        return _courses.find((course)=> course.slug===slug);
    }
}




const store = new CourseStore();
Dispatcher.register((action)=>{
    switch(actionType){
        case actionType.CREATE_COURSE:
            _courses.push(action.course);
            //We defenitely need to do this.
            //this will tell component to update the UI.
            store.emit(CHANGE_EVENT);
            break;
         default:
            //nonthing to do   
    }
})
export default store;