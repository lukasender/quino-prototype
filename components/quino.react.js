/** @jsx React.DOM */

var React = require('react');

var QuinoBar = React.createClass({
    render: function() {
        var input = this.props.input;
        return (
            <div className="row quinobar">
                <form method="post" action="submit">
                    <div className="col-md-11">
                        <input id="quinobar-input"
                               className="shadow"
                               type="text"
                               placeholder="Add a new Quino or search for existing Quinos" />
                    </div>
                    <div className="col-md-1">
                        <input id="quinobar-btn"
                               className="shadow"
                               type="submit"
                               name="quinobar-btn"
                               value="Enter" />
                    </div>
                </form>
            </div>
        )
    }
});

var QuinoDetail = React.createClass({
    render: function() {
        var detail = this.props.detail;
        return (
            <div className="quino shadow">
                <div className="quino-title" ng-click="toggleDetails(detail.nr)">
                    <span className="quino-nr pull-right">&#35;{detail.nr}</span>
                    {detail.title}
                </div>
                <div className="quino-detail">{detail.text}</div>
            </div>
        )
    }
});

var QuinoDetailsList = React.createClass({
    render: function() {
        var details = this.props.details;
        var list = details.map(function(detail) {
            return (
                <QuinoDetail detail={detail} />
            )
        })
        return (
            <div className="detail-list">
                {list}
            </div>
        )
    }
});

var QuinoCategoriesList = React.createClass({
    render: function() {
        var categories = this.props.categories;
        var liElems = categories.map(function(category) {
            var lsStyles = {
                borderLeft: '4px solid ' + category.color
            }
            return (
                <li ng-click="selectList(category.name)"
                    className="shadow"
                    style={lsStyles}>
                    <span className="badge pull-right">{category.items}</span>
                    {category.name}
                </li>
            )
        });
        return (
            <ul id="quino-lists" ng-controller="QuinoListsController">
                {liElems}
            </ul>
        )
    }
});

var classes = {
    QuinoBar: QuinoBar,
    QuinoDetailsList: QuinoDetailsList,
    QuinoCategoriesList: QuinoCategoriesList
};
module.exports = classes;
