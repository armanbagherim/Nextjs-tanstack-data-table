import React, { useState } from "react";

const Filters = ({ columnFilters, setColumnFilters }) => {
  const [taskName, setTaskName] = useState(
    columnFilters.find((f) => f.id === "first_name")?.value || ""
  );

  let timeoutId;

  const onInputChange = (e) => {
    const value = e.target.value;
    setTaskName(value);

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      setColumnFilters((prev) =>
        prev
          .filter((f) => f.id !== "first_name")
          .concat({
            id: "first_name",
            value,
          })
      );
    }, 600);
  };

  return (
    <input
      type="text"
      variant="filled"
      placeholder="Search Name"
      borderRadius={5}
      value={taskName}
      onChange={onInputChange}
      className="border-solid border-gray-400 border p-2 rounded-lg outline-none"
    />
  );
};

export default Filters;
