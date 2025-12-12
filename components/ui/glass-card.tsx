import * as React from "react"
import { cn } from "@/lib/utils"

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "dark" | "neon"
    hoverEffect?: boolean
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
    ({ className, variant = "default", hoverEffect = true, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "rounded-xl border transition-all duration-300",
                    // Base Glass Styles
                    variant === "default" && "bg-white/5 border-white/10 backdrop-blur-xl shadow-lg",
                    variant === "dark" && "bg-black/40 border-white/5 backdrop-blur-md shadow-xl",
                    variant === "neon" && "bg-black/80 border-primary/20 backdrop-blur-xl shadow-[0_0_15px_-5px_var(--primary)]",

                    // Hover Effects
                    hoverEffect && "hover:scale-[1.02] hover:bg-white/10 hover:border-white/20 hover:shadow-2xl",
                    hoverEffect && variant === "neon" && "hover:border-primary/50 hover:shadow-[0_0_25px_-5px_var(--primary)]",

                    className
                )}
                {...props}
            />
        )
    }
)
GlassCard.displayName = "GlassCard"

export { GlassCard }
