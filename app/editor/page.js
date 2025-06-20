# netlify.toml - הגדרות Netlify מלאות עבור WebMaster Pro

[build]
  publish = "public"
  command = "npm run build"

[build.environment]
  NODE_VERSION = "18"
  NPM_VERSION = "9"

# הגדרות Netlify CMS
[[redirects]]
  from = "/admin/*"
  to = "/admin/index.html"
  status = 200

# הפניות עבור תבניות ספציפיות
[[redirects]]
  from = "/fitness-coach/*"
  to = "/fitness-coach/index.html"
  status = 200

[[redirects]]
  from = "/private-tutor/*"
  to = "/private-tutor/index.html"
  status = 200

[[redirects]]
  from = "/law-office/*"
  to = "/law-office/index.html"
  status = 200

[[redirects]]
  from = "/yoga-studio/*"
  to = "/yoga-studio/index.html"
  status = 200

[[redirects]]
  from = "/psychology-clinic/*"
  to = "/psychology-clinic/index.html"
  status = 200

[[redirects]]
  from = "/barbershop-premium/*"
  to = "/barbershop-premium/index.html"
  status = 200

[[redirects]]
  from = "/payroll-accounting/*"
  to = "/payroll-accounting/index.html"
  status = 200

# הפניות API
[[redirects]]
  from = "/api/*"
  to = "/.netlify/functions/:splat"
  status = 200

# הפניות עבור קבצי נתונים
[[redirects]]
  from = "/data/*"
  to = "/content/:splat"
  status = 200

# Headers עבור Netlify CMS
[[headers]]
  for = "/admin/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"

# Headers עבור תמונות
[[headers]]
  for = "/images/*"
  [headers.values]
    Cache-Control = "public, max-age=604800"

# Headers עבור קבצי CSS ו-JS
[[headers]]
  for = "*.css"
  [headers.values]
    Cache-Control = "public, max-age=31536000"

[[headers]]
  for = "*.js"
  [headers.values]
    Cache-Control = "public, max-age=31536000"

# Forms - טפסי יצירת קשר
[build.processing]
  skip_processing = false
[build.processing.css]
  bundle = true
  minify = true
[build.processing.js]
  bundle = true
  minify = true
[build.processing.html]
  pretty_urls = true

# הגדרות Identity לNetlify CMS
[context.production]
  command = "npm run build"
  
[context.deploy-preview]
  command = "npm run build:preview"

[context.branch-deploy]
  command = "npm run build:dev"

# Functions environment
[functions]
  directory = "netlify/functions"

# Large Media
[build.ignore]
  command = "git diff --quiet $CACHED_COMMIT_REF $COMMIT_REF public/"

# Security Headers
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Content-Security-Policy = """
      default-src 'self';
      script-src 'self' 'unsafe-inline' 'unsafe-eval' https://unpkg.com https://cdn.netlify.com https://www.google-analytics.com;
      style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
      font-src 'self' https://fonts.gstatic.com;
      img-src 'self' data: https: blob:;
      media-src 'self' https:;
      connect-src 'self' https://api.netlify.com https://www.google-analytics.com;
      form-action 'self';
      base-uri 'self';
      frame-ancestors 'none';
    """

# Edge Functions (אם נחליט להשתמש בהם בעתיד)
[[edge_functions]]
  function = "geo-redirect"
  path = "/location/*"

# Environment variables להגדרה ב-Netlify UI:
# NEXT_PUBLIC_API_URL = "https://webmaster-pro-backend.netlify.app"
# NETLIFY_CMS_OAUTH_CLIENT_ID = "your-github-oauth-app-id"
# NETLIFY_CMS_OAUTH_CLIENT_SECRET = "your-github-oauth-app-secret"
