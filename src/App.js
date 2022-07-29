import React from 'react';
import './styles/App.css';

import Header from './components/common/Header';
import Footer from './components/common/Footer';
import FormContainer from './components/form/FormContainer';
import PreviewContainer from './components/preview/PreviewContainer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personal: {
        first: {
          label: 'First name',
          value: '',
        },
        last: {
          label: 'Last name',
          value: '',
        },
        phone: {
          label: 'Phone number',
          value: '',
        },
        email: {
          label: 'Email',
          value: '',
        },
      },
      experience: [],
      education: [],
    };
  }

  updateState(label, value) {
    const tp = { [label]: value };
    this.setState(tp);
  }

  render() {
    return (
      <div className="main">
        <Header />
        <FormContainer
          sections={this.state}
          updater={this.updateState.bind(this)}
        />
        <PreviewContainer sections={this.state} />
        <Footer />
      </div>
    );
  }
}

export default App;
