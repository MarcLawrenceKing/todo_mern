import Button from "../components/Button";
import Header from "../components/Header";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col gap-5 pt-4 px-6 ">
        <div className="flex flex-row justify-between">
          <p className="text-base">Hello, User!</p>
          <p className="text-base"> Date</p>
        </div>
        <div className="flex justify-center ">
          <Button
            label="Add To-Do"
            iconName="circle-plus"
            onClick={() => alert("Primary Button Clicked")}
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
