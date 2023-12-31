# Node Bible Application

Data from [https://github.com/eliranwong/OpenHebrewBible] from OpenHebrewBible by Eliran Wong CC4.0 non-commercial lisence.

This school project aims to normalize the datafile `BHSA-with-extended-features.csv.zip` into a database by running it through the requirements of the normal forms. It should meet NF3 but there are limitations to analyzing it further to put it into BCNF or higher. 


To install dependencies make sure to be on the `advanced_databases_midterm` folder and run: 

`npm install`

Adjust the `.env` file according to `.env.example`. The `DATABASE_URL` variable might need to be adjusted

Database used is mysql, if desired, can be started from the `mysql/` folder using Docker. Instructions inside folder for mysql.

To make sure Prisma is aware of the database, run:

`npx prisma migrate dev --name` + name of your choice

To run application run:

`npm run dev`

Application should be available on port 3000 of localhost.

## Known problems

There is a known issue with the script used to build the database, namely `./prisma/initial_data.cjs` RAM might run out in either Node or mySQL. Modifications to the max_connections configuration in mysql and pool_timeout might need to be made when running the script on a one time basis. These can be configured in the `DATABASE_URL` environment variable in `.env`. An example of which has been commented out.

See here [https://stackoverflow.com/questions/34356012/how-to-increase-nodejs-default-memory] for a way to increase the RAM available for Node to run the script.

Edits to the file should happen on `./prisma/initial_data.ts` and compiled to a `.js` file. In order to run the file inside node, it needs to be renamed to a `.cjs` file as of this writing. Run `node initial_data.cjs` to populate the database. 

A mysql dump file has been used to populate the cloud database already, and can be used right away.
