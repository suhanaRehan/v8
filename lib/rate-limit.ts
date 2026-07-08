// Minimal in-memory rate limiter.
//
// This is intentionally simple: it lives in the Node process's memory, so
// it works well for a single-instance VPS deployment (which is what most
// GoDaddy VPS Next.js setups are). It resets on every deploy/restart, and
// it will NOT share state across multiple app instances/processes (e.g. if
// you later run this behind PM2 in cluster mode with >1 worker, or scale
// to multiple servers). If you outgrow a single process, swap this for a
// shared store like Redis/Upstash instead.

type Bucket = { count: number; resetAt: number }

const buckets = new Map<string, Bucket>()

// Periodically clear out stale buckets so memory doesn't grow forever.
setInterval(() => {
  const now = Date.now()
  for (const [key, bucket] of buckets) {
    if (bucket.resetAt < now) buckets.delete(key)
  }
}, 5 * 60 * 1000).unref?.()

/**
 * Returns true if the request should be allowed, false if it's over the limit.
 * @param key   Unique identifier for the caller (e.g. `contact:1.2.3.4`)
 * @param limit Max requests allowed within the window
 * @param windowMs Window size in milliseconds
 */
export function rateLimit(key: string, limit: number, windowMs: number): boolean {
  const now = Date.now()
  const bucket = buckets.get(key)

  if (!bucket || bucket.resetAt < now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs })
    return true
  }

  if (bucket.count >= limit) return false

  bucket.count += 1
  return true
}

/** Best-effort client IP extraction behind a reverse proxy (nginx). */
export function getClientIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for')
  if (forwarded) return forwarded.split(',')[0].trim()
  return request.headers.get('x-real-ip') || 'unknown'
}
