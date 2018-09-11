"use strict";

var React = require('react');

var Select = React.createClass({
    PropTypes: {
        items: React.PropTypes.string.isRequired,        
        onChange: React.PropTypes.func.isRequired,
        name: React.PropTypes.string.isRequired,
        label: React.PropTypes.string.isRequired,
        placeholder: React.PropTypes.string,
        value: React.PropTypes.number
    },
    render: function () {
        var wrapperClass = "form-group";
        if(this.props.error && this.props.error.length > 0){
            wrapperClass += " " + 'has-error';
        }

        var createOption = function(author){
            return (
                <option key={author.id} value={author.id}>{author.firstName} {author.lastName}</option>
            );
        };

        return (
            <div className={wrapperClass}>
            <label htmlFor={this.props.name}>{this.props.label}</label>
            <div className="field">

                <select className="form-control" value={this.props.value} onChange={this.props.onChange} name={this.props.name} ref={this.props.name}>
                    <option value="">{this.props.placeholder}</option>
                    {this.props.items.map(createOption, this)}
                </select>
                
                <div className="input">{this.props.error}</div>
            </div>
        </div>
        );
    }
});

module.exports = Select;