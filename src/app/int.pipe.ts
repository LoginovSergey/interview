import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'int',
  pure: false,
})
export class IntPipe implements PipeTransform {
  transform(value: number, ...args: any[]): number {
    return value * 5;
  }
}

@Pipe({
  name: 'int1',
  pure: true,
})
export class Int1Pipe implements PipeTransform {
  transform(value: number, ...args: any[]): number {
    return value * 5;
  }
}
