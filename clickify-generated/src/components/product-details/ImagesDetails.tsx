import React, { CSSProperties, FC, useState } from "react";
import { Box } from "@mui/material";
import { useWebsiteSettings } from "../../contexts/websiteSettings";

interface ImagesDetailsProps {
  images: string[];
  style?: CSSProperties;
}

const noScrollBarVisible = {
  scrollbarWidth: "none",
  msOverflowStyle: "none",
  "&::-webkit-scrollbar": {
    display: "none",
  },
};

export const ImagesDetails: FC<ImagesDetailsProps> = ({ images, style }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const { websiteSettings } = useWebsiteSettings();

  return (
    <Box style={{ display: "flex", flexDirection: "row", ...style }}>
      <Box
        sx={{
          margin: "20px 0",
          overflowY: "auto",
          width: "30%",
          ...noScrollBarVisible,
        }}
      >
        <Box
          style={{
            height: "max-content",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="product"
              style={{
                width: "100px",
                height: "100px",
                margin: "5px",
                borderRadius: "15px",
                cursor: "pointer",
                border: `1px solid ${selectedImage === image ? "#8a8a8a" : websiteSettings.colors.primary}`,
                alignSelf: "center",
              }}
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </Box>
      </Box>
      <Box style={{ width: "1px", backgroundColor: "#8a8a8a", margin: "20px auto", height: "100%" }} />
      <Box
        style={{
          margin: "20px 0",
          width: "65%",
          height: "100%",
          border: "1px solid #8a8a8a",
          borderRadius: "15px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={selectedImage} alt="product" style={{ width: "100%", height: "100%", borderRadius: "15px" }} />
      </Box>
    </Box>
  );
};
