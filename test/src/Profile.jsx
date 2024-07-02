import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import CV from './CV';

const Profile = () => {
  const { name } = useParams();

  return (
    <div>
      <h1>Hello from profile page!</h1>
      <hr />
      <Link to="/">Back Home</Link>
      <br />
      {name === 'cv' ? <CV /> : 'nothing'}
    </div>
  );
};

export default Profile;
