import { ArrowLeft, Search } from "lucide-react";
import React, { useState } from "react";
import Profile from "./Profile";

const Settings = () => {
  const [isProfileClicked, setIsProfileClicked] = useState(false);
  return (
    <>
      <header className="flex items-center justify-between border border-b-2 border-zinc-700">
        <div className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4 cursor-pointer" />
          <h1 className="text-2xl font-medium">Settings</h1>
        </div>

        <Search className="h-4 w-4 cursor-pointer" />
      </header>

      <main>
        <div>
          <button onClick={() => setIsProfileClicked(!isProfileClicked)} className="border-0">
            <Profile />
          </button>
          {isProfileClicked && (
            <>
            <div className="flex items-center gap-2 mb-2">
                <ArrowLeft className="h-4 w-4 cursor-pointer" />
                <h3>Profile</h3>
            </div>
            <div>
                
            </div>
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default Settings;
