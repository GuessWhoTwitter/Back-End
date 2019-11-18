# Back-End
Node.js server with SQL database

# Overview
This API is used as part of the application Safe Space and allows for CRUD operations to be performed on both on the application's users and messages.

This documentation will cover all of the data models and endpoints which can be access via

https://backend-guesswho.herokuapp.com/

# Endpoints

# Authentication

| Request Type  |	Endpoint            |	        Description     |
| ------------  |  --------------       |       ------------------  | 
| POST	        |    /api/auth/register	|           Creates User    |
| POST	        |    /api/auth/login	|           Creates Session |

*Sessions and Cookies Used to Verify Users

# Data Models

# Authentication

**Register**

A POST request to the /api/auth/register endpoint expects to recieve an object as follows:

{
    "username": "CodingGenius",
    "password": "coderules"
}

| Field	    | Type	    | Required	| Unique |
|---------  |---------  |---------- |--------|    
| username	| String	| true	    | true   |
| password	| String	| true	    | false  |

**Login**

A POST request to the api/auth/login endpoint expects to recieve an object as follows:

{
    "username": "CodingGenius",
    "password": "coderules"
}

| Field	    | Type	    | Required	| Unique |
|---------  |---------  |---------- |--------|    
| username	| String	| true	    | N/A   |
| password	| String	| true	    | N/A  |

NOTE: If successful, a session will be returned. This must be stored and used as authentication for API calls to users or messages endpoints.
