import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div>
      <h1>Welcome to the Contact page</h1>
      <p>Here you can find the contact information</p>
      <h2>Navigation</h2>
      <Link to="/">Home page</Link>
      <br />
      <Link to="/profile">Profile page</Link>
    </div>
  );
}

export default Contact;
