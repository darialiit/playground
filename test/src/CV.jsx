import { Link } from 'react-router-dom';

function CV() {
  return (
    <div>
      <h1>the CV</h1>
      <p>Great opportunities to send here:</p>
      <button>send</button>
      <p>review contact info</p>
      <Link to="/contact">Contact</Link>
    </div>
  );
}

export default CV;
