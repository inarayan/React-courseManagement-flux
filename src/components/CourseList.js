import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function CourseList (props){

    return (
        <table className="table">
            <thead>
            <tr>
                <th>
                    Title
                </th>
                <th>
                    Author Id
                </th>
                <th>
                    Category
                </th>
            </tr>
            </thead>
            <tbody>
                {props.courses.map(course =>{
                    return (
                    <tr key={course.id}>
                        <td><Link to={"/course/"+course.title}>{course.title}</Link></td>
                        <td>{course.authorId}</td>
                        <td>{course.category}</td>
                    </tr>
                );
                })};    
            </tbody>
        </table>
    );
}

export default CourseList;


