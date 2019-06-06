import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'unsafeHtml'
})
export class UnsafeHtmlPipe implements PipeTransform {
  transform(value: string): string {
    return value.replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/'/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
}
