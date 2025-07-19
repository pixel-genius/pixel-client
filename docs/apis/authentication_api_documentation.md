_Pixel Genius Authentication API Documentation_

---

### 1. **Login API**

**Endpoint:**  
`POST /accounts/login/`

**Description:**  
This API allows users to authenticate using their username and password. Optionally, if OTP verification is enabled, the user must also provide a valid OTP to complete the login process. If no OTP is provided and OTP verification is enabled, the system will generate an OTP and send it to the user’s registered phone number.

**Request Body:**

```json
{
  "username": "string",
  "password": "string",
  "otp": "string" // Optional (required if OTP is enabled)
}
```

**Response Scenarios:**

- **Success with OTP Verification Disabled**:  
  _Status_: `200 OK`  
  _Response_:

  ```json
  {
    "refresh": "refresh_token_here",
    "access": "access_token_here"
  }
  ```

- **Invalid Credentials**:  
  _Status_: `401 Unauthorized`  
  _Response_:

  ```json
  {
    "message": "Invalid credentials."
  }
  ```

- **OTP Required (when OTP is enabled)**:  
  _Status_: `200 OK`  
  _Response_:

  ```json
  {
    "message": "OTP sent to your phone number."
  }
  ```

- **Invalid OTP**:  
  _Status_: `400 Bad Request`  
  _Response_:

  ```json
  {
    "message": "Invalid OTP."
  }
  ```

- **OTP Resend Too Soon**:  
  _Status_: `429 Too Many Requests`  
  _Response_:
  ```json
  {
    "message": "Wait X seconds before requesting a new OTP."
  }
  ```

**Usage:**

- _First Login Attempt_: Submit `username` and `password`. If OTP is required, you’ll get a response telling you the OTP has been sent. You should prompt the user to enter the OTP.
- _OTP Verification_: On receiving the OTP, call the API again with the same `username`, `password`, and the `otp` field filled.

---

### 2. **Logout API**

**Endpoint:**  
`POST /accounts/logout/`

**Description:**  
Logs out the user by blacklisting the provided refresh token.

**Request Body:**

```json
{
  "refresh": "refresh_token_here"
}
```

**Response:**

- **Success**:  
  _Status_: `205 Reset Content`  
  No content.

---

### 3. **Refresh Token API**

**Endpoint:**  
`POST /accounts/refresh/`

**Description:**  
Generates a new access token using a valid refresh token.

**Request Body:**

```json
{
  "refresh": "refresh_token_here"
}
```

**Response:**

- **Success**:  
  _Status_: `200 OK`  
  _Response_:
  ```json
  {
    "access": "new_access_token_here"
  }
  ```

**Usage:**  
Send this request when the access token has expired and a new one is required without logging the user out.

---

### **Token Expiration Info**

- **Access Token**: Expires in 5 minutes.
- **Refresh Token**: Expires in 1 day.

_Note_: These values may change in the future.

---

### **Notes for Frontend:**

- **Token Storage**: Store the `access` and `refresh` tokens securely (e.g., `localStorage`, `sessionStorage`, or a secure cookie).
- **Token Usage**: Attach the `access` token to the `Authorization` header (e.g., `Bearer access_token_here`) when making authenticated requests to other endpoints.
- **Token Refresh**: Use the `/accounts/refresh/` API to get a new access token before the current one expires.
