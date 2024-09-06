import { DateTime } from "luxon";
import { Languages, LayoutDispositions, WebsiteStatuses, WebsiteSupportStatuses } from "../../enums";

export interface LandingPage {
    text?: string;
    imagePath?: string;
    layout: LayoutDispositions;
  }
  
  export interface AboutUs {
    text?: string;
    phoneNumber?: {
      display: boolean;
      number: string;
    };
    emailAddress?: {
      confirmed: boolean;
      emailAddress: string;
    };
    termsAndConditions?: {
      filePath: string;
      lastModified: DateTime;
    };
    photoPath?: string;
  }
  
  export interface Support {
    status: WebsiteSupportStatuses;
    email: {
      confirmed: boolean;
      emailAddress: string;
    };
    phoneNumber: {
      display: boolean;
      number: string;
    };
    photoPath?: string;
  }
  export interface Colors {
    primary: string;
    textColor: string;
  }

export interface WebsiteSettings {
    lang: Languages;
    domainName: string;
    landingPage: LandingPage;
    support: Support;
    aboutUs: AboutUs;
    fullLogoPath: string;
    smallLogoPath: string;
    colors: Colors;
    createdOn: DateTime;
    updatedOn: DateTime;
    status: WebsiteStatuses;
    maintenanceMessage: string;
  }
  