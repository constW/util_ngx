
import { Pipe, PipeTransform } from '@angular/core';
import { toThousands } from './util';

@Pipe({ name: 'fileSize' })
export class FileSizePipe implements PipeTransform {
  transform(value: number, decimal?: number): any {
    const level = ['B', 'KB', 'GB', 'TB', 'PB'];
    const block = 1024;
    for (let i = 1; i < level.length; i++) {
      if (value < Math.pow(block, i) && value >= Math.pow(block, i - 1)) {
        return this.formatDecimal(value, decimal || 2, i - 1) + level[i - 1];
      }
    }
    return this.formatDecimal(value, decimal || 2, 4) + level[4];
  }

  private formatDecimal(value: number, decimal: number, level: number) {
    const block = 1024;
    const v = Math.ceil((value / Math.pow(block, level)) * Math.pow(10, decimal)) / Math.pow(10, decimal);
    return toThousands(v);
  }
}
