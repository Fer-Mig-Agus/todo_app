# My Tasks
---
---
![My Tasks](https://github.com/Fer-Mig-Agus/todo_app/assets/98432911/c66983de-68e5-4d0e-b343-dd5a51762009)

---
---

## Objetivos del proyecto
Crear una aplicación web donde se pueda agregar tareas.
Y a partir de ella poder:

* Buscar tareas
* Marcar tareas como completadas
* Desmarcar aquellas tareas que aún no completaste
* Eliminar aquellas tareas que completaste

---
---

## Requisitos para ejecutarla localmente ✔️✔️
1. Intala PostgreSQL
2. Crea una BDD llamada my_tasks
3. Dentro de `./api` crea una archivo .env con sus credenciales como se muestra a continuacion
```

DEBUG= true
DB_USER= tu nombre de usuario de postgresql
DB_PASSWORD= tu contraseña de posgresql
DB_HOST=localhost
DB_PORT= el puerto elejido por lo general es: 5432
BDD=my_tasks
DB_DIALECT=postgres
FRONTEND_URL= Url de tu front por lo general es: http://localhost:3001
EMAIL_PORT=587
EMAIL_USER=Email con el que usarás nodemailer
EMAIL_PASSWORD=Password de la aplicacion que creaste en la verificacion de dos pasos
JWT_SECRET=Una palabra Secreta que usaras para Bcrypt

```
Reemplaza: `API_KEY` , `DB_USER` , `DB_PASSWORD` , `DB_PORT` con tus datos.

---
---

## Instalación  ✔️✔️
Utilice el administrador de paquetes `npm` para instalar. Recuerda usar este comando en cada una de las carpetas, es decir en `./api` y `./client`

`
npm install
`

---
---

## Ejecutar local  ✔️✔️

* Frontend dentro de `./client`

`
npm start
`

* Backend dentro de `./api`

`
npm run dev
`

---
---

# Espero que lo disfruten... 😊 ☺️

---
