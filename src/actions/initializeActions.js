"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var AuthorApi = require('../api/authorApi');

var CourseApi = require('../api/courseApi');

var InitializeActions = {    
    initApp: function(){
        Dispatcher.dispatch({
            actionType: ActionTypes.INITIALIZE,
            initialData: {
                authors: AuthorApi.getAllAuthors()
            }
        });
    },
    initCourses: function(){
        Dispatcher.dispatch({
            actionType: ActionTypes.INIT_COURSES,
            initialData: {
                courses: CourseApi.getAllCourses()
            }
        });
    }
};

module.exports = InitializeActions;