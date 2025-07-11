# HAProxy Configuration for Pixel Client

This document provides HAProxy configuration examples for the different environments:

## Configuration Structure

```
frontend pixel_frontend
    bind *:80
    bind *:443 ssl crt /etc/ssl/certs/pixel.pem

    # Production (main branch)
    acl is_production hdr(host) -i pixel.yourdomain.com
    use_backend pixel_production if is_production

    # Development (dev branch)
    acl is_development hdr(host) -i dev.pixel.yourdomain.com
    use_backend pixel_development if is_development

    # PR Previews
    acl is_preview hdr(host) -m reg pr[0-9]+\.pixel\.yourdomain\.com
    use_backend pixel_preview if is_preview

backend pixel_production
    balance roundrobin
    server prod1 127.0.0.1:3000 check

backend pixel_development
    balance roundrobin
    server dev1 127.0.0.1:3001 check

backend pixel_preview
    balance roundrobin
    # Dynamic servers for PR previews
    # Example: server pr123 127.0.0.1:3223 check
    # Port calculation: 3100 + PR_NUMBER
```

## Environment Details

### Production (Main Branch)

- **Domain**: `pixel.yourdomain.com`
- **Port**: `3000`
- **Container**: `client`
- **Image**: `mrbadri/pixel-client:latest`

### Development (Dev Branch)

- **Domain**: `dev.pixel.yourdomain.com`
- **Port**: `3001`
- **Container**: `client-dev`
- **Image**: `mrbadri/pixel-client:dev`

### PR Previews

- **Domain Pattern**: `pr{number}.pixel.yourdomain.com`
- **Port Range**: `3100 + PR_NUMBER`
- **Container**: `client-preview-{PR_NUMBER}`
- **Image**: `mrbadri/pixel-client:pr-{PR_NUMBER}`

## Example PR Preview URLs

- PR #1: `http://82.115.24.87:3101` or `pr1.pixel.yourdomain.com`
- PR #15: `http://82.115.24.87:3115` or `pr15.pixel.yourdomain.com`
- PR #123: `http://82.115.24.87:3223` or `pr123.pixel.yourdomain.com`

## Port Management

The system automatically assigns ports using the formula: `3100 + PR_NUMBER`

This ensures:

- No port conflicts
- Predictable URLs
- Easy cleanup
- Scalable for many PRs

## Notes

1. Update the domain names in the HAProxy config to match your actual domain
2. Ensure SSL certificates are properly configured
3. The IP `82.115.24.87` is your current server IP
4. PR containers are automatically cleaned up when PRs are closed
