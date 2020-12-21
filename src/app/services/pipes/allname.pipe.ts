import { Pipe, PipeTransform } from '@angular/core';
import {Worker} from '../model/workermodel';
import { isNullOrUndefined } from 'util';

@Pipe({
  name: 'workerFilter',
  pure: false
})
export class AllnamePipe implements PipeTransform {

  transform(workers: Worker[], searching) : any  {
    
    let searchGuy = searching.Name;

    if (!isNullOrUndefined(workers) && searchGuy.trim().length > 0) {

      let newArr = workers.filter(workers => 
        workers.name.toLocaleLowerCase().indexOf(searchGuy.toLocaleLowerCase()) === 0 ||
        workers.surname.toLocaleLowerCase().indexOf(searchGuy.toLocaleLowerCase()) === 0 
      );


      return newArr;
    } else {
      return workers;
    }

}
}
