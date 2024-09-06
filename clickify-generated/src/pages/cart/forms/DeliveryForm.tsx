import React, { CSSProperties, FC, useState } from "react";
import { Box, Button } from "@mui/material";
import { Input } from "@/components";

import { ButtonVariants } from "@/theme";

interface DeliveryFormInformations {
  residentName?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  ZIP?: string;
}

interface DeliveryFormProps {
  onSubmit: (datas: DeliveryFormInformations) => void;
}

const inputStyle: CSSProperties = {
  border: "none",
};

const labelStyle: CSSProperties = {
  color: "black",
  marginBottom: "5px",
};

export const DeliveryForm: FC<DeliveryFormProps> = ({ onSubmit }) => {
  const [datas, setDatas] = useState<DeliveryFormInformations>({});

  function handleSubmit() {
    // TODO: implement form validation
    onSubmit(datas);
  }

  return (
    <Box style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <Button
        variant={ButtonVariants.PRIMARY}
        type="submit"
        style={{ width: "75%", margin: "1rem auto", display: "block" }}
        onClick={handleSubmit}
      >
        Save
      </Button>
      <Input label="Resident Name :" placeholder="First and Last Name" style={inputStyle} labelStyle={labelStyle} />
      <Input label="Address :" placeholder="Your address" style={inputStyle} labelStyle={labelStyle} />
      <Input label="City :" placeholder="Your city" style={inputStyle} labelStyle={labelStyle} />
      <Input label="State :" placeholder="Your state" style={inputStyle} labelStyle={labelStyle} />
      <Input label="Country :" placeholder="Your country" style={inputStyle} labelStyle={labelStyle} />
      <Input label="ZIP :" placeholder="Your ZIP" style={inputStyle} labelStyle={labelStyle} />
    </Box>
  );
};
