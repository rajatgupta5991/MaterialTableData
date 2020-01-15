import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "search"
})
export class SearchPipe implements PipeTransform {
  transform(value: any[], searchTerm: any): any {
    if (!value || !searchTerm) {
      return value;
    } else {
      return value.filter(val => {
        val.name.toLowerCase().indexOf(searchTerm.toLowerCase() !== -1);
      });
    }
  }
}
