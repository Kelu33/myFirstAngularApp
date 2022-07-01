import { AbstractControl, ValidationErrors } from '@angular/forms';

export function refValidator(control: AbstractControl):  ValidationErrors | null {
 
 const refRegex = RegExp('^[0-9]#.*[A-Z0-9].*$');
 const valid = refRegex.test(control.value);

 const errors = {
   ref: {
     rules: 'not match pattern'
   }
 };

 return !valid ? errors : null;
}
