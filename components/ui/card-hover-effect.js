
import  React from "react"

import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"

export const CardHoverEffect = ({
  items,
  className,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", className)}>
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-lg">{item.icon}</div>
              <span
                className={cn(
                  "text-sm font-medium px-2 py-1 rounded-full",
                  item.change.startsWith("+") ? "text-green-400 bg-green-400/10" : "text-red-400 bg-red-400/10",
                )}
              >
                {item.change}
              </span>
            </div>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
            <div className="text-2xl font-bold text-white mt-2">{item.value}</div>
          </Card>
        </div>
      ))}
    </div>
  )
}

export const Card = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-6 overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 group-hover:border-purple-500/50 relative z-20 transition-all duration-200",
        className,
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  )
}

export const CardTitle = ({
  className,
  children,
}) => {
  return <h4 className={cn("text-white font-bold tracking-wide", className)}>{children}</h4>
}

export const CardDescription = ({
  className,
  children,
}) => {
  return <p className={cn("text-white/60 tracking-wide leading-relaxed text-sm", className)}>{children}</p>
}
