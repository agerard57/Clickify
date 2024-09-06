import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import { useLanguage } from "@/language";
import { Box, Typography } from "@mui/material";
import { ProductCardsList } from "@/components";
import { CustomSelect } from "@/components/filter/CustomSelect";
import { MultiCheckBoxFilter } from "@/components/filter/MultiCheckBoxFilter";
import { TagsFilter } from "@/components/filter/TagsFilter";
import { RangeFilter } from "@/components/filter/RangeFilter";
import { CheckBoxFilter } from "@/components/filter/CheckBoxFilter";

export const ProductsPage: FC = () => {
  const { t } = useTranslation("Products");
  const { language } = useLanguage();
  const sizeBetweenFilters = "30px";

  return (
    <Box style={{ display: "flex", flexDirection: "row", minHeight: "100%" }}>
      <Box style={{ width: "350px" }}>
        <Box style={{ position: "fixed", backgroundColor: "#EFEFEF", minHeight: "100%", width: "350px" }}>
          <Typography style={{ textAlign: "center", fontSize: "24px", padding: "1rem" }}>
            {t("Sort & Filter")}{" "}
          </Typography>
          <CustomSelect
            label={t("Sort by")}
            choices={[t("Price"), t("Rating"), t("Popularity")]}
            defaultChoice={t("Price")}
            style={{ width: "90%", margin: `0 auto ${sizeBetweenFilters}` }}
          />
          <MultiCheckBoxFilter
            label="Availability"
            checkbox={[
              { label: "In Stock", checked: false },
              { label: "Out of Stock", checked: false },
            ]}
            style={{ width: "90%", margin: `0 auto ${sizeBetweenFilters}` }}
          />
          <TagsFilter
            label="Tags"
            tags={[
              { label: "Gaming", checked: false },
              { label: "Chair", checked: false },
              { label: "Cooking", checked: false },
              { label: "Wood", checked: false },
              { label: "Reading", checked: false },
              { label: "Cushions", checked: false },
            ]}
            style={{ width: "90%", margin: `0 auto ${sizeBetweenFilters}` }}
          />
          <RangeFilter
            label="Price Range"
            min={0}
            max={1000}
            defaultMin={0}
            defaultMax={1000}
            style={{ width: "90%", margin: `0 auto ${sizeBetweenFilters}`, paddingRight: "30px" }}
          />
          <MultiCheckBoxFilter
            label="Color"
            checkbox={[
              { label: "Red", checked: false },
              { label: "Blue", checked: false },
              { label: "Green", checked: false },
              { label: "Yellow", checked: false },
              { label: "Black", checked: false },
              { label: "White", checked: false },
            ]}
            style={{ width: "90%", margin: `0 auto ${sizeBetweenFilters}` }}
          />
          <CheckBoxFilter
            label="favorite only"
            defaultChecked={false}
            checkboxColor="yellow"
            style={{ width: "90%", margin: `0 auto ${sizeBetweenFilters}` }}
          />
        </Box>
      </Box>
      <Box style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <ProductCardsList />
      </Box>
    </Box>
  );
};
