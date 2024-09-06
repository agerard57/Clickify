import React, { FC, useState } from "react";
import {
  Button,
  Divider,
  Typography,
  TextField,
  Grid,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { faExpand } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateTime } from "luxon";
import {
  LayoutDispositions,
  WebsiteStatuses,
  WebsiteSupportStatuses,
  Languages,
  WebsiteSettings,
  PlanTypes,
} from "@clickify/clickify-common";
import { ButtonVariants, TypographyVariants } from "@/theme";
import { HighlightText } from "@/core";
import { SuccessImage } from "./assets";

const initialFormData: WebsiteSettings = {
  lang: Languages.EN,
  domainName: "",
  fullLogoPath: "",
  smallLogoPath: "",
  landingPage: {
    text: "",
    imagePath: "",
    layout: LayoutDispositions.LEFT,
  },
  support: {
    status: WebsiteSupportStatuses.ONLINE,
    email: { confirmed: false, emailAddress: "" },
    phoneNumber: { display: false, number: "" },
    photoPath: "",
  },
  aboutUs: {
    text: "Contact us here",
    phoneNumber: { display: false, number: "" },
    emailAddress: { confirmed: false, emailAddress: "contact@clickify.dev" },
    termsAndConditions: { filePath: "", lastModified: DateTime.now() },
    photoPath: "",
  },
  colors: { primary: "#FF5733", textColor: "#333333" },
  status: WebsiteStatuses.INACTIVE,
  maintenanceMessage: "We'll be in maintenance for the time being.",
  createdOn: DateTime.now(),
  updatedOn: DateTime.now(),
};

export const SetupPage: FC = () => {
  const { t } = useTranslation("SetupPage");

  const [formData, setFormData] = useState<WebsiteSettings>(initialFormData);

  const plan = (new URLSearchParams(window.location.search).get("plan") || PlanTypes.BASIC) as
    | PlanTypes.BASIC
    | PlanTypes.CLICKIFY
    | PlanTypes.PREMIUM;

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    const [section, field] = name.split(".");

    if (field) {
      setFormData((prevData) => ({
        ...prevData,
        [section]: {
          ...(prevData[section as keyof WebsiteSettings] as object),
          [field]: value,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name as keyof WebsiteSettings]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https:fykcsqymh3kfmau4pydd4ycpgy0aojve.lambda-url.eu-west-1.on.aws/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ websiteSettings: formData }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const capitalize = (s: string | any[]) => (s && s[0].toUpperCase() + s.slice(1)) || "";

  return (
    <div style={{ margin: "100px 40px", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <img src={SuccessImage} style={{ height: 150, marginBottom: 30 }} />
      <Typography style={{ marginBottom: 20 }} variant={TypographyVariants.TITLE}>
        {t("title")}
      </Typography>
      <HighlightText textVariant={TypographyVariants.SUBTITLE} text={t("subTitle1", { plan: plan.toUpperCase() })} />
      <Typography variant={TypographyVariants.SUBTITLE}>{t("subTitle2")}</Typography>
      <Divider style={{ marginTop: 40, marginBottom: 40 }} />
      <form onSubmit={handleSubmit} style={{ padding: "0 100px" }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Accordion>
              <AccordionSummary expandIcon={<FontAwesomeIcon icon={faExpand} />}>
                <Typography>Branding</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <TextField
                  name="fullLogoPath"
                  label="Full Logo Path"
                  value={formData.fullLogoPath}
                  onChange={handleChange}
                  fullWidth
                  style={{ marginTop: "8px" }}
                />
                {formData.fullLogoPath && (
                  <img
                    src={formData.fullLogoPath}
                    alt="Full Logo Preview"
                    style={{ maxWidth: "200px", marginTop: "10px" }}
                  />
                )}
                <TextField
                  name="smallLogoPath"
                  label="Small Logo Path"
                  value={formData.smallLogoPath}
                  onChange={handleChange}
                  fullWidth
                  style={{ marginTop: "8px" }}
                />
                {formData.smallLogoPath && (
                  <img
                    src={formData.smallLogoPath}
                    alt="Small Logo Preview"
                    style={{ maxWidth: "200px", marginTop: "10px" }}
                  />
                )}
              </AccordionDetails>
            </Accordion>
          </Grid>

          {/* Landing Page Section */}
          <Grid item xs={12}>
            <Accordion>
              <AccordionSummary expandIcon={<FontAwesomeIcon icon={faExpand} />}>
                <Typography>Landing Page</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <TextField
                  name="landingPage.text"
                  label="Landing Page Text"
                  value={formData.landingPage.text}
                  onChange={handleChange}
                  fullWidth
                />
                <TextField
                  name="landingPage.imagePath"
                  label="Landing Page Image Path"
                  value={formData.landingPage.imagePath}
                  onChange={handleChange}
                  fullWidth
                  style={{ marginTop: "8px" }}
                />
                <InputLabel>Layout</InputLabel>
                <Select name="landingPage.layout" value={formData.landingPage.layout} onChange={handleChange} fullWidth>
                  {Object.values([LayoutDispositions.LEFT, LayoutDispositions.CENTERED, LayoutDispositions.RIGHT]).map(
                    (layout) => (
                      <MenuItem key={layout} value={layout}>
                        {capitalize(layout)}
                      </MenuItem>
                    ),
                  )}
                </Select>
              </AccordionDetails>
            </Accordion>
          </Grid>

          {/* Colors Section */}
          <Grid item xs={12}>
            <Accordion>
              <AccordionSummary expandIcon={<FontAwesomeIcon icon={faExpand} />}>
                <Typography>Colors</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <TextField
                  type="color"
                  name="colors.primary"
                  label="Primary Color"
                  value={formData.colors.primary}
                  onChange={handleChange}
                  fullWidth
                />
                <TextField
                  type="color"
                  name="colors.textColor"
                  label="Text Color"
                  value={formData.colors.textColor}
                  onChange={handleChange}
                  fullWidth
                  style={{ marginTop: "8px" }}
                />
              </AccordionDetails>
            </Accordion>
          </Grid>

          {/* Status Section */}
          <Grid item xs={12}>
            <Accordion>
              <AccordionSummary expandIcon={<FontAwesomeIcon icon={faExpand} />}>
                <Typography>Website Status</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <InputLabel>Status</InputLabel>
                <Select name="status" value={formData.status} onChange={handleChange} fullWidth>
                  {Object.values([WebsiteStatuses.ACTIVE, WebsiteStatuses.MAINTENANCE, WebsiteStatuses.INACTIVE]).map(
                    (status) => (
                      <MenuItem key={status} value={status}>
                        {capitalize(status)}
                      </MenuItem>
                    ),
                  )}
                </Select>
                <TextField
                  name="maintenanceMessage"
                  label="Maintenance Message"
                  value={formData.maintenanceMessage}
                  onChange={handleChange}
                  fullWidth
                  style={{ marginTop: "8px" }}
                />
              </AccordionDetails>
            </Accordion>
          </Grid>

          {/* Submit Button */}
          <Grid item xs={12}>
            <Button variant={ButtonVariants.PRIMARY} color="primary" type="submit" fullWidth>
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};
