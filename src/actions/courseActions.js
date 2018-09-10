"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var CourseApi = require('../api/courseApi');
var ActionTypes = require('../constants/actionTypes');

var AuthorActions = {
    createAuthor: function(course){
        var newCourse = CourseApi.saveCourse(course);

        // dispatches to the stores that an author was created
        Dispatcher.dispatch({
            actionType: ActionTypes.CREATE_COURSE,
            course: newCourse
        });
    },

    updateCourse: function(course){
        var updatedCourse = CourseApi.updateCourse(course);

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