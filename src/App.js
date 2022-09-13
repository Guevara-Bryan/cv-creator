import { useState } from 'react';
import './styles/App.css';
import { nanoid } from 'nanoid';

import Header from './components/common/Header';
import FormContainer from './components/form/FormContainer';
import PreviewContainer from './components/preview/PreviewContainer';

function App(props) {
  const [personal, setPersonal] = useState({
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
      value:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id feugiat arcu. Aliquam nec ipsum ut ante fringilla elementum et ut purus. Duis ultricies dolor a mi eleifend, quis venenatis odio malesuada. Nunc pellentesque eu dui vitae blandit. Aliquam id vulputate sem, a sagittis nisi. In hac habitasse platea dictumst. Fusce tempus libero vitae elit fermentum imperdiet at eget sapien.',
    },
  });
  const [experience, setExperience] = useState({
    [nanoid()]: {
      company: 'Big Company One',
      position: 'Big Position One',
      description:
        'Praesent a pellentesque est. Sed egestas vitae elit at tincidunt. Nunc neque nunc, auctor porta lectus nec, aliquam auctor massa. Mauris vitae diam aliquam, cursus massa ac, auctor ipsum Duis ultricies dolor a mi eleifend, quis venenatis odio malesuada. Nunc pellentesque eu dui vitae blandit. Aliquam id vulputate sem, a sagittis nisi. In hac habitasse platea dictumst. Fusce tempus libero vitae elit fermentum imperdiet at eget sapien.',
    },
    [nanoid()]: {
      company: 'Big Company Two',
      position: 'Big Position Two',
      description:
        'Praesent a pellentesque est. Sed egestas vitae elit at tincidunt. Nunc neque nunc, auctor porta lectus nec, aliquam auctor massa. Mauris vitae diam aliquam, cursus massa ac, auctor ipsum Duis ultricies dolor a mi eleifend, quis venenatis odio malesuada. Nunc pellentesque eu dui vitae blandit. Aliquam id vulputate sem, a sagittis nisi. In hac habitasse platea dictumst. Fusce tempus libero vitae elit fermentum imperdiet at eget sapien.',
    },
    [nanoid()]: {
      company: 'Big Company Three',
      position: 'Big Position Three',
      description:
        'Praesent a pellentesque est. Sed egestas vitae elit at tincidunt. Nunc neque nunc, auctor porta lectus nec, aliquam auctor massa. Mauris vitae diam aliquam, cursus massa ac, auctor ipsum Duis ultricies dolor a mi eleifend, quis venenatis odio malesuada. Nunc pellentesque eu dui vitae blandit. Aliquam id vulputate sem, a sagittis nisi. In hac habitasse platea dictumst. Fusce tempus libero vitae elit fermentum imperdiet at eget sapien.',
    },
  });
  const [education, setEducation] = useState({
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
  });

  function updatePersonal(selector, value) {
    setPersonal((prev) => {
      const { ...copy } = prev;
      copy[selector].value = value;
      return copy;
    });
  }

  // If id does not exists it adds a new empty experience to the state.
  function updateExperience(id, selector, value) {
    setExperience((prev) => {
      const { ...copy } = prev;
      if (!copy.hasOwnProperty(id)) {
        copy[id] = {
          company: '',
          position: '',
          description: '',
        };
      } else {
        copy[id][selector] = value;
      }
      return copy;
    });
  }

  function deleteExperience(id) {
    setExperience((prev) => {
      const { ...copy } = prev;
      delete copy[id];
      return copy;
    });
  }

  // If id does not exists it adds a new empty education to the state.
  function updateEducation(id, selector, value) {
    setEducation((prev) => {
      const { ...copy } = prev;
      if (!copy.hasOwnProperty(id)) {
        copy[id] = {
          school: '',
          major: '',
          from: '',
          to: '',
        };
      } else {
        copy[id][selector] = value;
      }
      return copy;
    });
  }

  function deleteEducation(id) {
    setEducation((prev) => {
      const { ...copy } = prev;
      delete copy[id];
      return copy;
    });
  }

  return (
    <div className="main">
      <Header />
      <FormContainer
        sections={{ personal, experience, education }}
        updater={{
          personal: updatePersonal,
          experience: updateExperience,
          deleteExperience: deleteExperience,
          education: updateEducation,
          deleteEducation: deleteEducation,
        }}
      />
      <PreviewContainer sections={{ personal, experience, education }} />
    </div>
  );
}

export default App;
