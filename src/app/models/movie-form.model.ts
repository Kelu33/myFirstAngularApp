import { FormBuilder } from "@angular/forms";
import { isRequiredValidator, rangeDateValidator } from "../customValidator";

export class MovieForm {
    public group = this.formbuilder.group(
        {
            head: this.formbuilder.group(
                {
                    identifier: [''],
                    title: ['']
                }, 
                { 
                    validators: isRequiredValidator(
                        this.controls.ctr1,
                        this.controls.ctr2
                    ) 
                }      
            ),
            types: [''],
            releaseYear: [
                '',
                rangeDateValidator(
                    this.span.min,
                    this.span.max
                )
            ],
            sheets: ['']
        }
    );

    constructor(
        private formbuilder: FormBuilder,
        public controls: { ctr1: string, ctr2: string},
        public span: { min: number, max: number }
    ) { }
    
}