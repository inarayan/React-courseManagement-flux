import React, { useState } from 'react';
import CourseForm from './CourseForm';
import * as courseApi from '../api/courseApi';
import { toast } from 'react-toastify';

const ManageCoursePage = props =>{
    //handle errors in the form
    const[error, setError] = useState({});

    const[course, setCourse] = useState({
        id:null,
        slug:"",
        title:"",
        authorId:null,
        category:""

    })

    function handleChange({target}){
        const updatedCourse = {...course, [target.name]:target.value};
        setCourse(updatedCourse);
    }

    function handleSubmit(event){
        event.preventDefault();
        //if Form is invalid then return;
        if(!FormIsValid()) {
            return;
        }
        else{
            courseApi.saveCourse(course).then(()=>{
                //it is a way of redirecting based on access to history.
                props.history.push("/courses")
                toast.success("Course added sucessfully");
            });
        }
        
    }

    function FormIsValid(){
        const _error={};

        if(!course.title) _error.title="Title is required input";
        if(!course.authorId) _error.authorId="Author is required";
        if(!course.category) _error.category="category is required";

        setError(_error);
        console.log(Object.keys(_error).length)
        return Object.keys(_error).length === 0;

    }
    return (
        <>
        <h2>ManageCourse</h2>
        <CourseForm 
        error={error}
        course={course} 
        onChange={handleChange} 
        onSubmit={handleSubmit}/>
        </>
    )
}

export default ManageCoursePage;