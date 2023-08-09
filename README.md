# BE Reminder

API Rest project using express(ES), mysql, nodemail + etherial.email, db-migrate, nodemon, and JWT


## Requirement
| Name    | Version    |
| ----------- | ------------- |
| MySQL  | v8.0.28    |
| Node     | v14.18.1  |
| Npm      | v6.14.15  |


## Installation

    $ git clone https://github.com/arifkhri/be-reminder/
    $ cd be-reminder
    $ npm i

## Setup
- change .env.example to .env and configure it 
- create two directory: public/export/employee and public/picture/employee

Migration

    $ npm run dbl up

Running the project

    $ npm run start
    $ npm run watch:dev
    
Swagger

> http://localhost:4005/docs


### Todo:
- Import feature on a several list page
- Integration a notif 3rd party
- Background job for sending an email reminder
