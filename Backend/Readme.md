# User Registration API

## Endpoint: `/users/register`

### Method: POST

### Description
This endpoint allows a new user to register by providing their firstname, lastname, email, and password. The endpoint validates the input data and creates a new user in the database if the data is valid.

### Request Body
The request body should be a JSON object with the following fields:

- `firstname` (string, required): The user's first name. Must be at least 2 characters long.
- `lastname` (string, optional): The user's last name. Must be at least 2 characters long.
- `email` (string, required): The user's email address. Must be a valid email format.
- `password` (string, required): The user's password. Must be at least 6 characters long.

### Example Request
```json
{
    "firstname": "John",
    "lastname": "Doe",
    "email": "john.doe@example.com",
    "password": "password123"
}
```

### Example Response
```json
{
    "token": "your_jwt_token",
    "user": {
        "_id": "user_id",
        "firstname": "John",
        "lastname": "Doe",
        "email": "john.doe@example.com"
    }
}
```

## Endpoint: `/users/login`

### Method: POST

### Description
This endpoint allows an existing user to log in by providing their email and password. The endpoint validates the input data and returns a JWT token if the credentials are valid.

### Request Body
The request body should be a JSON object with the following fields:

- `email` (string, required): The user's email address. Must be a valid email format.
- `password` (string, required): The user's password. Must be at least 6 characters long.

### Example Request
```json
{
    "email": "john.doe@example.com",
    "password": "password123"
}
```

### Example Response
```json
{
    "token": "your_jwt_token",
    "user": {
        "_id": "user_id",
        "firstname": "John",
        "lastname": "Doe",
        "email": "john.doe@example.com"
    }
}
```

## Endpoint: `/users/profile`

### Method: GET

### Description
This endpoint allows a logged-in user to retrieve their profile information. The user must provide a valid JWT token.

### Request Headers
- `Authorization` (string, required): The JWT token in the format `Bearer <token>`.

### Example Request
```
GET /users/profile
Authorization: Bearer your_jwt_token
```

### Example Response
```json
{
    "_id": "user_id",
    "firstname": "John",
    "lastname": "Doe",
    "email": "john.doe@example.com"
}
```

## Endpoint: `/users/logout`

### Method: GET

### Description
This endpoint allows a logged-in user to log out by invalidating their JWT token. The user must provide a valid JWT token.

### Request Headers
- `Authorization` (string, required): The JWT token in the format `Bearer <token>`.

### Example Request
```
GET /users/logout
Authorization: Bearer your_jwt_token
```

### Example Response
```json
{
    "message": "Successfully logged out"
}
```