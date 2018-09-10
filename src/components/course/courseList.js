"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var AuthorActions = require('../../actions/authorActions');
var toastr = require('toastr');

var CourseList = React.createClass({
    propTypes: {
        courses: React.PropTypes.array.isRequired
    },

    deleteAuthor: function(id, event){
        event.preventDefault();
        AuthorActions.deleteAuthor(id);
        toastr.success('author deleted.');
    },

    render: function () {
        var createAuthorRow = function (course) {
            return (
                <tr key={course.id}>
                    <td><a href="#">Watch</a></td>
                    <td><a href="#">Delete</a></td>
                    <td>{course.title}</td>
                    <td>{course.author}</td>
                    <td>{course.category}</td>
                    <td>{course.length}</td>
                </tr>
            );
        };

        return (
            <div>
                <table className="table">
                    <thead>
                        <th></th>
                        <th></th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Category</th>
                        <th>Length</th>
                    </thead>
                    <tbody>
                        {this.props.courses.map(createAuthorRow, this)}
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports = CourseList;