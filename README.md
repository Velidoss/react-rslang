# React RS-Lang

Выпускной проект курска RSS React 2021Q1. Приложение для изучения английского языка с поддержкой авторизации и сохранения пользовательских данных на удалённом сервере. Для работы с сервером использовалось собственное RESTful API.

### Стэк технологий

 - React
 - Redux, redux-thunk
 - Node.js
 - Material UI
 - React-router-dom
 - Axios
 - React-hook-form

### Команда

 - @Velidoss - тимлид, фуллстэк
 - @arumirinka - фронт-энд
 - @va-z - UX/UI, фронт-энд
 - @reagentjs - фуллстэк

### Организация совместной работы

- Figma: https://www.figma.com/file/jNGgTkgsuC2kyPo49QXuFx/design?node-id=0%3A1
- Trello: https://trello.com/b/fsxnILl6/rs-lang
- RACI-матрица: https://docs.google.com/spreadsheets/d/15KhXPU6rxArJ1ToJTn2mU3bzdA-enRxqdPKNdD7YfdI/edit#gid=0

### Запуск приложения

#### Front-end

##### https://github.com/Velidoss/react-rslang

 - `git clone https://github.com/Velidoss/react-rslang.git`
 - `git cd ./react-rslang`
 - `yarn`
 - `yarn start`

#### Back-end

##### https://github.com/reagentjs/react-rslang-backend

 - `git clone git@github.com:reagentjs/react-rslang-backend.git`
 - `git cd ./react-rslang-backend`
 - `yarn`
 - добавьте файл .env и вставьте переменные: 
      - данные для хранения аватара пользователя в cloudinary: CLOUDINARY_URL, CLOUDINARY_AVATAR_UPLOAD_PRESET 
      - MONGO_CONNECTION_STRING
      - данные для jwt: JWT_SECRET_KEY, JWT_REFRESH_SECRET_KEY
 - `yarn start`
