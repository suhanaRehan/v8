#!/usr/bin/env bash
# One-time setup for a fresh Ubuntu GoDaddy VPS. Read through before running —
# replace yourdomain.com and you@yourdomain.com with your real values first.
#
# Run as a sudo-capable non-root user, e.g.: bash deploy/setup.sh
set -euo pipefail

DOMAIN="yourdomain.com"
EMAIL="you@yourdomain.com"   # for Let's Encrypt renewal notices

echo "==> Updating system"
sudo apt update && sudo apt upgrade -y

echo "==> Installing Node.js 20 LTS (via NodeSource)"
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

echo "==> Installing nginx, certbot, ufw"
sudo apt install -y nginx certbot python3-certbot-nginx ufw

echo "==> Installing PM2"
sudo npm install -g pm2

echo "==> Configuring firewall (SSH + HTTP/HTTPS only)"
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw --force enable
sudo ufw status

echo "==> Enabling nginx site config"
sudo mkdir -p /var/www/certbot
sudo cp deploy/nginx.conf /etc/nginx/sites-available/$DOMAIN
sudo sed -i "s/yourdomain.com/$DOMAIN/g" /etc/nginx/sites-available/$DOMAIN
sudo ln -sf /etc/nginx/sites-available/$DOMAIN /etc/nginx/sites-enabled/$DOMAIN
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl reload nginx

echo "==> Requesting SSL certificate (this edits the nginx config to add HTTPS + redirect)"
sudo certbot --nginx -d "$DOMAIN" -d "www.$DOMAIN" --non-interactive --agree-tos -m "$EMAIL" --redirect

echo "==> Verifying certbot auto-renewal timer is active"
systemctl status certbot.timer --no-pager || sudo systemctl enable --now certbot.timer

echo "==> Done. Next steps:"
echo "   1. npm ci"
echo "   2. npm run build"
echo "   3. cp -r public .next/standalone/public"
echo "   4. cp -r .next/static .next/standalone/.next/static"
echo "   5. pm2 start deploy/ecosystem.config.js && pm2 save && pm2 startup"
