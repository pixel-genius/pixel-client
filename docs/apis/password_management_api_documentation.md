# Password Management API

This document outlines the available endpoints for managing passwords, including **Forgot Password** (using OTP) and **Reset Password** APIs.

## Authentication

- **Forgot Password**: This does not require authentication. The user provides their username or email to receive an OTP for password reset.
- **Reset Password**: The user must be authenticated to reset their password.

---

## Endpoints

### 1. **Forgot Password** (OTP-based)

**POST** `/api/forgot-password/`

This endpoint handles the process of requesting and validating OTPs for resetting a user's password.

#### Request Flow:

1. **Request OTP**: The user provides their username, and an OTP is generated and sent to their phone number (simulated or implemented via an SMS service).
2. **Validate OTP and Reset Password**: The user provides the OTP and their new password to reset their password.

#### Request Parameters:

- **username** (string, required): The username of the user attempting to reset their password.
- **otp** (string, optional for OTP request, required for password reset): The OTP sent to the user's phone.
- **new_password** (string, required for password reset): The new password the user wants to set.

#### Example 1: Request OTP

**Request:**

```json
{
  "username": "john_doe"
}
```

**Response:**

```json
{
  "message": "OTP sent to your phone number."
}
```

#### Example 2: Validate OTP and Reset Password

**Request:**

```json
{
  "username": "john_doe",
  "otp": "123456",
  "new_password": "newpassword123"
}
```

**Response:**

```json
{
  "message": "Password updated successfully."
}
```

---

#### Error Responses:

- **400 Bad Request**: If required parameters are missing or invalid, such as an incorrect OTP or invalid new password.

  Example:

  ```json
  {
    "message": "Invalid OTP."
  }
  ```

- **404 Not Found**: If the user cannot be found.

  Example:

  ```json
  {
    "message": "User not found."
  }
  ```

- **429 Too Many Requests**: If the user tries to request a new OTP too soon.

  Example:

  ```json
  {
    "message": "Wait 60 seconds before requesting a new OTP."
  }
  ```

---

### 2. **Reset Password** (Authenticated Users)

**POST** `/api/reset-password/`

This endpoint allows an authenticated user to reset their password by providing their current password and a new password.

#### Request Parameters:

- **current_password** (string, required): The user's current password.
- **new_password** (string, required): The new password the user wants to set.

#### Example Request:

```json
{
  "current_password": "oldpassword123",
  "new_password": "newpassword123"
}
```

#### Example Response:

```json
{
  "message": "Password updated successfully."
}
```

---

#### Error Responses:

- **400 Bad Request**: If the current password is incorrect or the new password does not meet validation requirements.

  Example:

  ```json
  {
    "message": "Invalid current password."
  }
  ```

- **403 Forbidden**: If the user is not authenticated or the token is invalid.

  Example:

  ```json
  {
    "message": "You do not have permission to perform this action."
  }
  ```

---

### URL Structure

| Method | Endpoint                | Description                            |
| ------ | ----------------------- | -------------------------------------- |
| POST   | `/api/forgot-password/` | Request OTP and reset password via OTP |
| POST   | `/api/reset-password/`  | Reset password for authenticated users |
