export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};

export default function middleware(req) {
  const country = req.headers.get('x-vercel-ip-country');

  if (country === 'IT') {
    return Response.redirect('https://globalfind.netlify.app/', 302);
  }
}
