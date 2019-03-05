import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
        <div class="jumbotron">
            <h1 class="display-4">React Finance</h1>
            <p class="lead">React Finance uses React, Redux, and IEX Trading's Web API to show you how to develop a React application</p>
            <hr class="my-4" />
            <p>To get started, search for a symbol or company name above.</p>
            <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        </div>
    );
  }
}

export default Home;