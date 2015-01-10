var JSX = require('node-jsx').install(),
    React = require('react'),
    quinoComponents = require('./components/quino.react.js'),
    QuinoBar = React.createFactory(quinoComponents.QuinoBar),
    QuinoDetailsList = React.createFactory(quinoComponents.QuinoDetailsList),
    QuinoCategoriesList = React.createFactory(quinoComponents.QuinoCategoriesList);

var quinobar = React.renderToString(
    QuinoBar({
        input: 'test'
    })
);
var Index = function(req, res) {
    var details = [
        {
            nr: 1,
            title: 'Test title1',
            text: 'Test text1',
        },
        {
            nr: 2,
            title: 'Test title2',
            text: 'Test text2',
        },
    ];
    var quinoDetailsList = React.renderToString(
        QuinoDetailsList({
            details: details
        })
    );
    var focused = [
        {
            nr: 3,
            title: 'Test title focused1',
            text: 'Test text focused1',
        },
        {
            nr: 4,
            title: 'Test title focused2',
            text: 'Test text focused2',
        },
    ];
    var quinoFocusedList = React.renderToString(
        QuinoDetailsList({
            details: focused
        })
    );

    var categories = [
        {
            id: 0,
            name: 'Awesome Stuff',
            color: '#619ec2',
            items: 1
        },
        {
            id: 1,
            name: 'Freetime',
            color: '#ebeb3b',
            items: 8
        },
        {
            id: 2,
            name: 'Cool places',
            color: '#eb3c56',
            items: 5
        },
    ];
    var quinoCategoriesList = React.renderToString(
        QuinoCategoriesList({
            categories: categories
        })
    );

    // Render our 'index' template
    res.render('quino-app', {
        quinobar: quinobar,
        quinoDetailsList: quinoDetailsList,
        quinoFocusedist: quinoFocusedList,
        quinoCategoriesList: quinoCategoriesList
    });
};

var Help = function(req, res) {
    res.render('help', {
        quinobar: quinobar
    });
};

var Routes = {
    index: Index,
    help: Help
};

module.exports = Routes;
