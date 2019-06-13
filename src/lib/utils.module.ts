import { NgModule } from '@angular/core';
import { FileSizePipe } from './file-size.pipe';
import { InnerhtmlPipe } from './inner-html.pipe';

@NgModule({
  declarations: [FileSizePipe, InnerhtmlPipe],
  imports: [
  ],
  exports: [FileSizePipe, InnerhtmlPipe]
})
export class UtilsModule { }
