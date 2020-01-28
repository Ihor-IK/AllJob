import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sizeFormat'
})
export class SizeFormatPipe implements PipeTransform {

  transform(value: any, size : any): any {

    console.log("Value is : "+value+ " and param is "+size); // o/p = val is 100 and param is : MB
    // return value*2;

    if(size == "MB"){
      return value / 1024 + "MB";
    }else if(size == "GB"){
      return value / (1024*1024) + "GB";
    }
    else{
      return value+" KB";
    }
  }

}
