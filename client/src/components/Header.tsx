import FormLogo from "../assets/To Do List.png";
const Header = () => {
  return (
    <>
      <header className="bg-white shadow">
        <div className="flex justify-between items-center py-5 ">
          <img src={FormLogo} className="h-16 w-24 block mx-auto" />
        </div>
      </header>
    </>
  );
};

export default Header;
