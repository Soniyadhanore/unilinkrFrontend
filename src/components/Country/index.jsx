import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
const Country = () => {
  const [selected, setSelected] = useState("");
  return (
    <>
      <ReactFlagsSelect
        selected={selected}
        onSelect={(code) => setSelected(code)}
        className="country-select"
      />
    </>
  );
};
export default Country;
