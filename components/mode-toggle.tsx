"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
    const { setTheme } = useTheme()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="relative group overflow-hidden border-white/10 bg-white/5 backdrop-blur-sm hover:bg-primary/20 hover:border-primary/50 transition-all duration-300">
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-foreground group-hover:text-primary" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-foreground group-hover:text-primary" />
                    <span className="sr-only">Toggle theme</span>
                    <div className="absolute inset-0 bg-primary/20 blur-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-black/80 backdrop-blur-xl border-white/10 text-foreground z-[60]">
                <DropdownMenuItem onClick={() => setTheme("light")} className="hover:bg-primary/20 hover:text-primary focus:bg-primary/20 focus:text-primary cursor-pointer">
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")} className="hover:bg-primary/20 hover:text-primary focus:bg-primary/20 focus:text-primary cursor-pointer">
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")} className="hover:bg-primary/20 hover:text-primary focus:bg-primary/20 focus:text-primary cursor-pointer">
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
