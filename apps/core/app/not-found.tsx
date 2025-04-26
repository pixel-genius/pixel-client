import Link from "next/link"

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-screen gap-8">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl font-bold">404</h1>
        <h2 className="text-xl font-semibold text-center">
          Oops! The page you're looking for doesn't exist.
        </h2>
        <p className="text-sm text-center text-muted-foreground">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
      </div>
      <div className="flex gap-4">
        <Link href="/" className="bg-primary text-primary-foreground px-4 py-2 rounded-md">
          Go Home
        </Link>
        <Link href="/auth/login" className="bg-secondary text-secondary-foreground px-4 py-2 rounded-md">
          Sign In
        </Link>
      </div>
    </div>
  )
} 