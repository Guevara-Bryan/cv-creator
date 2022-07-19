import React from 'react';
import './styles/App.css';

import Header from './components/common/Header';
import Footer from './components/common/Footer';
import FormContainer from './components/form/FormContainer';
import PreviewContainer from './components/preview/PreviewContainer';

class App extends React.Component{
  render(){
    return <div>
      <Header />
      <FormContainer />
      <PreviewContainer />
      <Footer />
    </div>
  }
}

export default App;
