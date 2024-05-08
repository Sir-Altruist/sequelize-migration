# Steps to setup migration for your project using sequelize-cli

1. isntall: *npm install --save-dev sequelize-cli*
2. Before initializing sequelize, create a file **(.sequelizerc)** at the root folder and populate it with the necessary configuration.
3. Initialize sequelize: *npx sequelize-cli init*
4. Properly convert your config.js syntax from *json* to *js* by exporting the file (i.e module.exports) and also removing the quotes surronding the keys.
5. Create Models: *yarn model:create --name "table_name" --attributes "name:type..."* (as congifured in this project. Kindly refer to sequelize doc for the full command)
6. Migrate your database: *yarn migrate* (as congifured in this project. Kindly refer to sequelize doc for the full command)
7. Pre-populate your database: In a situation where you have already existing data, you can populate them into the database through seeding. The steps are as follows:
    i. create a seed file: *yarn see:create --name user* (as congifured in this project. Kindly refer to sequelize doc for the full command)
    ii. Populate your seed file with the details you want to pre-populate your database with
    iii. Run seed: *yarn seed:execute* (as congifured in this project. Kindly refer to sequelize doc for the full command)
    iv. To undo your seeding: *yarn seed:rollback:recent*.(This undo most recent seed). *yarn seed:rollback:all* (This undo all seeds). *yarn seed:rollback --name "name of seed file"* (This undo a specifc seed)