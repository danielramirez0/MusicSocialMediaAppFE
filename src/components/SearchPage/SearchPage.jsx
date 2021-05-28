import NavBar from "../NavBar/NavBar";
const SearchPage = (props) => {
  return (
    <div className="container">
      <div className="pb-5">
        <NavBar userLoggedIn={false} tabActive="2" />
      </div>
      <div className="pt-4">
        <h1 className="">Welcome to the Search Page!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti expedita quos sint odit.
          Atque saepe quod similique aliquid minus distinctio eveniet perspiciatis laborum provident
          veritatis id, soluta quos veniam commodi?
        </p>
      </div>
    </div>
  );
};

export default SearchPage;
