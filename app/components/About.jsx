var React = require('react');

var About = React.createClass({
  render: function () {
    return (
        <div>
      <h1 className="text-center page-title">About</h1>
        <p>The application is an application built with React and invokes the OpenWeatherMap Api.</p>
        <p>Technology Stack</p>
        <ul>
        <li> <a href="https://facebook.github.io/react">React</a>-Front-end JS framework</li>
          <li> <a href="http://foundation.zurb.com/sites.html">Foundations</a>-used for styling and appearances of app.</li>

          <li> <a href="https://webpack.github.io/">Webpack</a>-used for module bundling javascript and json and css.</li>
          <li><a href="http://redux-form.com/6.2.0/">Redux Form</a>-used for state management and validation of form info</li>


        </ul>
          </div>
    )
  }
});

module.exports = About;
