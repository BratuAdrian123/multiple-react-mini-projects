import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div>
      <h1>NotFound page</h1>
      <button>
        <Link to="/">Return to Home page</Link>
      </button>
    </div>
  );
}
export default NotFound;
