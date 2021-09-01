import { Pipe, PipeTransform } from '@angular/core';
import { Data } from '@angular/router';
import { DataFile } from './data-file';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(data: DataFile[], searchValue: string): Data[] {

    if (!data || !searchValue) {
      return data;
    }

    return data.filter(datas =>
      datas.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
  }

}
