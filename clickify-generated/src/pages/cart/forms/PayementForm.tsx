import React, { CSSProperties, FC, useState } from "react";
import { Box, Button } from "@mui/material";
import { Input } from "@/components";

import { ButtonVariants } from "@/theme";

interface PayementFormInformations {
  cardNumber?: string;
  expirationDate?: string;
  cvv?: string;
  cardHolderName?: string;
}

interface PayementFormProps {
  onSubmit: (datas: PayementFormInformations) => void;
}

const inputStyle: CSSProperties = {
  border: "none",
};

const labelStyle: CSSProperties = {
  color: "black",
  marginBottom: "5px",
};

export const PayementForm: FC<PayementFormProps> = ({ onSubmit }) => {
  const [datas, setDatas] = useState<PayementFormInformations>({});

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
      <Input label="Card Number :" placeholder="Your card number" style={inputStyle} labelStyle={labelStyle} />
      <Box style={{ display: "flex", gap: "20px" }}>
        <Input
          label="Expiration Date :"
          placeholder="Your expiration date"
          style={inputStyle}
          labelStyle={labelStyle}
        />
        <Input label="CVV :" placeholder="Your CVV" style={inputStyle} labelStyle={labelStyle} />
      </Box>
      <Input
        label="Card Holder Name :"
        placeholder="Your card holder name"
        style={inputStyle}
        labelStyle={labelStyle}
      />
    </Box>
  );
};
