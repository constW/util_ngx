import { FormArray } from '@angular/forms';

export const checkForm = (form: any): boolean => {
  for (const key of Object.keys(form.controls)) {
    form.controls[key].markAsDirty();
    form.controls[key].markAsTouched();
    form.controls[key].updateValueAndValidity();
    if (form.controls[key] instanceof FormArray) {
      form.controls[key].controls.forEach((r) => {
        this.checkForm(r);
      });
    }
  }
  return form.valid;
};

export const isIE = (): boolean => {
  return (window['ActiveXObject'] || 'ActiveXObject' in window);
};

export const toThousands = (value: number): string => {
  const sp = (value || 0).toString().split('.');
  return sp[0].replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') +
    (sp.length === 2 ? `.${sp[1]}` : '');
};
