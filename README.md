# Express Project Skeleton

Use this project skeleton as a starting point for structuring your app. Things to note
* Sequelize configuration has not yet been added -- you will need to set that up yourself
* You may find yourself wanting to use javascript -- js files can be added in `public/javascripts` and should be appended to the Pug templates as needed
* CSS files can go in `public/stylesheets` and also will need to be added to Pug templates


Do the changes in your own branch\
Add, push and commit from the branch\
on github.com submit new pull request\

Another member of the team reviews and accepts the new pull request on their end\
Click merge after being reviewed on github.com\

Switch branch to main and pull.\

Creating User with password:
CREATE USER memeium_app WITH SUPERUSER PASSWORD 'password' createdb;
Creating database with owner:
CREATE DATABASE memeium_dev with OWNER memeium_app;
SESSION_SECRET=alex-phil-austin-roger

copy/paste data from .env.example to .env

npx dotenv sequelize db:create


