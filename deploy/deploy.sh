#!/usr/bin/env bash
# Run this from the project root on every deploy, after `git pull` (or
# uploading a fresh copy of the code). Assumes setup.sh has already been
# run once on this VPS.
set -euo pipefail

echo "==> Installing dependencies (from lockfile, no surprises)"
npm ci

echo "==> Building"
npm run build

echo "==> Copying static assets into the standalone build"
rm -rf .next/standalone/public .next/standalone/.next/static
cp -r public .next/standalone/public
cp -r .next/static .next/standalone/.next/static

echo "==> Restarting app with PM2"
pm2 reload deploy/ecosystem.config.js --update-env || pm2 start deploy/ecosystem.config.js
pm2 save

echo "==> Deploy complete"
