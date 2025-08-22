import BgImage from "../assets/background.webp";
import Logo from "../assets/logo.png";
import Form from "./form";


const Main = () => {
  return (
    <div
      className="h-full bg-fixed bg-cover bg-center bg-no-repeat opacity-[0.9]  "
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <div className="flex flex-col justify-center items-center">
        <img src={Logo} alt="Logo" className="w-[150px] shadow-xl mt-20" />

        <div className=" bg-white w-full max-w-screen-lg opacity-[0.9]">
            <Form />
        </div>
      </div>
    </div>
  );
};

export default Main;
