import React, { CSSProperties, FC, useState } from "react";
import { Box, Checkbox, Chip, FormControlLabel, Typography } from "@mui/material";
import { GridAddIcon, GridCloseIcon } from "@mui/x-data-grid";

interface TagsState {
  label: string;
  checked: boolean;
}

interface TagsFilterProps {
  label: string;
  tags: TagsState[];
  onChange?: (tagsState: TagsState[]) => void;
  style?: CSSProperties;
}

export const TagsFilter: FC<TagsFilterProps> = ({ label, tags, onChange, style }) => {
  const [currentTags, setCurrentTags] = useState(tags);

  const handleTagsChange = (index: number, checked: boolean) => {
    const newTags = [...currentTags];
    newTags[index].checked = checked;
    setCurrentTags(newTags);
    if (onChange) {
      onChange(newTags);
    }
  };

  return (
    <Box style={{ margin: "20px 0", ...style }}>
      <Typography style={{ fontSize: "18px", color: "black", margin: "0.5rem" }}>{label}</Typography>
      {currentTags.map((tag, index) => (
        <Chip
          key={index}
          label={tag.label}
          color={tag.checked ? "primary" : "default"}
          style={{ margin: "5px" }}
          deleteIcon={tag.checked ? <GridCloseIcon /> : <GridAddIcon />}
          onDelete={() => handleTagsChange(index, !tag.checked)}
          onClick={() => handleTagsChange(index, !tag.checked)}
        />
      ))}
    </Box>
  );
};
