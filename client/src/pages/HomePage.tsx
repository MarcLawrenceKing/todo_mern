import Button from "../components/Button";
import Header from "../components/Header";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="pt-4 px-6">
        <div className="flex flex-row justify-between">
          <p className="text-base">Hello, User!</p>
          <p className="text-base"> Date</p>
        </div>
        <Button
          label="hhi"
          iconName="circle-plus"
          onClick={() => alert("Primary Button Clicked")}
        />
      </div>
    </>
  );
};

export default HomePage;
