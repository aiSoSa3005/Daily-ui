import TypeCard from '../typecard/TypeCard';
import hero from '../../../../../src/assets/hero.png';
import './LoginForm.css';


const LoginForm = () => {
  return (
    <div className="container">
      <div className="form-container">
        <div className="description">
          <h1>Chat to our team</h1>
          <p>
            Need help with something? Want a demo? Get in touch with our friendly
            team and we'll get in touch within 2 hours.
          </p>
        </div>
        <form>
          <div className="input-group">
            <input className="form-input" type="text" name="name" id="name" placeholder="First Name" />
            <input className="form-input" type="text" name="last-name" id="last-name" placeholder="Last Name" />
          </div>
          <div className="input-group single-input">
            <input className="form-input" type="text" name="job-title" id="job-title" placeholder="Job Title" />
          </div>
          <div className="input-group single-input">
            <input className="form-input" type="email" name="work-email" id="work-email" placeholder="Work Email" />
          </div>
          <div className="input-group single-input">
            <input className="form-input" type="tel" name="number" id="number" placeholder="Phone Number" />
          </div>
          <TypeCard type="solo" />
          <TypeCard type="team" />
          <button type="submit" className="submit-btn">Get in touch</button>
        </form>
    </div>
        <div className="hero-image">
          <img src={hero} alt="Hero" className="hero-img" />
        </div>
    </div>
);
}
export default LoginForm;

