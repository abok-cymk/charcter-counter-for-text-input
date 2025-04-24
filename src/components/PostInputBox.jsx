import React, { useState } from "react";
import { Send, AlertCircle, OctagonX } from "lucide-react";

const PostInputBox = () => {
  const [text, setText] = useState("");
  return (
    <div className="mx-auto px-8 py-4">
      <textarea
        className="w-full p-3 border border-gray-300 rounded bg-white text-gray-700 focus:border-blue-500 focus:ring-blue-500"
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={5}
      />

      <div
        className={`text-right text-xs mt-2 ${
          text.length > 150 ? "text-red-600" : "text-gray-500"
        }`}
      >
        Characters: {text.length} / 150
      </div>
      <button className="flex items-center gap-2 text-sm text-white bg-blue-600 px-3 py-2 rounded">
        Post <Send className="w-4 h-4" />
      </button>

      {text.length > 150 && (
        <p className="text-red-600 text-xs flex items-center gap-1 mt-1">
          <AlertCircle className="w-4 h-4" />
          Character limit exceeded!
        </p>
      )}

      <PasswordInputBox />
    </div>
  );
};

const PasswordInputBox = () => {
  const [password, setPassword] = useState("");
  return (
    <div className="mt-4">
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-1 border border-gray-300 rounded bg-white text-gray-700 focus:border-blue-500 focus:ring-blue-500"
      />
      {password.length > 0 && password.length < 8 && (
        <p className="text-rose-600 text-sm font-medium flex items-center gap-1 mt-2">
         <OctagonX />
        Password must be 8 character long
        </p>
    )}
    </div>
    
  );
};

export default PostInputBox;
