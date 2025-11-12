import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';

const PostPage = () => {
  const [postContent, setPostContent] = useState('');
  const { id } = useParams();

  useEffect(() => {
    import(`../posts/${id}.md`)
      .then(res => {
        fetch(res.default)
          .then(response => response.text())
          .then(text => setPostContent(text))
      })
      .catch(err => console.log(err));
  });


  return (
    <div>
      <ReactMarkdown>{postContent}</ReactMarkdown>
    </div>
  );
};

export default PostPage;
