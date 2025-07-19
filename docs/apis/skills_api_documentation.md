# Skill API's

This document outlines the available endpoints for managing skills in the system. The API uses standard RESTful conventions with JSON for requests and responses. The actions below are protected, requiring authentication and certain permissions.

## Base URL

```
/api/skills/
```

## Authentication

- **GET** methods (list, retrieve) require users to be authenticated.
- **POST**, **PUT**, **PATCH**, and **DELETE** methods require the user to be an admin.

---

## Endpoints

### 1. **List Skills**

**GET** `/api/skills/`

Returns a paginated list of all available skills.

#### Response Example:

```json
{
  "total_items": 150,
  "total_pages": 15,
  "current_page": 1,
  "page_size": 10,
  "next": "http://example.com/api/skills/?page=2",
  "previous": null,
  "results": [
    {
      "id": 1,
      "name": "Skill 1",
      "author": 1,
      "created_at": "2024-10-09T12:00:00Z",
      "updated_at": "2024-10-09T12:00:00Z"
    },
    {
      "id": 2,
      "name": "Skill 2",
      "author": 2,
      "created_at": "2024-10-09T12:00:00Z",
      "updated_at": "2024-10-09T12:00:00Z"
    }
  ]
}
```

### 2. **Retrieve a Skill**

**GET** `/api/skills/{id}/`

Retrieve details of a specific skill by its `id`.

#### Response Example:

```json
{
  "id": 1,
  "name": "Skill 1",
  "author": 1,
  "created_at": "2024-10-09T12:00:00Z",
  "updated_at": "2024-10-09T12:00:00Z"
}
```

### 3. **Create a Skill** (Admin Only)

**POST** `/api/skills/`

Create a new skill by providing the following details:

#### Request Body Example:

```json
{
  "name": "Skill 3"
}
```

#### Response Example:

```json
{
  "id": 3,
  "name": "Skill 3",
  "author": 1,
  "created_at": "2024-10-09T12:10:00Z",
  "updated_at": "2024-10-09T12:10:00Z"
}
```

### 4. **Update a Skill** (Admin Only)

**PUT** `/api/skills/{id}/`

Update an existing skill by providing new data.

#### Request Body Example:

```json
{
  "name": "Updated Skill Name"
}
```

#### Response Example:

```json
{
  "id": 1,
  "name": "Updated Skill Name",
  "author": 1,
  "created_at": "2024-10-09T12:00:00Z",
  "updated_at": "2024-10-09T13:00:00Z"
}
```

### 5. **Partial Update a Skill** (Admin Only)

**PATCH** `/api/skills/{id}/`

Partially update a skill by providing some new data.

#### Request Body Example:

```json
{
  "name": "Partially Updated Skill Name"
}
```

#### Response Example:

```json
{
  "id": 1,
  "name": "Partially Updated Skill Name",
  "author": 1,
  "created_at": "2024-10-09T12:00:00Z",
  "updated_at": "2024-10-09T13:10:00Z"
}
```

### 6. **Delete a Skill** (Admin Only)

**DELETE** `/api/skills/{id}/`

Delete an existing skill.

#### Response:

```json
{
  "detail": "Skill successfully deleted."
}
```

---

## Error Responses

In case of errors, the API will return an appropriate HTTP status code and an error message.

- **404 Not Found**: Skill not found.
- **400 Bad Request**: Invalid data provided in the request.
- **403 Forbidden**: Unauthorized access to a restricted resource.

#### Example Error Response:

```json
{
  "detail": "Skill not found."
}
```

---

## Notes:

- **Pagination**: All list endpoints return paginated results by default. You can control the number of items per page by using the `page_size` query parameter (e.g., `/api/skills/?page_size=20`).
- **Authorization**: For POST, PUT, PATCH, and DELETE requests, ensure the user has admin privileges; otherwise, the API will return a 403 error.
