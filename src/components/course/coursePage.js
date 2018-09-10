"use strict";

var React = require('react');

var CourseList = require('./courseList');
var CourseStore = require('./../../stores/courseStore');

var CoursePage = React.createClass({
    getInitialState: function(){
        return {
            courses: CourseStore.getAllCourses()
        };
    },
    componentWillMount: function(){
        console.log('add listener onChange event');
        CourseStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function(){
        console.log('remove listener onChange event');
        CourseStore.removeChangeListener(this._onChange);
    },

    _onChange: function(){
        this.setState({courses: CourseStore.getAllCourses() });
    },
    render: function(){
        return (
            <div>
                <h1>Courses</h1>
                <CourseList courses={this.state.courses}/>
            </div>
        );
    }
});

module.exports = CoursePage;