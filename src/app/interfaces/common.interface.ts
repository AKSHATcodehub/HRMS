import { FormControl } from "@angular/forms";

export interface DropDown {
    control: FormControl;
    label: string;
    list: { viewValue: string; value: string }[];
    multiple?: boolean;
  }