import React from 'react';
import ReactDOM from 'react-dom';
import JobCardList from './JobCardList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<JobCardList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
