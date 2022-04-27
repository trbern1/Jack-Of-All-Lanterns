# Jack Of All Lanterns

Created By: Tegan Bernard, Shane Kennedy, Jessica Powell, Hunter O'Shea

## Introduction
Jack Of All Lanterns is a final project created for our web development class. The assignment required the creation of a full stack website with an admin page making use of UI, API, and Database methods. The technology for each of these was up to us to choose, as well as the theme/style of the website. For our project, we decided to use postgres and pgAdmin 4 for the database and decided our theme would be pumpkin-based items. The requirements asked for a minimum of three responsive pages within the website, not including the admin page. For our 3 pages, we chose to make the home, menu, cart, and about us pages. The home page is the default page displayed to users containing basic information that is meant to capture the user's attention. The about us page gives the user information about the "business" and arbitrary values for HQ location. The menu page displays the menu options with a button on each allowing the user to add an item to their cart. The cart page uses those values to dynamically create item cards that user's add to their carts with the only changeable option being the quantity. The admin page was created to make use of all the CRUD operations we believed would be used by an adminstrator.


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
