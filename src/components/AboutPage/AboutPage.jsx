import NavBar from "../NavBar/NavBar";
const AboutPage = (props) => {
  return (
    <div className="container">
      <div className="pb-5">
        <NavBar userLoggedIn={false} tabActive="3" />
      </div>
      <div className="pt-6">
        <h1 className="text-center">About Music with Friends</h1>
        <h3 className="text-center">What it is:</h3>
        <p className="text-center">
          Have you been looking for a place where you could send friend requests to other music
          lovers and then chat about it? If so, we've got you covered. It's a social media site for
          people who like music. Simple, obvious, not unique.
        </p>
        <h5 className="text-center">What it is not:</h5>
        <p className="text-center">A very poor attempt to at cloning another social media site.</p>
        <h3 className="text-center">Developers:</h3>
        <p className="text-center">JR Awesome</p>
        <p className="text-center">T-Dog LeTopDog</p>
        <p className="text-center">Dan the Ram</p>
      </div>
    </div>
  );
};

export default AboutPage;
