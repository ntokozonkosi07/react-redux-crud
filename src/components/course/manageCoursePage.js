"use strict";

var React = require('react');
var Router = require('react-router');
var toastr = require('toastr');
var CourseForm = require('./courseForm');
var AuthorStore = require('../../stores/authorStore');
var CourseStore = require('../../stores/courseStore');
var CourseActions = require('../../actions/courseActions');

var ManageCoursePage = React.createClass({
    mixins: [
        Router.Navigation
    ],

    statics: {
        willTransitionFrom: function(transition, component){
            if(component.state.dirty && !confirm('Leave without saving?')){
                transition.abort();
            }
        }
    },

    getInitialState: function(){
        return {
            authors: [],
            course: { id: '', title: '', watchHref: '', author: { id: '', name: '' }, length: '', category: '' },
            errors: {},
            dirty: false
        };
    },

    componentWillMount: function(){
        var courseId = this.props.params.id; // from the path '/author:id

        if(courseId){
            this.setState({ course: CourseStore.getCourseById(courseId) });
        }

        this.setState({authors: AuthorStore.getAllAuthors()});
    },

    courseFormIsValid: function(){
        var formIsValid = true;
        this.state.errors = {}; //clear previous error

        if(this.state.course.title.length < 3){
            this.state.errors.title = 'Course title must be at least 3 characters.';
            formIsValid = false;
        }

        if(this.state.course.category.length < 3){
            this.state.errors.category = 'Course category must be at least 3 characters.';
            formIsValid = false;
        }

        this.setState({errors: this.state.errors});
        return formIsValid;
    },

    saveCourse: function(event){
        event.preventDefault();

        if(!this.courseFormIsValid()){
            return;
        }

        if(this.state.course.id){
            CourseActions.updateCourse(this.state.course);
        } else {
            CourseActions.createCourse(this.state.course);
        }
        
        this.setState({dirty: false});
        toastr.success('Course saved.');
        this.transitionTo('courses');
    },

    setCourseState: function(event){
        this.setState({dirty: true});

        var field = event.target.name;
        var value = event.target.value;
        this.state.course[field] = value;
        this.setState({course: this.state.course});
    },

    render: function(){
        return (
            <CourseForm 
                authors={this.state.authors}
                course={this.state.course}
                onSave={this.saveCourse}
                onChange={this.setCourseState} 
                errors={this.state.errors} />
        );
    }
});

module.exports = ManageCoursePage;