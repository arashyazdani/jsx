// Import the Reactand ReactDom libraries
import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from '@faker-js/faker';
import ApprovalCard from './ApprovalCard';
import 'fomantic-ui/dist/semantic.min.css';

if (module.hot) {
  module.hot.accept();
}

// Create a react component
const App = () => {
  return (
    <div className='ui container comments'>
      <ApprovalCard>
        <CommentDetail
          author='Arash'
          timeAgo='Today at 4:45PM'
          content='NIce blog post'
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      
      <CommentDetail
        author='Jane'
        timeAgo='Today at 2:00AM'
        content='I like the subject'
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author='Sam'
        timeAgo='Yesterday at 5:00PM'
        content='I like the writhing'
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

// Take the React component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
