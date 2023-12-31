# Instructions to make database and populate it

You will need a Prisma compatible version of Node installed. mySQL instance should be up and running. Typescript should be installed also. Prisma will use the DATABASE_URL environment variable to connect to the database, which passes the password, port, database name and other options.

1. Make tables and create Prisma client: `npx prisma migrate dev --name `+ name

2. You can verify that the tables have been created inside mysql

3. Populate the database: `tsc initial_data.ts`, yields `initial_data.js` file. Name `.js` should be changed to `initial_data.cjs`

4. `node initial_data.cjs` This will take a while. May crash due to low RAM, an upper ceiling on connections to the database.

5. To adjust the RAM for Node see here [https://stackoverflow.com/questions/34356012/how-to-increase-nodejs-default-memory] for a way to increase the RAM available for Node to run the script.

6. To alter the mysql resources available, see here [https://stackoverflow.com/questions/68143572/how-can-i-set-connection-limit-and-pool-timeout-in-my-connectionstring-when-my-d]

7. You may need to split the files further and increase the timeout value needed in between file reads. The `fs.createReadStream` will run through the files as fast as it can and call the callback function asynchronously, so increasing the timeout should work in most cases. This will let the database catch up in the reads. 
