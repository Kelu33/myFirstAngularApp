import { AbstractControl, Validators } from '@angular/forms';

export function isRequiredValidator(ctr1Name: string, ctr2Name: string) {  
  return (control: AbstractControl) => {
    const ctr1 = control.get(ctr1Name);
    const ctr2 = control.get(ctr2Name);  
    if ( 
      ctr1 && ctr2
      && ctr1.value === '' && ctr2.value === '' 
     ) {
      return { isRequired: true };
  
    } else {
      return null;
    }
  }
}

export function rangeDateValidator(min: number, max: number) {
  return (control: AbstractControl) => {
    control.addValidators([Validators.required, Validators.min(min), Validators.max(max)]);
  }
}
