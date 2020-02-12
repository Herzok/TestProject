import React from 'react';
import './App.css';
import FormAddComment from './components/FormAddComment'
import ListComments from './components/ListComments'

function App() {
  return (
         <>
           <FormAddComment/>
           <br/>
           <ListComments/>
         </>
  );
}

export default App;
