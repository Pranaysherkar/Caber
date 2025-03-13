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