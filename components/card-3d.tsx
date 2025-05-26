"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

interface Card3DProps {
  id: number
  title: string
  description: string
  icon: string
  gradient: string
}

export function Card3D({ title, description, icon, gradient }: Card3DProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="perspective-1000 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card
        className={`
          relative h-80 cursor-pointer transition-all duration-500 ease-out transform-gpu
          ${isHovered ? "rotate-y-12 rotate-x-12 scale-105 shadow-2xl shadow-purple-500/25" : "hover:shadow-lg"}
          bg-gradient-to-br ${gradient} border-0 overflow-hidden
        `}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Shine Effect */}
        <div
          className={`
            absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent
            transition-all duration-500 ease-out
            ${isHovered ? "translate-x-full" : "-translate-x-full"}
          `}
          style={{
            transform: isHovered ? "translateX(100%)" : "translateX(-100%)",
          }}
        />

        {/* Card Content */}
        <CardContent className="relative h-full p-8 flex flex-col justify-between text-white z-10">
          <div>
            <div className="text-4xl mb-4 transform transition-transform duration-300 group-hover:scale-110">
              {icon}
            </div>
            <h3 className="text-2xl font-bold mb-4 leading-tight">{title}</h3>
          </div>

          <p className="text-white/90 leading-relaxed">{description}</p>

          {/* Floating Elements */}
          <div className="absolute top-4 right-4 w-2 h-2 bg-white/30 rounded-full animate-pulse" />
          <div className="absolute bottom-4 left-4 w-1 h-1 bg-white/40 rounded-full animate-ping" />
        </CardContent>

        {/* 3D Border Effect */}
        <div
          className={`
            absolute inset-0 rounded-lg border-2 border-white/20
            transition-all duration-500
            ${isHovered ? "border-white/40" : ""}
          `}
          style={{
            transform: "translateZ(1px)",
          }}
        />

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        </div>
      </Card>
    </div>
  )
}
