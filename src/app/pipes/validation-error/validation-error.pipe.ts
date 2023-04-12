
import { FormControl } from '@angular/forms';
import { PATTERN_ERRORS } from 'src/app/constant/errors';
import { VALIDATION_MESSAGES } from 'src/app/constant/mesages';
import { Pipe, PipeTransform } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Regex } from 'src/app/constant/regex';

@Pipe({
  name: 'validationError',
  pure:false
})
export class ValidationErrorPipe implements PipeTransform {

  // transform(control: FormControl, name:string): any {

  //   console.log("this is validation error pipe console....",control);
    
  //   return control && control.errors ? 
  //   this.getValidationError(control,name): '';
  // }

  // // getValidationError(control:FormControl,name:string):any{
  // //   if(control.hasError('required')){
  // //     return `${name} is required`;
  // //   }
  // //   if(control.hasError('pattern')){
  // //     return "pattern";
  // //   }
  // //   if(control.hasError('minlength')){
  // //     return `${name} must be at least ${control.errors?.minlength}`
  // //   }
  // //   if(control.hasError('email')){
  // //     return `${name} is invalid.`
  // //   }

  // // }
  // getValidationError(control: FormControl, name:string) {
  //   if (control.hasError("required")) {
  //     return `${(name)} is required`;
  //   }
  //   if (control.hasError("pattern")) {
  //     let pattern = control?.errors?.pattern.requiredPattern;

  //     return PATTERN_ERRORS(pattern, name);
  //   }
  //   if (control.hasError("minlength")) {
  //     return `${(name)} must be at least ${
  //       control?.errors?.minlength.requiredLength
  //     } characters long`;
  //   }
  //   if (control.hasError("minMatch")) {
  //     return `${(name)} must be at least ${
  //       control.errors?.minMatch.requiredLength
  //     } digit long`;
  //   }
  //   if (control.hasError("min")) {
  //     return `${(name)} must be at least ${control?.errors?.min.min} `;
  //   }
  //   if (control.hasError("maxlength")) {
  //     return `${(name)} can not be more than ${
  //       control.errors?.maxlength.requiredLength
  //     } characters long`;
  //   }
  //   if (control.hasError("maxMatch")) {
  //     return `${(name)} can not be more than ${
  //       control.errors?.maxMatch.requiredLength
  //     } digit long`;
  //   }
  //   if (control.hasError("max")) {
  //     return `${(name)} can not be more than ${
  //       control.errors?.max.max
  //     } `;   

  //   }
  //   if (control.hasError("maxError")) {
  //     return `Maximum ${(
  //       name
  //     )} can not be less than minimum ${(name)}`;
  //   }
    
  // }

  transform(form: FormGroup, control: string, label: string): string {
    
    if (form.get(control)?.touched || form.get(control)?.invalid) {
      
      const errors = form.get(control)?.errors;
      // console.log(errors,"12");      
      
      if (errors?.hasOwnProperty("required")) {
        return `* ${label} is required`;
      }
      else if (errors?.hasOwnProperty("minlength")) {
        return `* Minimum ${errors.minlength.requiredLength} characters required`;
      }
      else if (errors?.hasOwnProperty("maxlength")) {
        return `* Maximum ${errors.maxlength.requiredLength} characters required`;
      }
      else if (errors?.hasOwnProperty("min")) {
        return `* ${label} should be greater than ${errors.min.min}`
      }
      else if (errors?.hasOwnProperty("max")) {
        return `* ${label} should be less than ${errors.max.max}`
      }
      else if (errors?.hasOwnProperty("pattern")) {

        
        if (
          control === "password" ||
          control === "confirmPassword" ||
          control === "oldPassword"
          ) {
            return `* One uppercase alphabet,one lowercase alphabet,one number,one special character is required`;
          }
          else {
            let pattern = errors.pattern.requiredPattern;
            return this.PATTERN_ERRORS(pattern, label);
        }
      } else if (errors?.hasOwnProperty("passwordNotMatch")) {
        return `* Your passwords do not match, please check.`;
      }
    }
    return '';
  }

  PATTERN_ERRORS(pattern: any, key: string):any {
    
    let comment: string
    if (pattern == Regex.email) {
      comment = `* ${key} is invalid or not in correct format`;
      return comment;

    }
    else if (pattern == Regex.password) {
      comment = `* ${key} can not contain blank spaces`
      return comment;

    }
    else if (pattern == Regex.name) {
      comment = `* ${key} can not be blank`
      return comment;
      
    }
    else if (pattern == Regex.phone) {
      console.log("pattern validation error called >>>>>>>>>>",pattern);
      comment = `* ${key} can contain only digits`
      return comment;
    }
  }

}
