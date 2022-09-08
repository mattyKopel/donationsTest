import { textConfig } from './../config/text-config';
import { AbstractControl, ValidationErrors, Validators } from '@angular/forms';
import { get } from 'lodash-es';


export const Required = (control: AbstractControl) => {
  if (Validators.required(control)) {
    return { required: textConfig.REQUIRED_FIELD };
  }

  return null;
};

export const IsNumber = (control: AbstractControl): ValidationErrors | null => {
  const value = get(control, 'value') || '';

  if (!/^[0-9]+$/.test(value) ) return { isNumber: textConfig.NUMBER_FIELD };

  return null;
};
