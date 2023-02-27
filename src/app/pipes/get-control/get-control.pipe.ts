import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Pipe({
  name: 'getControl'
})
export class GetControlPipe implements PipeTransform {

  transform(form: AbstractControl, formControlName: string): FormControl {
    console.log("this is getcontrol pipe result .....",form.get(`${formControlName}`) as FormControl);
    
    return form.get(`${formControlName}`) as FormControl;
  }

}
