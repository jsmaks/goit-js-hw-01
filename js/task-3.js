const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
message = prompt(`Введие пароль, пожалуста`)

if (message === ADMIN_PASSWORD) {
    message = "Добро пожаловать!";
}
else if (message === null) {
    message = "Отменено пользователем!";

}
else {
    message = "Доступ запрещен, неверный пароль!";
}
alert(message);