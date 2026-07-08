# Deploying to a GoDaddy VPS

This covers going from "GoDaddy VPS purchased" to "site live on your domain with SSL." It assumes an **Ubuntu** VPS (GoDaddy's VPS plans let you pick the OS at provisioning — pick Ubuntu 22.04 or 24.04 if you haven't already; the scripts in this repo are written for Ubuntu/Debian and use `apt`).

If your VPS came with a control panel like cPanel/Plesk instead of raw SSH access, skip to [If you have cPanel/Plesk instead](#if-you-have-cpanelplesk-instead) at the bottom — the SSH steps below won't apply the same way.

---

## 1. Point your domain at the VPS (in GoDaddy's DNS panel)

1. Find your VPS's public IP address — it's in your GoDaddy VPS dashboard ("Server Details" or similar).
2. Go to **GoDaddy → My Products → DNS** (or **Domain Manager → DNS**) for your domain.
3. Add or edit these records:

   | Type | Name | Value | TTL |
   |---|---|---|---|
   | A | `@` | your VPS IP | 600 (or default) |
   | A | `www` | your VPS IP | 600 (or default) |

4. Wait for DNS to propagate. This can take anywhere from a few minutes to a few hours. Check with:
   ```bash
   nslookup yourdomain.com
   ```
   Once it returns your VPS's IP, move on — **SSL setup in step 3 will fail if DNS isn't pointing at the server yet.**

---

## 2. Connect to the VPS and get the code onto it

GoDaddy gives you the VPS's IP and root credentials in the welcome email / VPS dashboard.

```bash
ssh root@YOUR_VPS_IP
```

Create a non-root user to actually run things as (recommended — don't run the app as root):

```bash
adduser deploy
usermod -aG sudo deploy
su - deploy
```

Get your code onto the server — either clone from your git remote, or `scp`/`rsync` the project zip up and unzip it:

```bash
# from your local machine
scp v7_1_3_secured.zip deploy@YOUR_VPS_IP:~/
# then on the server
unzip v7_1_3_secured.zip && cd v7.11
```

---

## 3. Run the one-time setup script

Edit the top of `deploy/setup.sh` first:

```bash
DOMAIN="yourdomain.com"
EMAIL="you@yourdomain.com"
```

Then run it:

```bash
bash deploy/setup.sh
```

This installs Node.js 20, nginx, certbot, PM2, opens the firewall (only SSH/HTTP/HTTPS), wires up the nginx site config, and **requests + installs your SSL certificate via Let's Encrypt** — the script's last step (`certbot --nginx ...`) is what actually gets you `https://yourdomain.com` with a valid, trusted certificate and auto-configures the HTTP → HTTPS redirect.

If certbot fails here, it's almost always because DNS from step 1 hasn't propagated yet — re-check `nslookup yourdomain.com` and try again once it resolves.

---

## 4. Set your environment variables

Create `.env.local` in the project root on the server (this file never leaves the server — it's git-ignored):

```bash
nano .env.local
```

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
RESEND_API_KEY=your_resend_api_key
CONTACT_NOTIFY_EMAIL=you@yourdomain.com
```

---

## 5. Build and start the app

```bash
bash deploy/deploy.sh
```

This installs dependencies from the lockfile, builds, copies static assets into the standalone build, and starts (or reloads) the app under PM2.

Make PM2 survive a server reboot:

```bash
pm2 startup     # copy/paste and run the command it prints
pm2 save
```

---

## 6. Verify

- `https://yourdomain.com` loads with a padlock (no certificate warning)
- `http://yourdomain.com` redirects to `https://yourdomain.com`
- `pm2 status` shows the app as `online`
- `pm2 logs softwaresphere` shows no startup errors

---

## Future deploys

Every time you push a code change:

```bash
ssh deploy@YOUR_VPS_IP
cd v7.11
git pull            # or re-upload the updated files
bash deploy/deploy.sh
```

## Renewing SSL

Nothing to do — certbot installs a systemd timer (`certbot.timer`) that renews automatically before the certificate (valid 90 days) expires. You can confirm it's active with:

```bash
systemctl status certbot.timer
```

or force a dry-run to make sure renewal actually works:

```bash
sudo certbot renew --dry-run
```

---

## Troubleshooting

**"502 Bad Gateway" from nginx**
The Next.js app isn't running or isn't listening on port 3000. Check `pm2 status` and `pm2 logs softwaresphere`.

**Certbot: "Could not verify... connection refused / timeout"**
DNS isn't pointing at this server yet, or the firewall is blocking port 80. Re-check step 1, and `sudo ufw status`.

**Site loads over HTTP but not HTTPS**
Certbot may not have completed. Re-run:
```bash
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

**Env vars not taking effect**
PM2 caches environment variables at process start. After editing `.env.local`, run `pm2 restart softwaresphere --update-env`.

---

## If you have cPanel/Plesk instead

If your GoDaddy VPS was provisioned with cPanel/Plesk rather than raw SSH, the concepts are the same but the tooling differs:
- Use the panel's **Node.js Selector / Node.js App** feature instead of PM2 directly (it wraps Passenger, which manages the Node process for you)
- Use the panel's **SSL/TLS → Let's Encrypt** section instead of running `certbot` manually
- DNS (step 1) and environment variables (step 4) work the same way, just set through the panel's UI instead of a config file
- You likely won't need `deploy/nginx.conf` or `deploy/ecosystem.config.js` — the panel manages the reverse proxy and process for you

If that's your setup, let me know what panel you have and I can write a version of this guide tailored to it.
