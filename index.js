function snapCrackle(maxValue) {
   let str = ''; // string a ser retornada ao fim de todo o processamento

   for (let i = 1; i <= maxValue; i++) {   
      
      if (i % 2 != 0 && i % 5 != 0) { // ímpar, não múltiplo de 5
         str = str + 'Snap, ';
      }

      if (i % 5 == 0 && i % 2 == 0) { // múltiplo de 5 e par
         str = str + 'Crackle, ';
      }

      if (i % 2 != 0 && i % 5 == 0) { // ímpar e múltiplo de 5
         str = str + 'SnapCrackle, ';
      }

      if (i % 2 == 0 && i % 5 != 0) { // par e não múltiplo de 5
         str = str + `${i}, `;
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
   let dividers = 0; // total de divisores de um número, usado para descobrir se este é primo ou não

   for (let i = 1; i <= maxValue; i++) {   
      
      if (i % 2 != 0 && i % 5 != 0) { // ímpar, não múltiplo de 5
         for (let j = 1; j <= i; j++) {
            if (i % j == 0) {
               dividers++;
            }
         }

         if (dividers == 2) {
            str = str + 'SnapPrime, ';
         } else {
            str = str + 'Snap, ';
         }

         dividers = 0;
      }

      if (i % 5 == 0 && i % 2 == 0) { // múltiplo de 5 e par
         for (let j = 1; j <= i; j++) {
            if (i % j == 0) {
               dividers++;
            }
         }

         if (dividers == 2) {
            str = str + 'CracklePrime, ';
         } else {
            str = str + 'Crackle, ';
         }

         dividers = 0;
      }

      if (i % 2 != 0 && i % 5 == 0) { // ímpar e múltiplo de 5
         for (let j = 1; j <= i; j++) {
            if (i % j == 0) {
               dividers++;
            }
         }

         if (dividers == 2) {
            str = str + 'SnapCracklePrime, ';
         } else {
            str = str + 'SnapCrackle, ';
         }

         dividers = 0;
      }

      if (i % 2 == 0 && i % 5 != 0) { // par e não múltiplo de 5
         if (i == 2) {
            str = str + 'Prime, ';
         } else {
            str = str + `${i}, `;
         }

         dividers = 0;
      }
   }

   return str.substring(0, str.length - 2);
}

console.log(snapCrackle(30)); // chamada da função snapCrackle

console.log(snapCracklePrime(30)); // chamada da função snapCracklePrime