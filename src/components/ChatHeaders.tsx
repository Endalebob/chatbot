import React from "react";

const ChatHeaders = () => {
  return (
    <div className=" w-full flex gap-3 justify-start items-center text-zinc-800">
      <div className="flex flex-col items-start">
        <p className="text-xs">Chat With</p>
        <div className="flex gap-1.5 items-center">
          <p className="w-2 h-2 rounded-full bg-green-500" />
          <p className="font-medium">Agulu</p>
        </div>
      </div>
    </div>
  );
};

export default ChatHeaders;
