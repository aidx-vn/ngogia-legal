# Environment Variables — Ngogia

## Frontend (Vite build-time)

Prefix `VITE_` — baked vào bundle, **không đặt secrets ở đây**.

| Variable | Example | Description |
|---|---|---|
| `VITE_API_URL` | `https://ngogia.aidx.vn/api` | Base URL của backend API |
| `VITE_GOOGLE_CLIENT_ID` | `123456.apps.googleusercontent.com` | Google OAuth Client ID |
| `VITE_FACEBOOK_APP_ID` | `987654321` | Meta (Facebook) App ID |

Đặt trong `.env.local` để dev local (không commit), hoặc trong GitHub Actions secrets khi build.

---

## Backend API (`ngogia.aidx.vn/api`)

Server-side, **never expose ra frontend**.

### Google OAuth

| Variable | Description |
|---|---|
| `GOOGLE_CLIENT_ID` | Lấy từ Google Cloud Console → APIs & Services → Credentials |
| `GOOGLE_CLIENT_SECRET` | Client secret (giữ bí mật) |
| `GOOGLE_REDIRECT_URI` | `https://ngogia.aidx.vn/api/auth/google/callback` |

**Cách tạo:** Google Cloud Console → Create OAuth 2.0 Client → Web application  
Authorized redirect URIs: thêm `https://ngogia.aidx.vn/api/auth/google/callback`

### Facebook / Meta OAuth

| Variable | Description |
|---|---|
| `FACEBOOK_APP_ID` | Lấy từ Meta for Developers → App → Settings → Basic |
| `FACEBOOK_APP_SECRET` | App secret (giữ bí mật) |
| `FACEBOOK_REDIRECT_URI` | `https://ngogia.aidx.vn/api/auth/facebook/callback` |

**Cách tạo:** developers.facebook.com → Create App → Consumer → Add Facebook Login  
Valid OAuth Redirect URIs: thêm `https://ngogia.aidx.vn/api/auth/facebook/callback`

### App & Session

| Variable | Example | Description |
|---|---|---|
| `JWT_SECRET` | *(random 64 chars)* | Ký JWT tokens |
| `SESSION_SECRET` | *(random 64 chars)* | Express session / cookie secret |
| `APP_ENV` | `production` | Môi trường |
| `PORT` | `3000` | Port API lắng nghe |

### Database

| Variable | Example | Description |
|---|---|---|
| `DATABASE_URL` | `postgresql://user:pass@pgbouncer-prod:5432/ngogia` | Kết nối qua pgbouncer (ADR-009) |
| `REDIS_URL` | `redis://dragonfly:6379` | Cache / session store |

---

## GitHub Actions Secrets (org-level)

| Secret | Description |
|---|---|
| `SSH_HOST` | `180.93.137.133` |
| `SSH_USER` | `devops` |
| `SSH_KEY` | ED25519 private key cho deploy |
| `TELEGRAM_TO` | Chat ID nhận thông báo deploy |
| `TELEGRAM_TOKEN` | Telegram bot token |
