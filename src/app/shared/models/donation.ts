import { CurrencyType } from './../enum/currencyType.enum';
import { EntityType } from '../enum/entityType.enum';

export class Donation {
  entityName: string;
  donationAmount: number;
  entityType: EntityType;
  donationPurpose: string;
  donationConditions: string;
  currencyType: CurrencyType;
  conversionRate: number;
}
