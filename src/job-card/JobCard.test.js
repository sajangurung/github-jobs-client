import React from 'react';
import ReactDOM from 'react-dom';
import JobCard from './JobCard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<JobCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});
