# Users API

This document outlines the available endpoints for managing users in the system. All standard CRUD operations are restricted to admin users, while a custom action allows users to update their own profile.

## Base URL

```
/api/users/
```

## Authentication

- Admin users have full access to all actions (create, retrieve, update, delete).
- Non-admin users can only update their own profile via the `PATCH /api/users/update-profile/` endpoint.

---

## Endpoints

### 1. **List Users** (Admin Only)

**GET** `/api/users/`

Returns a list of all users in the system.

#### Response Example:

```json
[
  {
    "id": 1,
    "username": "john_doe",
    "email": "john@example.com",
    "first_name": "John",
    "last_name": "Doe",
    "skills": [1, 2],
    "biography": "Experienced developer.",
    "is_staff": false,
    "is_active": true
  },
  {
    "id": 2,
    "username": "jane_doe",
    "email": "jane@example.com",
    "first_name": "Jane",
    "last_name": "Doe",
    "skills": [2, 3],
    "biography": "Full-stack developer.",
    "is_staff": true,
    "is_active": true
  }
]
```

---

### 2. **Retrieve a User** (Admin Only)

**GET** `/api/users/{id}/`

Retrieve details of a specific user by their `id`.

#### Response Example:

```json
{
  "id": 1,
  "username": "john_doe",
  "email": "john@example.com",
  "first_name": "John",
  "last_name": "Doe",
  "skills": [1, 2],
  "biography": "Experienced developer.",
  "is_staff": false,
  "is_active": true
}
```

---

### 3. **Create a User** (Admin Only)

**POST** `/api/users/`

Admin users can create new users. Password is required for creating a new user.

#### Request Body Example:

```json
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "my_secure_password",
  "first_name": "John",
  "last_name": "Doe",
  "skills": [1, 2],
  "biography": "Experienced developer.",
  "is_staff": false,
  "is_active": true
}
```

#### Response Example:

```json
{
  "id": 1,
  "username": "john_doe",
  "email": "john@example.com",
  "first_name": "John",
  "last_name": "Doe",
  "skills": [1, 2],
  "biography": "Experienced developer.",
  "is_staff": false,
  "is_active": true
}
```

---

### 4. **Update a User** (Admin Only)

**PUT** `/api/users/{id}/`

Admin users can update user details. The password is **optional** for updates. If a password is provided, it will be hashed before saving.

#### Request Body Example (Update without password):

```json
{
  "first_name": "John",
  "last_name": "Smith",
  "skills": [1, 3],
  "biography": "Updated biography."
}
```

#### Response Example:

```json
{
  "id": 1,
  "username": "john_doe",
  "email": "john@example.com",
  "first_name": "John",
  "last_name": "Smith",
  "skills": [1, 3],
  "biography": "Updated biography.",
  "is_staff": false,
  "is_active": true
}
```

---

### 5. **Delete a User** (Admin Only)

**DELETE** `/api/users/{id}/`

Admin users can delete a user by their `id`.

#### Response Example:

```json
{
  "detail": "User deleted successfully."
}
```

---

### 6. **Update User Profile** (Self or Admin)

**PATCH** `/api/users/update-profile/`

Authenticated users can update their own profile (fields: `first_name`, `last_name`, `skills`, `biography`). Admins can update any user's profile by providing a `user_id`.

#### Request Body Example (Self-Update):

```json
{
  "first_name": "Jane",
  "last_name": "Smith",
  "skills": [2, 3],
  "biography": "Updated biography."
}
```

#### Request Body Example (Admin-Update another user):

```json
{
  "user_id": 2,
  "first_name": "John",
  "last_name": "Doe",
  "skills": [1, 3],
  "biography": "Updated biography by admin."
}
```

#### Response Example:

```json
{
  "id": 1,
  "username": "jane_doe",
  "email": "jane@example.com",
  "first_name": "Jane",
  "last_name": "Smith",
  "skills": [2, 3],
  "biography": "Updated biography.",
  "is_staff": true,
  "is_active": true
}
```

---

## Error Responses

In case of errors, the API will return appropriate HTTP status codes and error messages.

- **404 Not Found**: User not found.
- **400 Bad Request**: Invalid data provided in the request.
- **403 Forbidden**: Unauthorized access to a restricted resource.

#### Example Error Response (User not found):

```json
{
  "detail": "User not found."
}
```

---

## Notes:

- **Authentication Required**: All endpoints require the user to be authenticated.
- **Admin-Only Access**: The standard CRUD operations (list, retrieve, create, update, delete) are restricted to admin users.
- **Self-Update Action**: Users can only update their own profile via `/api/users/update-profile/`, unless an admin is performing the update.
