var React = require('react');

var WeatherMessage = React.createClass({
  render: function () {
    var {temp, location} = this.props;

    return (
      <h3 className="text-center">It is {temp} K in {location}.</h3>
    )
  }
});

module.exports = WeatherMessage;
