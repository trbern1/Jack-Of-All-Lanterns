# Jack Of All Lanterns
Welcome to the Jack-Of-All-Lanterns.

Created By: Tegan Bernard, Shane Kennedy, Jessica Powell, Hunter O'Shea

## Introduction
[insert introduction here]


## Configuration
Software used:
- postgres ( https://blog.logrocket.com/nodejs-expressjs-postgresql-crud-rest-api-example/#whatisexpressjs )
- pgAdmin 4 (https://www.postgresql.org/ftp/pgadmin/pgadmin4/v6.7/)
- node express LTS (https://nodejs.org/en/)
- in VSCode, check version (node -v), enter commands
- `npm install express --save`
- `npm i pg`
- `npm i cors`
- command to start: node filename.js

Postgres Setup:
- login as superuser in pgAdmin 4, create new Login/Group Role called 'it353' password 'root' (make sure "Can login?" and "Create database?" are checked)
- add database called 'it353database' with owner it353
- add schema called 'it353project' with owner it353
- add tables included in file schema/schema.txt in this repo
- diagram included as schema/schema.png
