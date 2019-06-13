import { FormControl } from '@angular/forms';

export const whitespaceValidator = (control: FormControl): { [s: string]: boolean } => {
  if (!Number.isInteger(control.value)) {
    if (!control.value) {
      return { required: true };
    } else {
      if (!control.value.trim()) {
        return { required: true };
      }
    }
  }
  return null;
};

// ip格式校验
export const ipValidator = (control: FormControl): { [s: string]: boolean } => {
  if (!control.value) {
    return { required: true };
  }
  if (/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(control.value)) {
    return null;
  }
  return { error: true };
};

export const mobileValidator = (control: FormControl): { [s: string]: boolean } => {
  if (!control.value) {
    return { required: true };
  } else {
    if (!/^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\d{8}$/.test(control.value)) {
      return { error: true };
    }
  }
  return null;
};

export const emailValidator = (control: FormControl): { [s: string]: boolean } => {
  if (!control.value) {
    return { required: true };
  } else {
    if (!/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(control.value)) {
      return { error: true };
    }
  }
  return null;
};
