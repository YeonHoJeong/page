import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        <li>
          <Link to="/post/hello-world">Hello World</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
