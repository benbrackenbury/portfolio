import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const authorization = request.headers.get('authorization')
  const expected = `Basic ${Buffer.from(`admin:${process.env.ADMIN_PASSWORD}`).toString('base64')}`

  if (authorization !== expected) {
    return new NextResponse('Authentication required', {
      status: 401,
      headers: { 'WWW-Authenticate': 'Basic realm="Admin"' },
    })
  }
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
}
