import { Input, Select } from "antd";
import { useState } from "react";
import { FindtPanelWrapper } from "./FindPanel.styled";

const findDirection = [
  { value: "fullname", label: "Full name" },
  { value: "email", label: "E-mail" },
];

export function FindPanel({ onChange }) {
  const [searchValue, setSearchValue] = useState("");
  const [directionValue, setDirectionValue] = useState("fullname");

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
    onChange({ field: event.target.value, direction: directionValue });
  };

  const handleDirectionChange = (value) => {
    setDirectionValue(value);
    setSearchValue("");
    onChange({ field: "", direction: directionValue });
  };

  return (
    <FindtPanelWrapper>
      <span>Find by: </span>
      <Select
        defaultValue={"fullname"}
        style={{
          width: 120,
        }}
        onChange={handleDirectionChange}
        options={findDirection}
      />
      <Input
        style={{
          width: 120,
        }}
        placeholder={"Text for search"}
        onChange={handleSearchChange}
        value={searchValue}
      />
    </FindtPanelWrapper>
  );
}
