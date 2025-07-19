# Pixel Genius Registration API Documentation

## Overview

The registration process in the Pixel Genius API is a two-step process involving OTP verification. This ensures secure account creation by requiring users to verify their email before completing registration.

**Base URL:** `/accounts/`

---

## Registration Flow

The registration process involves two steps:

1. **Initiate Registration:** User provides their email and password to request an OTP.
2. **Complete Registration:** User submits the OTP to finalize account creation.

### Endpoints

---

### 1. **Initiate Registration**

- **Endpoint:** `/accounts/register/initiate/`
- **Method:** `POST`
- **Description:** Begins the registration process by generating an OTP and sending it to the user's email.

#### Request Payload

```json
{
  "email": "user@example.com",
  "password": "yourpassword123"
}
```

#### Response

- **Success (200):** OTP is successfully sent to the provided email.
  ```json
  {
    "message": "OTP sent to email."
  }
  ```
- **Error (400):** If the email is already registered or the request data is invalid.
  ```json
  {
    "email": ["This email is already registered."]
  }
  ```

---

### 2. **Complete Registration**

- **Endpoint:** `/accounts/register/complete/`
- **Method:** `POST`
- **Description:** Completes the registration by verifying the OTP. Creates the user account if OTP is valid.

#### Request Payload

```json
{
  "email": "user@example.com",
  "password": "yourpassword123",
  "otp": "123456"
}
```

#### Response

- **Success (201):** User is successfully registered and can now log in.
  ```json
  {
    "message": "User registered successfully."
  }
  ```
- **Error (400):** If the OTP is invalid or has expired.
  ```json
  {
    "otp": ["Invalid or expired OTP."]
  }
  ```

---

## Flow Summary

1. **Initiate Registration:** Call `/accounts/register/initiate/` with email and password to generate an OTP.
2. **Complete Registration:** Use `/accounts/register/complete/` with the same email, password, and the received OTP to complete the registration.

---

## Notes for Frontend Developers

- **Sequential Steps:** Ensure the user completes the initiate step before proceeding to the complete step.
- **Error Handling:** Handle errors such as invalid OTPs or already-registered emails gracefully to guide the user.
- **Retry Limitations:** Be mindful of any OTP resend limitations set on the backend.

---
