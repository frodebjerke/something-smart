# Something Smart

## Run on Windows
### Required programs
1. Node.js
2. Mongodb

### Run
1. Start Mongodb
  - `cd 'C:\Program Files\MongoDB\Server\3.2\bin`
  - `./mongod.exe --dbpath /c/Users/Vemund/data`
2. Start Nodejs server
  - Navigate to the folder with this repository
  - Install dependencies `npm install`
  - Start server `npm run local`

## Querying the database
- `cd 'C:\Program Files\MongoDB\Server\3.2\bin`
- `mongo`
- `use something-smart`
- Run queries. i.e. `db.quotes.find()`
