import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckPrimeNumberService {

  constructor() { }

  checkForPrime(num: any) {
    var isPrime = true;
    for (let j = 2; j < num; j++) {
      if (num % j === 0) {
        isPrime = false;
        break;
      }
    }
    return isPrime;
  }

}
