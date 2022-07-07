# CN_restAPI_38
## Indykatz

<!-- Folders / Files  -->

mkdir src
mkdir src/db src/middleware src/user
touch src/servers.js src/db/connection.js src/middleware/index.js src/user/connection.js src/user/model.js src/user/routers.js

> src

- > db
- - > connection.js
- > middleware
- - > index.js
- > user
- - > connection.js
- - > model.js
- - > routes.js
- > server.js

<!-- Installs -->

npm init -y
npm i

  <!-- C - create -->

Post - http://localhost:5001/user

json content example :
{
"username": "User",
"email": "user@email.com",
"password": "pass123"
}

<!-- R - Read -->

(Get All) Post - http://localhost:5001/user
(Get One) Post - http://localhost:5001/findOne/:username

<!-- U - Update -->

Patch - http://localhost:5001/user

json content example
{
"filterObj":{
"username": "User"
},
"updateObj": {
"username": "changeusername ? optional"
"email": "changeEmail ? optional"
"password": "changePassword ? optional"
}
}

<!-- D - Delete -->

Delete - http://localhost:5001/user/:username

<!-- Login -->

Post - http://localhost:5001/login

json content example
{
"username":"User",
"password": "pass123"
}

<!-- Kat's Log -->

- Get npm imports
- token - where its used and how ?
- Security - making changes wih token ?
