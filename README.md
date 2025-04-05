# Документация
**GET** /public/:id+.png *Аватарки пользователей*
***
**POST** /login {email: String, password: String} *Вход в аккаунт*
***
**GET** /user/:email *Получить информацию о пользователе*
***
**POST** /register {email: String, password: String, firstName: String, secondName: String} *Регистрация пользователя*
***
**GET** /user-top *Топ пользователей*
***
**POST** /add-points {email: String, points: Float} *Добавить очки пользователю*
***
**GET** /animal/:email *Получить следующее фото животного для пользователя*
***
**GET** /word-practice/:email *Получить следующий вопрос  для пользователя*
***
**GET** /audition/:email *Получить следующее аудирование для пользователя*
***
**GET** /ai-answer/:image *Получить ответ нейросети кто на картинке*
***
**POST** /upload/:email Form-Multipart image *Загрузка фото пользователя*