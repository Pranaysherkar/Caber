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

# Captain Registration API

## Endpoint: `/captains/register`

### Method: POST

### Description
This endpoint allows a new captain to register by providing their personal details and vehicle information. The endpoint validates the input data and creates a new captain in the database if the data is valid.

### Request Body
The request body should be a JSON object with the following fields:

- `firstname` (string, required): The captain's first name. Must be at least 2 characters long.
- `lastname` (string, optional): The captain's last name. Must be at least 2 characters long.
- `email` (string, required): The captain's email address. Must be a valid email format.
- `password` (string, required): The captain's password. Must be at least 6 characters long.
- `vehicle` (object, required): An object containing the vehicle details:
  - `color` (string, required): The vehicle's color. Must be at least 3 characters long.
  - `plate` (string, required): The vehicle's plate number. Must be at least 3 characters long.
  - `capacity` (integer, required): The vehicle's capacity. Must be at least 1.
  - `vehicletype` (string, required): The vehicle type. Must be one of `car`, `motorcycle`, or `auto`.

### Example Request
```json
{
    "firstname": "John",
    "lastname": "Doe",
    "email": "john.doe@example.com",
    "password": "password123",
    "vehicle": {
        "color": "Red",
        "plate": "ABC1234",
        "capacity": 4,
        "vehicletype": "car"
    }
}
```

### Example Response
```json
{
    "token": "your_jwt_token",
    "captain": {
        "_id": "captain_id",
        "firstname": "John",
        "lastname": "Doe",
        "email": "john.doe@example.com",
        "vehicle": {
            "color": "Red",
            "plate": "ABC1234",
            "capacity": 4,
            "vehicletype": "car"
        }
    }
}
```

# Captain Authentication API

This API handles authentication for captains, including login, profile retrieval, and logout.


## Authentication Endpoints

### 1. Captain Login
**Endpoint:**
```
POST /captains/login
```
**Description:** This endpoint allows a captain to log in by providing their email and password. If the credentials are valid, a JWT token is returned.

**Request Body:**
```json
{
  "email": "captain@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "token": "your_jwt_token",
  "captain": {
    "_id": "captain_id",
    "firstname": "John",
    "lastname": "Doe",
    "email": "captain@example.com"
  }
}
```

---

### 2. Captain Profile
**Endpoint:**
```
GET /captains/profile
```
**Description:** This endpoint allows a logged-in captain to retrieve their profile information. The captain must provide a valid JWT token.

**Headers:**
```
Authorization: Bearer <jwt-token>
```

**Response:**
```json
{
  "_id": "captain_id",
  "firstname": "John",
  "lastname": "Doe",
  "email": "captain@example.com",
  "vehicle": {
    "color": "Red",
    "plate": "ABC1234",
    "capacity": 4,
    "vehicletype": "car"
  }
}
```

---

### 3. Captain Logout
**Endpoint:**
```
GET /captains/logout
```
**Description:** This endpoint allows a logged-in captain to log out by invalidating their JWT token.

**Headers:**
```
Authorization: Bearer <jwt-token>
```

**Response:**
```json
{
  "message": "Successfully logged out"
}
```

# Maps API

## Endpoint: `/maps/get-coordinates`

### Method: GET

### Description
This endpoint retrieves the latitude and longitude of a given address.

### Request Headers
- `Authorization` (string, required): The JWT token in the format `Bearer <token>`.

### Query Parameters
- `address` (string, required): The address to get coordinates for. Must be at least 3 characters long.

### Example Request
```
GET /maps/get-coordinates?address=123+Main+Street
Authorization: Bearer your_jwt_token
```

### Example Response
```json
{
    "ltd": 37.7749,
    "lang": -122.4194
}
```

---

## Endpoint: `/maps/get-distance-time`

### Method: GET

### Description
This endpoint retrieves the distance and time between two locations.

### Request Headers
- `Authorization` (string, required): The JWT token in the format `Bearer <token>`.

### Query Parameters
- `origin` (string, required): The starting location. Must be at least 3 characters long.
- `destination` (string, required): The destination location. Must be at least 3 characters long.

### Example Request
```
GET /maps/get-distance-time?origin=123+Main+Street&destination=456+Elm+Street
Authorization: Bearer your_jwt_token
```

### Example Response
```json
{
    "distance": "10 km",
    "duration": "15 mins"
}
```

---

## Endpoint: `/maps/get-suggestions`

### Method: GET

### Description
This endpoint provides autocomplete suggestions for a given input.

### Request Headers
- `Authorization` (string, required): The JWT token in the format `Bearer <token>`.

### Query Parameters
- `input` (string, required): The input string to get suggestions for. Must be at least 3 characters long.

### Example Request
```
GET /maps/get-suggestions?input=Main
Authorization: Bearer your_jwt_token
```

### Example Response
```json
[
    "123 Main Street, San Francisco, CA",
    "Main Avenue, Los Angeles, CA",
    "Main Road, New York, NY"
]
```

---

# Ride API

## Endpoint: `/rides/create`

### Method: POST

### Description
This endpoint allows a user to create a new ride.

### Request Headers
- `Authorization` (string, required): The JWT token in the format `Bearer <token>`.

### Request Body
```json
{
    "origin": "123 Main Street",
    "destination": "456 Elm Street",
    "vehicleType": "car"
}
```

### Example Response
```json
{
    "_id": "ride_id",
    "user": "user_id",
    "origin": "123 Main Street",
    "destination": "456 Elm Street",
    "vehicleType": "car",
    "fare": 250.00,
    "otp": "123456",
    "status": "pending"
}
```

---

## Endpoint: `/rides/get-fare`

### Method: GET

### Description
This endpoint calculates the fare for a ride based on the origin, destination.

### Request Headers
- `Authorization` (string, required): The JWT token in the format `Bearer <token>`.

### Query Parameters
- `origin` (string, required): The starting location. Must be at least 3 characters long.
- `destination` (string, required): The destination location. Must be at least 3 characters long.

### Example Request
```
GET /rides/get-fare?origin=123+Main+Street&destination=456+Elm+Street&vehicleType=car
Authorization: Bearer your_jwt_token
```

### Example Response
```json
{
    "fare": 250.00
}
```

