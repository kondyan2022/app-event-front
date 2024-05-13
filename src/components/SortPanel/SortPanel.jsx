import { Select } from "antd";
import { useState } from "react";
import { SortPanelWrapper } from "./SortPanel.styled";

const sortFields = [
  { value: "title", label: "Title" },
  { value: "event_date", label: "Event date" },
  { value: "organizer", label: "Organizer" },
];

const sortDirection = [
  { value: "asc", label: "asc" },
  { value: "desc", label: "desc" },
];

export function SortPanel({ field = "event_date", direction = "desc", onChange }) {
  const [fieldValue, setFieldValue] = useState(field);
  const [directionValue, setDirectionValue] = useState(direction);

  const handleFieldChange = (value) => {
    setFieldValue(value);
    onChange({ field: value, direction: directionValue });
  };

  const handleDirectionChange = (value) => {
    setDirectionValue(value);
    onChange({ field: fieldValue, direction: value });
  };
  return (
    <SortPanelWrapper>
      <span>Sort by</span>
      <Select
        defaultValue={field}
        style={{
          width: 120,
        }}
        onChange={handleFieldChange}
        options={sortFields}
      />
      <Select
        defaultValue={direction}
        style={{
          width: 120,
        }}
        onChange={handleDirectionChange}
        options={sortDirection}
      />
    </SortPanelWrapper>
  );
}
