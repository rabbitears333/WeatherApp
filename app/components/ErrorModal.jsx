var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var ErrorModal= React.createClass({
    componentDidMount: function(){
        var {title, message} = this.props;
        var modal = new Foundation.Reveal($('#error-modal'));
        var modalMarkup= (<div id="error-modal" className="reveal tiny text-center" data-reveal>
            <h4>Error</h4>
            <p>The city was not found.</p>
            <button className="button hollow" data-close>Okay</button>
        </div>);
        var $modal = $(ReactDOMServer.renderToString(modalMarkup));
        $(ReactDOM.findDOMNode(this)).html($modal);
        modal.open();
    },
render:function(){
        return(<div></div>);
    }
});

module.exports= ErrorModal;