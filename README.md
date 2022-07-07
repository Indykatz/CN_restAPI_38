# CN_restAPI_38

<!-- C - create -->

Post - http://localhost:5001/user

Body - Json Content
example :
{
"username": "User",
"email": "user@email.com",
"password": "pass123"
}

<!-- R - Read -->

Get All - Post - http://localhost:5001/user
Get One - Post - http://localhost:5001/findOne/:username

<!-- U - Update -->

Patch - http://localhost:5001/user

example
{
"filterObj":{
"username": "username"
},
"updateObj": {
"username": "changeusername ? optional"
"email": "changeEmail ? optional"
"password": "changePassword ? optional"
}
}

<!-- D - Delete -->

Delete - http://localhost:5001/user/:username
