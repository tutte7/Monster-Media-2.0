"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface HeroBackgroundProps {
    className?: string
}

export function HeroBackground({ className }: HeroBackgroundProps) {
    return (
        <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
            {/* Orb 1 - Top Left */}
            <motion.div
                animate={{
                    x: [0, 50, 0],
                    y: [0, 30, 0],
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[#a3c413]/10 blur-[120px]"
            />

            {/* Orb 2 - Right Bottom (Higher up) */}
            <motion.div
                animate={{
                    x: [0, -30, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                }}
                className="absolute top-[20%] -right-[10%] w-[40%] h-[60%] rounded-full bg-[#44962a]/10 blur-[120px]"
            />

            {/* Optional: Subtle ambient pulse overlay */}
            <div className="absolute inset-0 bg-transparent" />
        </div>
    )
}
