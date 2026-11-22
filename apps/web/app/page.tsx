import Link from "next/link"

import { Button } from "@paper-ds/ui/components/button"

export default function Page() {
  return (
    <div className="flex min-h-svh px-6 pt-16 pb-6">
      <div className="mx-auto flex w-full max-w-2xl min-w-0 flex-col gap-4 text-sm leading-loose">
        <div>
          <h1 className="font-medium">Paper DS</h1>
          <p>Radix components live in @paper-ds/ui. The gallery follows the current theme.</p>
          <Button asChild className="mt-2">
            <Link href="/gallery">Open gallery</Link>
          </Button>
        </div>
        <div className="text-muted-foreground font-mono text-xs">
          (Press <kbd>d</kbd> to toggle dark mode)
        </div>
      </div>
    </div>
  )
}
