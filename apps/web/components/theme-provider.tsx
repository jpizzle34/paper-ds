"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "lucide-react"
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes"

import { Button } from "@paper-ds/ui/components/button"

function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      {children}
      <ThemeSwitch />
    </NextThemesProvider>
  )
}

function isTypingTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) {
    return false
  }

  return (
    target.isContentEditable ||
    target.tagName === "INPUT" ||
    target.tagName === "TEXTAREA" ||
    target.tagName === "SELECT"
  )
}

function ThemeSwitch() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const themeRef = React.useRef<"light" | "dark">("light")

  React.useEffect(() => {
    setMounted(true)
  }, [])

  React.useEffect(() => {
    if (resolvedTheme === "light" || resolvedTheme === "dark") {
      themeRef.current = resolvedTheme
    }
  }, [resolvedTheme])

  const apply = React.useCallback(
    (next: "light" | "dark") => {
      themeRef.current = next
      setTheme(next)
    },
    [setTheme]
  )

  React.useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.defaultPrevented || event.repeat) {
        return
      }

      if (event.metaKey || event.ctrlKey || event.altKey) {
        return
      }

      if (event.key.toLowerCase() !== "d") {
        return
      }

      if (isTypingTarget(event.target)) {
        return
      }

      event.preventDefault()
      apply(themeRef.current === "dark" ? "light" : "dark")
    }

    window.addEventListener("keydown", onKeyDown)

    return () => {
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [apply])

  const theme =
    mounted && (resolvedTheme === "light" || resolvedTheme === "dark")
      ? resolvedTheme
      : null
  const next = theme === "dark" ? "light" : "dark"

  return (
    <div className="fixed top-4 right-4">
      <Button
        variant="outline"
        disabled={theme === null}
        aria-label={theme === null ? "Switch theme" : `Switch to ${next} theme`}
        onClick={() => apply(next)}
      >
        {theme === "dark" ? (
          <SunIcon data-icon="inline-start" />
        ) : (
          <MoonIcon data-icon="inline-start" />
        )}
        {theme === null ? "Theme" : next === "dark" ? "Dark" : "Light"}
      </Button>
    </div>
  )
}

export { ThemeProvider }
