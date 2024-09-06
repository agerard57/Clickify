import { DateTime } from 'luxon';
import { ObjectId } from 'mongodb';

import { TypeOfDiscounts } from '../../enums';

export interface Photos {
  url: string;
  label: string;
}

export interface Stock {
  storeId: ObjectId;            // Stores.id
  quantity: number;
}

export interface Pricing {
  productionCost?: number;
  currentPrice: number;
  retailPrice?: number;
  typeOfDiscount: TypeOfDiscounts;
  serviceFee: number;
}

export interface Products {
  id: ObjectId;
  sku?: string;
  upc: string;
  name: string;
  brand: string;
  shortDescription: string;
  longDescription: string;
  photos?: Photos[];
  stock: Stock[];
  category?: ObjectId;          // Categories.id
  tags?: ObjectId[];            // Tags.id
  pricing: Pricing;
  createdOn: DateTime;
  modifiedOn: DateTime;
  additionalInfos?: ObjectId[]; // AdditionalInfos.id
}
