const Header = ({ handleClick, image1, image2, theme }) => {
  return (
    <div className="header">
      <div>
        <h1>Todo</h1>
      </div>

      <div>
        <button onClick={(e) => handleClick(e)}>
          <img src={theme ? image1 : image2} alt="theme" />
        </button>
      </div>
    </div>
  );
};

export default Header;
