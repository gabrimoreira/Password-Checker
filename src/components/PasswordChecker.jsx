import React, { useState } from "react";
import PasswordStrength from "./PasswordStrength";

const PasswordChecker = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClearPassword = () => {
    setPassword("");
  };

  return (
    <div className=" items-center justify-center py-40 mt-100 ">
      <div className="bg-slate-500 w-50 px-75 py-30 flex flex-col rounded-2xl">
        <form onSubmit={(e) => e.preventDefault()}>
          <h2 className="p-3 font-mono text-2xl">Enter Your Password</h2>
          <div className="mb-10">
            <input className="p-2 rounded-sm"
              type={showPassword ? "text" : "password"}
              id="name"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </form>
        <div className="py-10 bg-slate-400 flex justify-center gap-3 flex-wrap" >
          <button className="bg-green-400 rounded-md p-2" onClick={handleShowPassword}>
            {showPassword ? "Hide" : "Show"} Password
          </button>
          <button className="bg-green-400 rounded-md p-2" onClick={handleClearPassword}>Clear Password</button>
        </div>
      </div>
      <div className="w-50 ">
        <PasswordStrength password={password} />
      </div>
    </div>
  );
};

export default PasswordChecker;
