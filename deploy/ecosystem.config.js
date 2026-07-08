// PM2 process manager config.
//
// Usage (from the project root, after `npm run build`):
//   pm2 start deploy/ecosystem.config.js
//   pm2 save
//   pm2 startup     <- follow the printed instructions once, so PM2
//                      restarts your app automatically after a VPS reboot
//
// This runs the `output: standalone` server (see next.config.js), which is
// the lean, self-contained build meant for exactly this kind of deploy.

module.exports = {
  apps: [
    {
      name: 'softwaresphere',
      // next.config.js has output: 'standalone', which generates this file
      script: '.next/standalone/server.js',
      cwd: __dirname + '/..',
      instances: 1, // keep at 1 unless you also move rate-limit.ts to a shared store (see its comments)
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
        HOSTNAME: '127.0.0.1', // only listen on localhost; nginx is the public entry point
      },
      autorestart: true,
      max_restarts: 10,
      restart_delay: 3000,
      // Basic log rotation-friendly paths; install `pm2-logrotate` for real rotation
      out_file: './logs/out.log',
      error_file: './logs/error.log',
      time: true,
    },
  ],
}
