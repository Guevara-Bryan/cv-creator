import React from 'react';
import './styles/App.css';
import { nanoid } from 'nanoid';

import Header from './components/common/Header';
import FormContainer from './components/form/FormContainer';
import PreviewContainer from './components/preview/PreviewContainer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personal: {
        first: {
          label: 'First name',
          value: 'John',
        },
        last: {
          label: 'Last name',
          value: 'Doe',
        },
        phone: {
          label: 'Phone number',
          value: '5097601815',
        },
        email: {
          label: 'Email',
          value: 'johnDoe@mail.com',
        },
        objective: {
          label: 'Objective',
          value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id feugiat arcu. Aliquam nec ipsum ut ante fringilla elementum et ut purus. Duis ultricies dolor a mi eleifend, quis venenatis odio malesuada. Nunc pellentesque eu dui vitae blandit. Aliquam id vulputate sem, a sagittis nisi. In hac habitasse platea dictumst. Fusce tempus libero vitae elit fermentum imperdiet at eget sapien.'
        },
      },
      experience: {
        [nanoid()]: {
          company: 'Big Company One',
          position: 'Big Position One',
          description: 'Praesent a pellentesque est. Sed egestas vitae elit at tincidunt. Nunc neque nunc, auctor porta lectus nec, aliquam auctor massa. Mauris vitae diam aliquam, cursus massa ac, auctor ipsum Duis ultricies dolor a mi eleifend, quis venenatis odio malesuada. Nunc pellentesque eu dui vitae blandit. Aliquam id vulputate sem, a sagittis nisi. In hac habitasse platea dictumst. Fusce tempus libero vitae elit fermentum imperdiet at eget sapien.',
        },
        [nanoid()]: {
          company: 'Big Company Two',
          position: 'Big Position Two',
          description: 'Praesent a pellentesque est. Sed egestas vitae elit at tincidunt. Nunc neque nunc, auctor porta lectus nec, aliquam auctor massa. Mauris vitae diam aliquam, cursus massa ac, auctor ipsum Duis ultricies dolor a mi eleifend, quis venenatis odio malesuada. Nunc pellentesque eu dui vitae blandit. Aliquam id vulputate sem, a sagittis nisi. In hac habitasse platea dictumst. Fusce tempus libero vitae elit fermentum imperdiet at eget sapien.',
        },
        [nanoid()]: {
          company: 'Big Company Three',
          position: 'Big Position Three',
          description: 'Praesent a pellentesque est. Sed egestas vitae elit at tincidunt. Nunc neque nunc, auctor porta lectus nec, aliquam auctor massa. Mauris vitae diam aliquam, cursus massa ac, auctor ipsum Duis ultricies dolor a mi eleifend, quis venenatis odio malesuada. Nunc pellentesque eu dui vitae blandit. Aliquam id vulputate sem, a sagittis nisi. In hac habitasse platea dictumst. Fusce tempus libero vitae elit fermentum imperdiet at eget sapien.',
        }
      },
      education: {
        [nanoid()]: {
          school: 'Great Masters University',
          major: 'Awesome Major',
          from: '2015',
          to: '2017',
        },
        [nanoid()]: {
          school: 'Great Undergrad University',
          major: 'Awesome Major',
          from: '2010',
          to: '2014',
        },
      },
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
        <PreviewContainer sections={this.state}/>
      </div>
    );
  }
}

export default App;
