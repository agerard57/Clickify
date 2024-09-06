// import {
//   Languages,
//   LayoutDispositions,
//   WebsiteSettings,
//   WebsiteStatuses,
//   WebsiteSupportStatuses,
// } from "@clickify/clickify-common";
import { ProductChair } from "@/assets";
import { Product, Currency, TypeOfDiscountTypes } from "../typing";

// TODO Do this data in JSON FILE
export const appProducts: Product[] = [
  {
    SKU: "ikea001",
    name: "HEMNES Desk",
    brand: "IKEA",
    shortDescription: "Compact desk with adjustable height, 120 x 60 cm",
    fullDescription:
      "The HEMNES desk is a compact and functional desk that can be adjusted to your needs. It has a smooth and elegant design that fits well in any room. The desk top is made of laminate and the legs are made of solid beech wood. The desk can be easily assembled and disassembled.",
    pricing: {
      currentPrice: 199.99,
      typeOfDiscount: TypeOfDiscountTypes.NONE,
      serviceFee: 10,
    },
    photo: {
      url: ProductChair,
      label: "Desk",
    },
    favorite: false,
    stock: 10,
    createdAt: new Date("2022-01-01T00:00:00.000Z"),
    currency: Currency.USD,
  },
  {
    SKU: "ikea002",
    name: "LACK Desk",
    brand: "IKEA",
    shortDescription: "Adjustable height desk with storage, 160 x 80 cm",
    fullDescription:
      "The LACK desk is a modern and functional desk that can be adjusted to your needs. It has a sleek and minimalist design that fits well in any room. The desk top is made of laminate and the legs are made of steel. The desk has built-in storage for your office supplies.",
    pricing: {
      currentPrice: 299.99,
      typeOfDiscount: TypeOfDiscountTypes.NONE,
      serviceFee: 10,
    },
    photo: {
      url: ProductChair,
      label: "Desk",
    },
    favorite: false,
    stock: 8,
    createdAt: new Date("2022-01-02T00:00:00.000Z"),
    currency: Currency.USD,
  },
  {
    SKU: "ikea003",
    name: "ALEX Desk",
    brand: "IKEA",
    shortDescription: "Desk with storage, 131 x 60 cm",
    fullDescription:
      "The ALEX desk is a stylish and functional desk that can be adjusted to your needs. It has a sleek and modern design that fits well in any room. The desk top is made of laminate and the legs are made of steel. The desk has built-in storage for your office supplies.",
    pricing: {
      currentPrice: 249.99,
      typeOfDiscount: TypeOfDiscountTypes.NONE,
      serviceFee: 10,
    },
    photo: {
      url: ProductChair,
      label: "Desk",
    },
    favorite: false,
    stock: 5,
    createdAt: new Date("2022-01-03T00:00:00.000Z"),
    currency: Currency.USD,
  },
  {
    SKU: "ikea004",
    name: "BEKANT Desk",
    brand: "IKEA",
    shortDescription: "Desk with adjustable height, 160 x 80 cm",
    fullDescription:
      "The BEKANT desk is a modern and functional desk that can be adjusted to your needs. It has a sleek and minimalist design that fits well in any room. The desk top is made of laminate and the legs are made of steel. The desk can be easily assembled and disassembled.",
    pricing: {
      currentPrice: 349.99,
      typeOfDiscount: TypeOfDiscountTypes.NONE,
      serviceFee: 10,
    },
    photo: {
      url: ProductChair,
      label: "Desk",
    },
    favorite: false,
    stock: 3,
    createdAt: new Date("2022-01-04T00:00:00.000Z"),
    currency: Currency.USD,
  },
  {
    SKU: "ikea005",
    name: "MARKUS Office Chair",
    brand: "IKEA",
    shortDescription: "Ergonomic office chair with adjustable height",
    fullDescription:
      "The MARKUS office chair is an ergonomic and comfortable chair that can be adjusted to your needs. It has a sleek and modern design that fits well in any office. The chair has a mesh backrest and a padded seat for maximum comfort. The chair can be easily assembled and disassembled.",
    pricing: {
      currentPrice: 199.99,
      typeOfDiscount: TypeOfDiscountTypes.NONE,
      serviceFee: 10,
    },
    photo: {
      url: ProductChair,
      label: "Office Chair",
    },
    favorite: false,
    stock: 7,
    createdAt: new Date("2022-01-05T00:00:00.000Z"),
    currency: Currency.USD,
  },
  // 10 more products
  {
    SKU: "ikea006",
    name: "LACK Desk",
    brand: "IKEA",
    shortDescription: "Adjustable height desk with storage, 160 x 80 cm",
    fullDescription:
      "The LACK desk is a modern and functional desk that can be adjusted to your needs. It has a sleek and minimalist design that fits well in any room. The desk top is made of laminate and the legs are made of steel. The desk has built-in storage for your office supplies.",
    pricing: {
      currentPrice: 299.99,
      typeOfDiscount: TypeOfDiscountTypes.NONE,
      serviceFee: 10,
    },
    photo: {
      url: ProductChair,
      label: "Desk",
    },
    favorite: false,
    stock: 8,
    createdAt: new Date("2022-01-02T00:00:00.000Z"),
    currency: Currency.USD,
  },
  {
    SKU: "ikea007",
    name: "ALEX Desk",
    brand: "IKEA",
    shortDescription: "Desk with storage, 131 x 60 cm",
    fullDescription:
      "The ALEX desk is a stylish and functional desk that can be adjusted to your needs. It has a sleek and modern design that fits well in any room. The desk top is made of laminate and the legs are made of steel. The desk has built-in storage for your office supplies.",
    pricing: {
      currentPrice: 249.99,
      typeOfDiscount: TypeOfDiscountTypes.NONE,
      serviceFee: 10,
    },
    photo: {
      url: ProductChair,
      label: "Desk",
    },
    favorite: false,
    stock: 5,
    createdAt: new Date("2022-01-03T00:00:00.000Z"),
    currency: Currency.USD,
  },
  {
    SKU: "ikea008",
    name: "BEKANT Desk",
    brand: "IKEA",
    shortDescription: "Desk with adjustable height, 160 x 80 cm",
    fullDescription:
      "The BEKANT desk is a modern and functional desk that can be adjusted to your needs. It has a sleek and minimalist design that fits well in any room. The desk top is made of laminate and the legs are made of steel. The desk can be easily assembled and disassembled.",
    pricing: {
      currentPrice: 349.99,
      typeOfDiscount: TypeOfDiscountTypes.NONE,
      serviceFee: 10,
    },
    photo: {
      url: ProductChair,
      label: "Desk",
    },
    favorite: false,
    stock: 3,
    createdAt: new Date("2022-01-04T00:00:00.000Z"),
    currency: Currency.USD,
  },
  {
    SKU: "ikea009",
    name: "MARKUS Office Chair",
    brand: "IKEA",
    shortDescription: "Ergonomic office chair with adjustable height",
    fullDescription:
      "The MARKUS office chair is an ergonomic and comfortable chair that can be adjusted to your needs. It has a sleek and modern design that fits well in any office. The chair has a mesh backrest and a padded seat for maximum comfort. The chair can be easily assembled and disassembled.",
    pricing: {
      currentPrice: 199.99,
      typeOfDiscount: TypeOfDiscountTypes.NONE,
      serviceFee: 10,
    },
    photo: {
      url: ProductChair,
      label: "Office Chair",
    },
    favorite: false,
    stock: 7,
    createdAt: new Date("2022-01-05T00:00:00.000Z"),
    currency: Currency.USD,
  },
  {
    SKU: "ikea010",
    name: "LACK Desk",
    brand: "IKEA",
    shortDescription: "Adjustable height desk with storage, 160 x 80 cm",
    fullDescription:
      "The LACK desk is a modern and functional desk that can be adjusted to your needs. It has a sleek and minimalist design that fits well in any room. The desk top is made of laminate and the legs are made of steel. The desk has built-in storage for your office supplies.",
    pricing: {
      currentPrice: 299.99,
      typeOfDiscount: TypeOfDiscountTypes.NONE,
      serviceFee: 10,
    },
    photo: {
      url: ProductChair,
      label: "Desk",
    },
    favorite: false,
    stock: 8,
    createdAt: new Date("2022-01-02T00:00:00.000Z"),
    currency: Currency.USD,
  },
  {
    SKU: "ikea011",
    name: "ALEX Desk",
    brand: "IKEA",
    shortDescription: "Desk with storage, 131 x 60 cm",
    fullDescription:
      "The ALEX desk is a stylish and functional desk that can be adjusted to your needs. It has a sleek and modern design that fits well in any room. The desk top is made of laminate and the legs are made of steel. The desk has built-in storage for your office supplies.",
    pricing: {
      currentPrice: 249.99,
      typeOfDiscount: TypeOfDiscountTypes.NONE,
      serviceFee: 10,
    },
    photo: {
      url: ProductChair,
      label: "Desk",
    },
    favorite: false,
    stock: 5,
    createdAt: new Date("2022-01-03T00:00:00.000Z"),
    currency: Currency.USD,
  },
  {
    SKU: "ikea001",
    name: "HEMNES Desk",
    brand: "IKEA",
    shortDescription: "Compact desk with adjustable height, 120 x 60 cm",
    fullDescription:
      "The HEMNES desk is a compact and functional desk that can be adjusted to your needs. It has a smooth and elegant design that fits well in any room. The desk top is made of laminate and the legs are made of solid beech wood. The desk can be easily assembled and disassembled.",
    pricing: {
      currentPrice: 199.99,
      typeOfDiscount: TypeOfDiscountTypes.NONE,
      serviceFee: 10,
    },
    photo: {
      url: ProductChair,
      label: "Desk",
    },
    favorite: false,
    stock: 10,
    createdAt: new Date("2022-01-01T00:00:00.000Z"),
    currency: Currency.USD,
  },
  {
    SKU: "ikea002",
    name: "LACK Desk",
    brand: "IKEA",
    shortDescription: "Adjustable height desk with storage, 160 x 80 cm",
    fullDescription:
      "The LACK desk is a modern and functional desk that can be adjusted to your needs. It has a sleek and minimalist design that fits well in any room. The desk top is made of laminate and the legs are made of steel. The desk has built-in storage for your office supplies.",
    pricing: {
      currentPrice: 299.99,
      typeOfDiscount: TypeOfDiscountTypes.NONE,
      serviceFee: 10,
    },
    photo: {
      url: ProductChair,
      label: "Desk",
    },
    favorite: false,
    stock: 8,
    createdAt: new Date("2022-01-02T00:00:00.000Z"),
    currency: Currency.USD,
  },
  {
    SKU: "ikea003",
    name: "ALEX Desk",
    brand: "IKEA",
    shortDescription: "Desk with storage, 131 x 60 cm",
    fullDescription:
      "The ALEX desk is a stylish and functional desk that can be adjusted to your needs. It has a sleek and modern design that fits well in any room. The desk top is made of laminate and the legs are made of steel. The desk has built-in storage for your office supplies.",
    pricing: {
      currentPrice: 249.99,
      typeOfDiscount: TypeOfDiscountTypes.NONE,
      serviceFee: 10,
    },
    photo: {
      url: ProductChair,
      label: "Desk",
    },
    favorite: false,
    stock: 5,
    createdAt: new Date("2022-01-03T00:00:00.000Z"),
    currency: Currency.USD,
  },
  {
    SKU: "ikea004",
    name: "BEKANT Desk",
    brand: "IKEA",
    shortDescription: "Desk with adjustable height, 160 x 80 cm",
    fullDescription:
      "The BEKANT desk is a modern and functional desk that can be adjusted to your needs. It has a sleek and minimalist design that fits well in any room. The desk top is made of laminate and the legs are made of steel. The desk can be easily assembled and disassembled.",
    pricing: {
      currentPrice: 349.99,
      typeOfDiscount: TypeOfDiscountTypes.NONE,
      serviceFee: 10,
    },
    photo: {
      url: ProductChair,
      label: "Desk",
    },
    favorite: false,
    stock: 3,
    createdAt: new Date("2022-01-04T00:00:00.000Z"),
    currency: Currency.USD,
  },
  {
    SKU: "ikea005",
    name: "MARKUS Office Chair",
    brand: "IKEA",
    shortDescription: "Ergonomic office chair with adjustable height",
    fullDescription:
      "The MARKUS office chair is an ergonomic and comfortable chair that can be adjusted to your needs. It has a sleek and modern design that fits well in any office. The chair has a mesh backrest and a padded seat for maximum comfort. The chair can be easily assembled and disassembled.",
    pricing: {
      currentPrice: 199.99,
      typeOfDiscount: TypeOfDiscountTypes.NONE,
      serviceFee: 10,
    },
    photo: {
      url: ProductChair,
      label: "Office Chair",
    },
    favorite: false,
    stock: 7,
    createdAt: new Date("2022-01-05T00:00:00.000Z"),
    currency: Currency.USD,
  },
  // 10 more products
  {
    SKU: "ikea006",
    name: "LACK Desk",
    brand: "IKEA",
    shortDescription: "Adjustable height desk with storage, 160 x 80 cm",
    fullDescription:
      "The LACK desk is a modern and functional desk that can be adjusted to your needs. It has a sleek and minimalist design that fits well in any room. The desk top is made of laminate and the legs are made of steel. The desk has built-in storage for your office supplies.",
    pricing: {
      currentPrice: 299.99,
      typeOfDiscount: TypeOfDiscountTypes.NONE,
      serviceFee: 10,
    },
    photo: {
      url: ProductChair,
      label: "Desk",
    },
    favorite: false,
    stock: 8,
    createdAt: new Date("2022-01-02T00:00:00.000Z"),
    currency: Currency.USD,
  },
  {
    SKU: "ikea007",
    name: "ALEX Desk",
    brand: "IKEA",
    shortDescription: "Desk with storage, 131 x 60 cm",
    fullDescription:
      "The ALEX desk is a stylish and functional desk that can be adjusted to your needs. It has a sleek and modern design that fits well in any room. The desk top is made of laminate and the legs are made of steel. The desk has built-in storage for your office supplies.",
    pricing: {
      currentPrice: 249.99,
      typeOfDiscount: TypeOfDiscountTypes.NONE,
      serviceFee: 10,
    },
    photo: {
      url: ProductChair,
      label: "Desk",
    },
    favorite: false,
    stock: 5,
    createdAt: new Date("2022-01-03T00:00:00.000Z"),
    currency: Currency.USD,
  },
  {
    SKU: "ikea008",
    name: "BEKANT Desk",
    brand: "IKEA",
    shortDescription: "Desk with adjustable height, 160 x 80 cm",
    fullDescription:
      "The BEKANT desk is a modern and functional desk that can be adjusted to your needs. It has a sleek and minimalist design that fits well in any room. The desk top is made of laminate and the legs are made of steel. The desk can be easily assembled and disassembled.",
    pricing: {
      currentPrice: 349.99,
      typeOfDiscount: TypeOfDiscountTypes.NONE,
      serviceFee: 10,
    },
    photo: {
      url: ProductChair,
      label: "Desk",
    },
    favorite: false,
    stock: 3,
    createdAt: new Date("2022-01-04T00:00:00.000Z"),
    currency: Currency.USD,
  },
  {
    SKU: "ikea009",
    name: "MARKUS Office Chair",
    brand: "IKEA",
    shortDescription: "Ergonomic office chair with adjustable height",
    fullDescription:
      "The MARKUS office chair is an ergonomic and comfortable chair that can be adjusted to your needs. It has a sleek and modern design that fits well in any office. The chair has a mesh backrest and a padded seat for maximum comfort. The chair can be easily assembled and disassembled.",
    pricing: {
      currentPrice: 199.99,
      typeOfDiscount: TypeOfDiscountTypes.NONE,
      serviceFee: 10,
    },
    photo: {
      url: ProductChair,
      label: "Office Chair",
    },
    favorite: false,
    stock: 7,
    createdAt: new Date("2022-01-05T00:00:00.000Z"),
    currency: Currency.USD,
  },
  {
    SKU: "ikea010",
    name: "LACK Desk",
    brand: "IKEA",
    shortDescription: "Adjustable height desk with storage, 160 x 80 cm",
    fullDescription:
      "The LACK desk is a modern and functional desk that can be adjusted to your needs. It has a sleek and minimalist design that fits well in any room. The desk top is made of laminate and the legs are made of steel. The desk has built-in storage for your office supplies.",
    pricing: {
      currentPrice: 299.99,
      typeOfDiscount: TypeOfDiscountTypes.NONE,
      serviceFee: 10,
    },
    photo: {
      url: ProductChair,
      label: "Desk",
    },
    favorite: false,
    stock: 8,
    createdAt: new Date("2022-01-02T00:00:00.000Z"),
    currency: Currency.USD,
  },
  {
    SKU: "ikea011",
    name: "ALEX Desk",
    brand: "IKEA",
    shortDescription: "Desk with storage, 131 x 60 cm",
    fullDescription:
      "The ALEX desk is a stylish and functional desk that can be adjusted to your needs. It has a sleek and modern design that fits well in any room. The desk top is made of laminate and the legs are made of steel. The desk has built-in storage for your office supplies.",
    pricing: {
      currentPrice: 249.99,
      typeOfDiscount: TypeOfDiscountTypes.NONE,
      serviceFee: 10,
    },
    photo: {
      url: ProductChair,
      label: "Desk",
    },
    favorite: false,
    stock: 5,
    createdAt: new Date("2022-01-03T00:00:00.000Z"),
    currency: Currency.USD,
  },
];
