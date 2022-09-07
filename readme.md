

<div align="center">
  <h1> Express - Introduction</h1>
  <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/sukantahui/">
  <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>
  <a class="header-badge" target="_blank" href="https://twitter.com/sukantahui">
  <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/sukantahui?style=social">
  </a>
  <a class="header-badge" target="_blank" href="https://youtu.be/o6yfsdKn6rE">
      <img alt="Twitter Follow" src="https://img.shields.io/youtube/likes/o6yfsdKn6rE?style=social">
  </a>

  

  
  

<sub>Author:
<a href="https://www.linkedin.com/in/sukantahui/" target="_blank">Sukanta Hui</a><br>
<small> First Edition: August, 2022</small>
</sub>
</div>



# ⚙️ Express API 


🧡🧡🧡 HAPPY CODING 🧡🧡🧡



# 📘 Notes

## Create Node Project ?

```shell
node init
```

## Load required items ?

```shell
npm install cors mysql2 express mysql2 sequelize nodemon
```

## Once sequelize is installed as a dependency, you can initialize the files with the command below:
```shell
sequelize init
```
The above command will create following files and folder
```shell
Created "config/config.json"
Created models folder at "models".
Created migrations folder at "migrations".
Created seeders folder at "seeders".
```
## in config/config.json
```json
{
  "development": {
    "username": "root",
    "password": "sukantahui",
    "database": "sequelize_cli_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```
## Now creating model, here customer model
```shell
sequelize model:create --name Customer --attributes customerName:string,openingBalance:integer,email:string
```
## To create database you mentioned in config.json
```shell
npx sequelize-cli db:create
```
## It’s time to run the migration file you just created with the db:migrate command:
```shell
sequelize-cli db:migrate
```