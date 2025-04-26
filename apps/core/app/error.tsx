"use client"

import Link from "next/link"
import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="container flex flex-col items-center justify-center min-h-screen gap-8">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl font-bold">Error</h1>
        <h2 className="text-xl font-semibold text-center">
          Something went wrong!
        </h2>
        <p className="text-sm text-center text-muted-foreground">
          {error.message || "An unexpected error occurred"}
        </p>
      </div>
      <div className="flex gap-4">
        <button 
          onClick={() => reset()} 
          className="bg-primary text-primary-foreground px-4 py-2 rounded-md"
        >
          Try again
        </button>
        <Link href="/" className="bg-secondary text-secondary-foreground px-4 py-2 rounded-md">
          Go Home
        </Link>
      </div>
    </div>
  )
} 