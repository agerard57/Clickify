import {
  Languages,
  LayoutDispositions,
  WebsiteSettings,
  WebsiteStatuses,
  WebsiteSupportStatuses,
} from "@clickify/clickify-common";
import { DateTime } from "luxon";

// TODO Do this data in JSON FILE

export const appWebsiteSettings: WebsiteSettings = {
  lang: Languages.EN,
  domainName: "example.com",
  landingPage: {
    text: "Welcome to our website",
    imagePath: "/images/landing.jpg",
    layout: LayoutDispositions.LEFT,
  },
  support: {
    status: WebsiteSupportStatuses.ONLINE,
    email: {
      confirmed: true,
      emailAddress: "support@example.com",
    },
    phoneNumber: {
      display: true,
      number: "+1234567890",
    },
  },
  aboutUs: {
    text: "About us information",
    phoneNumber: {
      display: true,
      number: "+9876543210",
    },
    emailAddress: {
      confirmed: true,
      emailAddress: "info@example.com",
    },
    termsAndConditions: {
      filePath: "/documents/terms.pdf",
      lastModified: DateTime.local(),
    },
    photoPath: "/images/about.jpg",
  },
  fullLogoPath: "/images/logo-full.png",
  smallLogoPath: "/images/logo-small.png",
  colors: {
    primary: "#336699",
    textColor: "#FFFFFF",
  },
  createdOn: DateTime.local(),
  updatedOn: DateTime.local(),
  status: WebsiteStatuses.ACTIVE,
  maintenanceMessage: "We are currently performing maintenance. Please check back later.",
};
