let A1 = ['', "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
let A2 = ["eleven", "twelve", "thirteen", "fourteen",
    "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"
];

let A3 = ['ten', 'twenty', 'thirty', 'forty', 'fifty', "sixty", "seventy", "eighty", "ninety"];

let A4 = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred',
    'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'
];
module.exports = function toReadable(n) {
    let b = n % 10;
    let a = (n - b) / 10;
    let c = Math.floor(n / 100);
    let d = Math.floor((n / 10) % 10);

    if (n == 0) return 'zero';
    if (n > 99) {
        if (n % 100 > 10 && n % 100 < 20) return A4[c - 1] + ' ' + A2[n % 100 - 11];
    }
    if (c && b == 0 && d == 0) return A4[c - 1];
    if (c && b == 0) return A4[c - 1] + ' ' + A3[d - 1]
    if (c && d == 0) return A4[c - 1] + ' ' + A1[b];
    if (c) return A4[c - 1] + ' ' + A3[d - 1] + ' ' + A1[b]
    if (n < 10) return A1[n]
    if (n > 10 && n < 20) return A2[n - 11];
    if (b == 0) return A3[a - 1];
    return A3[a - 1] + ' ' + A1[b];

}