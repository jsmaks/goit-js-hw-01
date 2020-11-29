let input;
let total = 0;

do {
    input = +prompt(`Введите число`);
    total = total + input;
}
while (input !== 0);
alert(total);
