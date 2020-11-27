let country;
let message;
let price;


country = prompt(`Введите вашу страну, бы оформить доставку`).toLowerCase();

switch (country) {
    case "китай":
        price = 100;
        message = "Доставка в " + country + " будет стоить " + price + " кредитов"
        break;
    case "чили":
        price = 250;
        message = "Доставка в " + country + " будет стоить " + price + " кредитов"
        break;
    case "австралия":
        price = 170;
        message = "Доставка в " + country + " будет стоить " + price + " кредитов"
        break;
    case "индия":
        price = 80;
        message = "Доставка в " + country + " будет стоить " + price + " кредитов"
        break;
    case "ямайка":
        price = 120;
        message = "Доставка в " + country + " будет стоить " + price + " кредитов"
        break;
    default:
        message = "В вашей стране доставка не доступна!";
}

alert(message);
