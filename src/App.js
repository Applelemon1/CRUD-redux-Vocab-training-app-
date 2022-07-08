import React, { Component } from 'react'
import PostForm from './PostForm'
import AllPost from './AllPost'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navbar">
          <h2 className="center">Vocalbulary Trainning</h2>
        </div>
        <div className='vocab'>
        <PostForm />
        <AllPost />
        </div>
      </div>
    );
  }
}

export default App;