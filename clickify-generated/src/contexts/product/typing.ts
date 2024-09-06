// src/constants/types.ts

import { DateTime } from "luxon";

// Définir les constantes pour les statuts et dispositions
export enum Languages {
  EN = "EN",
}

export enum LayoutDispositions {
  LEFT = "LEFT",
  RIGHT = "RIGHT",
}

export enum WebsiteSupportStatuses {
  ONLINE = "ONLINE",
  OFFLINE = "OFFLINE",
}

export enum WebsiteStatuses {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

export enum TypeOfDiscountTypes {
  NONE = "NONE",
  AMOUNT = "AMOUNT",
  PERCENTAGE = "PERCENTAGE",
}

export interface Email {
  confirmed: boolean;
  emailAddress: string;
}

export interface PhoneNumber {
  display: boolean;
  number: string;
}

export interface TermsAndConditions {
  filePath: string;
  lastModified: DateTime;
}

export interface LandingPage {
  text: string;
  imagePath: string;
  layout: LayoutDispositions;
}

export interface Support {
  status: WebsiteSupportStatuses;
  email: Email;
  phoneNumber: PhoneNumber;
}

export interface AboutUs {
  text: string;
  phoneNumber: PhoneNumber;
  emailAddress: Email;
  termsAndConditions: TermsAndConditions;
  photoPath: string;
}

export interface Colors {
  primary: string;
  textColor: string;
}

export interface Pricing {
  productionCost?: number;
  currentPrice: number;
  retailPrice?: number;
  typeOfDiscount: TypeOfDiscountTypes;
  serviceFee: number;
}

export enum Currency {
  EUR = "EUR",
  USD = "USD",
}

export interface Product {
  SKU: string;
  name: string;
  brand: string;
  shortDescription: string;
  fullDescription: string;
  photo: {
    url: string;
    label: string;
  };
  stock: number;
  // category
  // tag
  pricing: Pricing;
  createdAt: Date;
  modifiedAt?: Date;
  // Later favorite will be an array of products ?
  favorite?: boolean;
  currency: Currency;
}
