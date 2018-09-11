"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var CourseApi = require('../api/courseApi');
var ActionTypes = require('../constants/actionTypes');
var AuthorStore = require('../stores/authorStore');

var AuthorActions = {
    createCourse: function(course){
        var author = AuthorStore.getAuthorById(course.author);
        course.author = {  
            id: author.id,
            name: author.firstName+ ' ' + author.lastName
        };
        var newCourse = CourseApi.saveCourse(course);

        // dispatches to the stores that an author was created
        Dispatcher.dispatch({
            actionType: ActionTypes.CREATE_COURSE,
            course: newCourse
        });
    },

    updateCourse: function(course){
        var author = AuthorStore.getAuthorById(course.author);
        course.author = {  
            id: author.id,
            name: author.firstName+ ' ' + author.lastName
        };
        var updatedCourse = CourseApi.saveCourse(course);

        // dispatches to the stores that an author was updated
        Dispatcher.dispatch({
            actionType: ActionTypes.UPDATE_COURSE,
            course: updatedCourse
        });
    },

    deleteCourse: function(id){
        CourseApi.deleteCourse(id);

        // dispatches to the stores that an author was updated
        Dispatcher.dispatch({
            actionType: ActionTypes.DELETE_COURSE,
            course: {id: id}
        });
    }
};

module.exports = AuthorActions;