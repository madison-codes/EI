import React, { Component } from 'react';

// whatever you pass in from the parent app will be passed into each indiv. component as props
// to call methods use props.insertMethodName (should be after the dot and called if method)
// in this case we only want it to return an element so we will export only the JSX - once you add functionalities to the buttons you will call the methods from here. You may have to change the structure of the component, ln 8.

export default (props) => {
  return(
    <section className='control-container'>
      <button
        className='control-voice'
        onClick={() => console.log('voice')}>
        Voice
      </button>
      <button
        className='control-video'
        onClick={() => console.log('video')}>
        Video
      </button>
    </section>
  )
}
