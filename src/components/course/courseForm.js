"use strict";

var React = require('react');
var Input = require('../common/textInput');
var Select = require('../common/SelectInput');

var CourseForm = React.createClass({
    PropTypes: {
        authors: React.PropTypes.array.isRequired,
        course: React.PropTypes.object.isRequired,
        onSave: React.PropTypes.func.isRequired,
        onChange: React.PropTypes.func.isRequired,
        errors: React.PropTypes.object
    },
    render: function () {
        return (
            <form>
                <h1>Manage Course</h1>

                <Input name="title"
                    label="Course Title"
                    onChange={this.props.onChange}
                    placeholder="Please enter course title"
                    value={this.props.course.title}
                    error={this.props.errors.title} />

                <Select 
                    items={this.props.authors}
                    onChange={this.props.onChange}
                    name="author"
                    label="Author"
                    placeholder="Please select author"
                    value={this.props.course.author.id} />

                <Input name="category"
                    label="Category"
                    onChange={this.props.onChange}
                    placeholder="Please enter course category"
                    value={this.props.course.category}
                    error={this.props.errors.category} />

                <Input name="length"
                    label="Length"
                    onChange={this.props.onChange}
                    placeholder="Please enter course length"
                    value={this.props.course.length}
                    error={this.props.errors.length} />

                <input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave}/>
            </form>
        );
    }
});

module.exports = CourseForm;