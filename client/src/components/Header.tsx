import FormLogo from "../assets/To Do List.png";
const Header = () => {
  return (
    <>
      <header className="bg-accent1 py-4">
        <div className="flex justify-between items-center">
          <img src={FormLogo} className="h-16 w-24 block mx-auto" />
        </div>
      </header>
    </>
  );
};

export default Header;
