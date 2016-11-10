var React = require('react');
var {Link} = require('react-router');

var Examples = React.createClass({
  render: function () {
    return (<div>
      <h3 className="text-center page-title">Examples </h3>
        <p> Please try the following:</p>
        <ol>
          <li>
            <Link to="/?location=Houston"> Houston, Tx</Link>
          </li>
          <li>
            <Link to="/?location=Dallas"> Dallas, Tx</Link>
          </li>
        </ol>
      </div>
    );
  }
});

module.exports = Examples;
