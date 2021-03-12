const UNITS = ['', "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen",
    "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"
]
const DOZENS = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', "sixty", "seventy", "eighty", "ninety"];

const HUNDREDS = ['', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred',
    'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'
];
module.exports = function toReadable(n) {
    const b = n % 10;
    const a = (n - b) / 10;
    const c = Math.floor(n / 100);
    const d = Math.floor((n / 10) % 10);

    if (n == 0) return 'zero';
    if (n > 99) {
        if (b == 0 && d == 0) return HUNDREDS[c];
        if (n % 100 < 20) return HUNDREDS[c] + ' ' + UNITS[n % 100];
        if (b == 0) return HUNDREDS[c] + ' ' + DOZENS[d]
        if (d == 0) return HUNDREDS[c] + ' ' + UNITS[b];
        return HUNDREDS[c] + ' ' + DOZENS[d] + ' ' + UNITS[b]
    }
    if (n < 20) return UNITS[n];
    if (b == 0) return DOZENS[a];
    return DOZENS[a] + ' ' + UNITS[b];

}