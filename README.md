# :motor_scooter: MotoShop

## :pushpin: Table of Contents
 * [Desciption](#book-Description)
 * [Technology](#hammer_and_wrench-Technology)
 * [Task](#scroll-Task)
 * [Install](#gear-Install)
## :book: Description 
this repo is a simple CRUD(create, read, update, delete) of seling motorcycle web app.
## :hammer_and_wrench: Technology
 * [NodeJS](https://nodejs.org/en/)
 * [typescript](https://www.typescriptlang.org/)
 * [html](https://www.w3schools.com/html/)
 * [css](https://www.w3schools.com/css/)
 * [mysql](https://www.mysql.com/)
 * [Express Framework](http://expressjs.com/en/)
## :scroll: Task
- [X] database with two tables, salesman and motocycle  
- [X] v1 show the description of one specifc motocycle, in this screen you can delete, motocycle
- [X] v2 screen to create  update motocycle. 
- [X] v3 display of motocycle, see all motocycle, filter by name price and selerman. Acces v1 of especyfic motocycle
- [X] v4 selerman screen, see all motocycle of especyfic selerman, you can fillter by motocycle price, delete selerman and access to create seler man.
- [X] v5 create selerman
- [X] crud request for especific motocycle
- [X] select all moto, filter by name and price
- [X] crud request for especific selerman
## :bookmark_tabs: Require
* [mysql](https://www.mysql.com/)
* [NodeJS](https://nodejs.org/en/)
## :gear: Install

if you want to start the program with some data on it you need to run `backup.sql` on workbench. This program use user: `exclude` and password: `password`, for this program to start you need to create this user on workbench, or alter the file `backend/src/connection.ts` with your user and password.</br>
obs .: the authentication type for the user need to be standard.</br>

```JavaScript
import mysql from 'mysql';

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'yourUser',
    password: 'yourPassword',
    database: 'motoShop'
})

export default connection;
```
to run the program
```bash
npm install
# 
cd backend
npm intall
#
cd ../frontend
npm install
#
cd ../backend
npm start
```
