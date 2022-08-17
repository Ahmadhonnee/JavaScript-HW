var user = {}
user.name;
user.lastName;
user.age;
user.lang;
user.want;
user.want2;
user.second;
user.accomodation;
user.edu;
user.eduName;
user.salary;

user.lang = prompt("Choose your language EN | UZ | RU", "EN");

if(user.lang == "EN"){
    alert("Your language is English");
    user.name = prompt("Hi, what is your name ?", "Shoxrux");
    user.lastName = prompt("What is your surname ?", "Doe");
    user.age = prompt("How old are you ?", 20);
    user.want = prompt("Would you like to see how many seconds you've spend in this life?  Yes | No", "Yes");
    if (user.want = "Yes"){
        user.second = user.age * 31536000;
        alert(`Hey ${user.name} you've spend ${user.second} seconds overall`)
    }else{}
    user.want2 = prompt("Would you like to continue? Yes | No", "Yes");
    if (user.want2 = "Yes"){
        user.edu = prompt(`${user.name} where do you study?`, "In Tashkent");
        user.eduName = prompt("What's its name?", "WUIT");
        user.salary = prompt("How much do you earn?", "300$")
    } else if(user.want2 = "No") {
        alert("Press OK to end conversation.")
    }
    alert(`${user.name} you are ${user.age} years old \nProbably you know English \nAnd you earn ${user.salary} now O_O`)
} else if (user.lang == "UZ"){
    alert("Your language is Uzbek");
    user.name = prompt("Assalomu Alaykum, ismingis nima ?", "Shoxrux");
    user.lastName = prompt("Familiyangiz nima?", "Doe");
    user.age = prompt("Yoshingiz nechida ?", 20);
    user.want = prompt("Bu hayotda necha soniya vaqt sarflaganingizni ko'rishni xohlaysizmi?  Ha | Yoq", "Ha")
    if (user.want = "Ha"){
        user.second = user.age * 31536000;
        alert(`${user.name}, siz jami ${user.second} soniya sarfladingiz`)
    }else{}
    user.want2 = prompt("Davom etishni xohlaysizmi? Ha | Yoq", "Ha");
    if (user.want2 = "Ha"){
        user.edu = prompt(`${user.name} qayerda o'qiysiz?`, "Toshkentda");
        user.eduName = prompt("Uning nomi nima?", "WUIT");
        user.salary = prompt("Qancha pul topasiz?", "300$")
    } else if(user.want2 = "Yoq") {
        alert("Suhbatni tugatish uchun OK tugmasini bosing.")
    }
    alert(`${user.name} siz ${user.age}  yoshdasiz \nEhtimol siz o'zbek tilini bilasiz \nVa siz hozir ${user.salary} ishlab topyapsiz O_O`)
} else if (user.lang == "RU"){
    alert("Your language is Russian");
    user.name = prompt("Привет, как тебя зовут ?", "Shoxrux");
    user.lastName = prompt("Какая у тебя фамилия ?", "Doe");
    user.age = prompt("Сколько тебе лет ?", 20);
    user.want = prompt("Хотите узнать, сколько секунд вы провели в этой жизни?  Да | Нет", "Да")
    if (user.want = "Yes"){
        user.second = user.age * 31536000;
        alert(`${user.name}, ты потратил всего ${user.second} секунды`)
    }else{}
    user.want2 = prompt("Желаете ли вы продолжить? Да | Нет", "Да");
    if (user.want2 = "Да"){
        user.edu = prompt(`${user.name} где ты учишься?`, "В Ташкенте");
        user.eduName = prompt("Что это за имя?", "WUIT");
        user.salary = prompt("Сколько ты зарабатываешь?", "300$")
    } else if(user.want2 = "Нет") {
        alert("Нажмите OK, чтобы завершить разговор.")
    }
    alert(`${user.name} вам ${user.age} лет \nВероятно, вы знаете русский \nAnd you earn ${user.salary} now O_O`)
} else {
    alert("Check your Spelling \nWrite in Uppercases!")
}