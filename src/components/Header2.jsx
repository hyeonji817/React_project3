import "./Header2.css";

const Header2 = () => {
  return (
    <div className="Header2">
      <h3>오늘은 😎</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};

export default Header2; 