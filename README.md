# Back-End
Node.js server with SQL database

# Overview
This API is used as part of the application Guess Who and allows for CRUD operations to be performed on both on the application's users.

This documentation will cover all of the data models and endpoints which can be access via:

https://backend-guesswho.herokuapp.com/

# Endpoints

# Authentication

| Request Type  |	Endpoints           |	        Description     |
| ------------  |  --------------       |       ------------------  | 
| POST	        |    /api/auth/register	|           Creates User    |
| POST	        |    /api/auth/login	|           Creates JTW*    |
| GET	        |    /api/auth/tweets	|           Gets All Tweets |
| GET	        |    /api/auth/photos	|           Gets All Photos |


*JSON Web Tokens Used to Verify Users

# Data Models

# Authentication

**Register**

A POST request to the /api/auth/register endpoint expects to recieve an object as follows:

```
{
    "username": "CodingGenius",
    "password": "coderules"
}
```

| Field	    | Type	    | Required	| Unique |
|---------  |---------  |---------- |--------|    
| username	| String	| true	    | true   |
| password	| String	| true	    | false  |

**Login**

A POST request to the api/auth/login endpoint expects to recieve an object as follows:

```
{
    "username": "CodingGenius",
    "password": "coderules"
}
```

| Field	    | Type	    | Required	| Unique |
|---------  |---------  |---------- |--------|    
| username	| String	| true	    | N/A   |
| password	| String	| true	    | N/A  |

**NOTE**: If successful, a JSON Web Token will be returned. This must be stored and used as authentication for API calls to users endpoints.
