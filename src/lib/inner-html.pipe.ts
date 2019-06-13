import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";
@Pipe({
  name: 'innerhtmlPipe'
})
export class InnerhtmlPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {
  }
  transform(style) {
    if (style) {
      return this.sanitizer.bypassSecurityTrustHtml(style);
    }
    return null;
  }

}
