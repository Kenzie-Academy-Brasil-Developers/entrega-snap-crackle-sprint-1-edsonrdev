function snapCrackle(maxValue) {
   let str = ''; // string a ser retornada ao fim de todo o processamento

   for (let i = 1; i <= maxValue; i++) {   
      
      if (i % 2 !== 0 && i % 5 !== 0) { // ímpar, não múltiplo de 5
         str += 'Snap, ';
      }

      if (i % 2 === 0 && i % 5 === 0) { // par, múltiplo de 5
         str += 'Crackle, ';
      }

      if (i % 2 !== 0 && i % 5 === 0) { // ímpar, múltiplo de 5
         str += 'SnapCrackle, ';
      }

      if (i % 2 === 0 && i % 5 !== 0) { // par, não múltiplo de 5
         str += `${i}, `;
      }
   }

   /*
    Remove os 2 últimos caracteres da string, antes de retorná-la.
    Os 2 últimos caracteres porque precisa-se remover tanto a vígula
    quanto o espaço em branco, assim que toda a string estiver formada.
   */
   return str.substring(0, str.length - 2);
}

function snapCracklePrime(maxValue) {
   let str = '';

   for (let i = 1; i <= maxValue; i++) {   
      
      if (i % 2 !== 0 && i % 5 !== 0) { // ímpar, não múltiplo de 5
         if (isPrimeNumber(i)) {
            str += 'SnapPrime, ';
         } else {
            str += 'Snap, ';
         }
      }

      if (i % 2 === 0 && i % 5 === 0) { // par, múltiplo de 5
         if (isPrimeNumber(i)) {
            str += 'CracklePrime, ';
         } else {
            str += 'Crackle, ';
         }
      }

      if (i % 2 !== 0 && i % 5 === 0) { // ímpar, múltiplo de 5
         if (isPrimeNumber(i)) {
            str += 'SnapCracklePrime, ';
         } else {
            str += 'SnapCrackle, ';
         }
      }

      if (i % 2 === 0 && i % 5 !== 0) { // par, não múltiplo de 5
         if (isPrimeNumber(i)) {
            str += 'Prime, ';
         } else {
            str += `${i}, `;
         }
      }
   }

   return str.substring(0, str.length - 2);
}

function isPrimeNumber(value) {
   let div = 0; // total de divisores, usado para descobrir se o valor passado é primo ou não

   for (let count = 1; count <= value; count++) {
      if (value % count === 0) {
         div++;
      }
   }

   /*
      Se tiver exatamente 2 divisores, será
      primo e, portanto, e retornará true
   */
   return (div === 2) ? true : false;
}

console.log(snapCrackle(30)); // chamada da função snapCrackle
console.log(snapCracklePrime(30)); // chamada da função snapCracklePrime