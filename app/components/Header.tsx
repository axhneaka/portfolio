"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

// This would typically come from your app's configuration
const navigationItems = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Contact", href: "/contact" },
]

export function MainNav() {
  const [isDarkMode, setIsDarkMode] = React.useState(false)

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        {/* Logo/Brand */}
        <div className="mr-4 hidden md:flex">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <span className="hidden font-bold sm:inline-block">MyApp</span>
          </Link>
        </div>

        {/* Mobile Menu Trigger */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <SheetHeader>
              <SheetTitle className="text-left">Navigation</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-4 py-4">
              {navigationItems.map((item) => (
                <Link key={item.href} href={item.href} className="block px-2 py-1 text-lg">
                  {item.title}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

        {/* Desktop Navigation */}
        <nav className="hidden gap-6 md:flex">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          {/* Dark Mode Toggle */}
          <Button variant="ghost" size="icon" aria-label="Toggle Dark Mode" onClick={toggleDarkMode}>
            {isDarkMode ? <Moon className="h-6 w-6" /> : <Sun className="h-6 w-6" />}
          </Button>
        </div>
      </div>
    </header>
  )
}

