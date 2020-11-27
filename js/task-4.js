let credits = 23508;
const pricePerDroid = 3000;
let quantityInputUser;
let totalPrice;
let message;
let maxQuantity;


quantityInputUser = prompt(`Введите какое количество дроидов которые вы хотите купить? цена одной единицы = 3000 кредитов`)
maxQuantity = Math.floor(credits / pricePerDroid);


if (quantityInputUser === null) {
    message = "Отменено пользователем!"
}
else if (maxQuantity >= quantityInputUser) {
    totalPrice = quantityInputUser * pricePerDroid;
    credits = credits - (pricePerDroid * quantityInputUser);
    message = "Вы купили " + quantityInputUser + " едениц(и) дроидов, на счету осталось " + credits + " кредитов.";
}

else {
    message = "Недостаточно средств на счету! Попробуйте выбрать меньшее количество."
}
alert(message);


