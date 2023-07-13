import React, { useState } from "react";

const useSwitch = () => {
  const [name, setName] = useState("Industry Experience");
  const [title, setTitle] = useState("");

  return {
    name,
    title,

    setName,
    setTitle,
  };
};

export default useSwitch;
