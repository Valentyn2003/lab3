//Завдання 1
// Початок

// Ввести значення n та r
const n = 9;
const r = 4;

// Обчислити значення чисельника
let P1 = 1; // Задаємо початкове значення
for (let i = 1; i <= n; i++) {
  P1 *= i;
}

// Обчислити значення знаменника
let P2 = 1; // Задаємо початкове значення
for (let i = 1; i <= n - r; i++) {
  P2 *= i;
}

// Обчислюємо кількість усіх розміщень без повторень
const A = P1 / P2;

// Вивести на екран результат
console.log(`Кількість розміщень без повторень з ${n} елементів по ${r}: ${A}`);

// Кінець

//Завдання 2
let STIRLING_SECOND_KIND = (N, K) => {
    let table = Array.from(Array(N + 1), () => new Array(K + 1));

    for (let i = 0; i <= N; i++) {
        for (let j = 0; j <= K; j++) {
            if (i === j) {
                table[i][j] = 1;
            } else if (i > j && j > 0) {
                table[i][j] = j * table[i - 1][j] + table[i - 1][j - 1];
            } else {
                table[i][j] = 0;
            }
        }
    }

    return table;
};

let logTable = (table) => {
    for (let i = 0; i < table.length; i++) {
        console.log(table[i].join('\t |'));
    }
};

let bells_nums = (table) => {
    let res = 0;
    for (let j = 0; j < table[0].length; j++) {
        res += table[table.length - 1][j];
    }
    return res;
};

let i = 15;
let N = i + 5, K = i + 5;
let resultTable = STIRLING_SECOND_KIND(N, K);
logTable(resultTable);
console.log(bells_nums(resultTable));

module.exports = { STIRLING_SECOND_KIND, bells_nums };
