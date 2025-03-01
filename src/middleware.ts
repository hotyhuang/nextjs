import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Get the pathname of the request
  const path = request.nextUrl.pathname

  // Add custom headers
  const response = NextResponse.next()
  response.headers.set('x-custom-header', 'hello from middleware')

  // Log the request (you would see this in your server logs)
  console.log(`[Middleware] ${new Date().toISOString()} - ${request.method} ${path}`)

  // Example of path-specific middleware
  if (path.startsWith('/image/')) {
    // You could add specific headers for image routes
    response.headers.set('x-route-type', 'image')
    
    // Example of checking if image exists (using your data)
    const imageId = path.split('/')[2] // gets the [id] from /image/[id]
    if (imageId && !['next-logo', 'vercel-logo'].includes(imageId)) {
      console.log(`[Middleware] Invalid image ID requested: ${imageId}`)
    }
  }

  return response
}

// Configure which paths the middleware should run on
export const config = {
  // Specify the paths that should trigger the middleware
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
} 