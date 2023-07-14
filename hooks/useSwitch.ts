import React, { useState } from "react";

const useSwitch = () => {
  const [name, setName] = useState("Industry Experience");
  const [title, setTitle] = useState("");
  const [focusSection, setFocusSection] = useState("");

  return {
    name,
    title,
    focusSection,

    setName,
    setTitle,
    setFocusSection,
  };
};

export default useSwitch;
