import Card from "../card/Card";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <h1 className="hero__title">Contact our friendly team</h1>
        <p className="hero__description">Let us know how we can help</p>
      </div>
      <div className="cards">
        <Card
          title="Chat to sales"
          description="Speak to our friendly team"
          email="sales@untitled.ui.com"
        />
        <Card
          title="Chat to support"
          description=" We are here to help"
          email="support>untitled@gui.com"
        />
        <Card
          title="Chat to sales"
          description="Speak to our friendly team"
          email="sales@untitled.ui.com"
        />
        <Card
          title="Chat to sales"
          description="Speak to our friendly team"
          email="sales@untitled.ui.com"
        />
      </div>
    </>
  );
};

export default Hero;
