import FormLogo from "../assets/To Do List.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ username, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-accent1">
      <div className=" flex justify-center flex-col bg-white p-10 rounded-lg shadow-md min-w-full min-h-screen xs:min-h-full xs:min-w-96">
        <img src={FormLogo} className="h-24 w-30 block mx-auto mb-4" />
        <h2 className="text-2xl font-semibold text-center mb-3 text-primary">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="">
          <div className="mb-4">
            <input
              type="text"
              className=" w-full p-2 border rounded border-primary"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              className=" w-full p-2 border rounded border-primary "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>

          <button
            onClick={() => navigate("/home")}
            type="submit"
            className=" w-full overflow-hidden bg-primary text-white p-2 rounded hover:opacity-80 mb-6 text-base xs:text-lg "
          >
            Login
          </button>
        </form>
        <div className="flex flex-col items-center gap-2">
          <a
            href="#"
            className="text-accent2 text-sm hover:opacity-80 xs:text-base"
          >
            Forgot Password?
          </a>
          <p className="text-primary text-xs"> ----------- OR ----------- </p>
          <button
            type="submit"
            className="text-black overflow-hidden w-full bg-secondary p-2 rounded hover:opacity-80 text-sm xs:text-base "
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
