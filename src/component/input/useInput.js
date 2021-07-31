import { useState } from "react";
const useInput = (input) => {
  const [value, setValue] = useState(input);

  const bind = {
    value,
    onChange: (e) => {
      setValue(e.target.value);
    },
  };

  const reset = () => {
    setValue(input);
  };

  return [value, bind, reset];
};

export default useInput;
