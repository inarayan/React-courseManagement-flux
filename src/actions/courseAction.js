import dispatcher from '../appDispatcher';
import * as courseApi from '../api/courseApi';
import * as courseActionType from "./actionType";

export function saveCourse(course){

    courseApi.saveCourse(course).then((savedCourse)=>{
        //GO tell all the course that the course has been created
        dispatcher.dispatch({
            actionType:courseActionType.CREATE_COURSE,
            course:savedCourse
        });
    });
}