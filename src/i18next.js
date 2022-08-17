import i18n from "i18next";
import { initReactI18next} from "react-i18next"

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translations: {
                Main:"Main",
                Contacts:"Contacts",
                Info:"Info",
                Out:"Out",

                InspectDrons:"Inspect Drons",

                Drons:"Drons",
                DronsAddForm:"Drons Add Form",
                EditSelectedDron:"Edit selected dron",
                AddDron:"Add dron",
                DeleteSelectedDrons:"Delete selected drons",
                DronId:"DronId",
                DronModle:"Dron Modle",
                EnergyCapacity:"Energy Capacity",
                LiftingCapacity:"Lifting Capacity",
                IsOccupied:"Is Occupied?",
                OccupiedT:"Yes",
                OccupiedF:"No",
                DronsChangeForm:"Drons Change Form",


                InspectDronsOnTasks:"Inspect Drons On Tasks",
                DeleteSelectedDronOnTask:"Delete selected dron on task",
                AddDronOnTask:"Add dron on task",
                AddDronsOnTasksForm:"Add drons on tasks form",
                AddSelectedDronOnSelectedTasks:"Add selected dron on selected tasks",
                AddDronsOnAllTasks:"Add drons on all tasks",

                Selected:"selected",
                RefreshTable:"Refresh Table",


                Tasks:"Tasks",
                TaskId:"TaskId",
                TaskDesc:"Task description",
                Dist:"Distation",
                Weight:"Weight",
                AddTasks:"Add Tasks",
                DeleteSelectedTasks:"Delete Selected Tasks",
                TaskAddForm:"Task Add Form",
                AddTask:"Add task",


                Date:"Date",


                Admin:"Admin",
                AddDbOnTask:"Add user on dron base",
                DeleteSelectedDbOnTask:"Delete selected users from dron base",
                UserName:"UserName",
                UserTel:"UserTel",
                UserEmail:"UserEmail",
                UserDronBaseid:"UserDronBaseid",
                DronBaseName:"DronBaseName",
                UserAddForm:"Users Add Form",
                AddUser:"AddUser",
                StatisticEnterUserName:"Enter user name",
                StatisticEnterUserEmailAdress:"Enter user email adress",
                StatisticEnterUserPass:"Enter user password",
                StatisticEnterUserTel:"Enter user telephone",


                DronOnTaskStatistic:"Dron On Task Statistic",
                
                InspectTasks:"Inspect Tasks",
                

                Status:"Status",


                ChangeLanguage:"Змінити мову",

                Login:"Login",
                Lform:"Login Form",
                EnterEmailLform:"Enter your Email address",
                EnterPassLForm:"Enter your Password",
                isUserLform:"isUser",
                LoginLform:"Login",

                Registration:"Registration",
                Rform:"Registration Form",
                EnterNameRform:"Enter your Name",
                EnterEmailRform:"Enter your Email Adress",
                EnterPassRform:"Enter your Password",
                EnterTelRform:"Enter your Telephone",
                RegistrateAsOwner:"Registrate as Owner",
                RegistrateAsClient:"Registrate as Client",
                EnterComNameRform:"Company Name",
                EnterComPassEform:"Company Pass",
                Registrate:"Registrate",
                CloseRform:"Close"
            }
        },
        ua: {
            translations: {
                Main:"Головна",
                Contacts:"Контакти",
                Info:"Информція",
                Out:"Вихід",


                InspectDrons:"Переглянути Дронів",
                Drons:"Дрони",
                DronsAddForm:"Форма додавання дронів",
                EditSelectedDron:"Змінити вибраних дронів",
                AddDron:"Додати дрона",
                DeleteSelectedDrons:"Видалити вибраних дронів",
                DronId:"IdДрона",
                DronModle:"Модель дрона",
                EnergyCapacity:"Дистанція польоту",
                LiftingCapacity:"Вантажопідйомність",
                IsOccupied:"Чи зайнятий дрон",
                OccupiedT:"Так",
                OccupiedF:"Ні",
                DronsChangeForm:"Форма зміни дронів",


                InspectDronsOnTasks:"Переглянути дронів на задачах",
                DeleteSelectedDronOnTask:"Видалити вибраних дронів на задачі",
                AddDronOnTask:"Додати дронів на задачі",
                AddDronsOnTasksForm:"Форма додавання дронів на задачі",
                AddSelectedDronOnSelectedTasks:"Додати вибраних дронів на задачі",
                AddDronsOnAllTasks:"Додати всіх дронів на задачі",

                Selected:"Вибрати",
                RefreshTable:"Перегрузити таблицю",
                

                Tasks:"Задачі",
                TaskId:"IdЗадаі",
                TaskDesc:"Опис задачі",
                Dist:"Відстань яку треба здолати",
                Weight:"Вага пакунку",
                AddTasks:"Додати задачу",
                DeleteSelectedTasks:"Видалити вибрані задачі",
                TaskAddForm:"Форма додавання завдань",
                AddTask:"Додати задачу",


                Date:"Дата",


                Admin:"Адміністратор",
                AddDbOnTask:"Додати користувача до бази дронів",
                DeleteSelectedDbOnTask:"Видалити вибраних користувачів з бази дронів",
                UserName:"Ім'я користувача",
                UserTel:"Телефон користувача",
                UserEmail:"Електронна скринька користувача",
                UserDronBaseid:"Id бази дронів",
                DronBaseName:"Ім'я бази дронів",
                UserAddForm:"Форма додавання користувачів до бази дронів",
                AddUser:"Додати користувача",
                StatisticEnterUserName:"Ввести ім'я користувача",
                StatisticEnterUserEmailAdress:"Ввести поштову скриньку користувача",
                StatisticEnterUserPass:"Ввести пароль користувача",
                StatisticEnterUserTel:"Ввести телефон користувача",


                
                DronOnTaskStatistic:"Статистика Дронів на Задачах",
                
                InspectTasks:"Переглянути Задачі",
                

                Status:"Статус",


                ChangeLanguage:"Change language",

                Login:"Увійти",
                Lform:"Форма авторизації",
                EnterEmailLform:"Введіть електрону пошту",
                EnterPassLForm:"Введіть пароль",
                isUserLform:"Адміністратор",
                LoginLform:"Увійти",

                Registration:"Зареєструватись",
                Rform:"Форма реєстрації",
                EnterNameRform:"Введіть своє ім'я",
                EnterEmailRform:"Введіть свою єлектронну пошту",
                EnterPassRform:"Введіть пароль",
                EnterTelRform:"Введіть свій номер телефона",
                RegistrateAsOwner:"Зареєструватись як власник",
                RegistrateAsClient:"Зареєструватись як клієет",
                EnterComNameRform:"Назва бази дронів",
                EnterComPassEform:"Пароль бази дронів",
                Registrate:"Зареєструватись",
                CloseRform:"Закрити"
            }
        }
    },
    fallbackLng: "en",
    debug: false,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
        escapeValue: false, // not needed for react!!
        formatSeparator: ","
    },

    react: {
        useSuspense: false,
    }
});

export default i18n;