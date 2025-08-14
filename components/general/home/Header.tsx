"use client"
import { Icon } from "@iconify/react/dist/iconify.js"
import { useTheme } from "next-themes"
import Image from "next/image"
import React from "react"
export function Header() {
    const {theme, setTheme} = useTheme()
    return(
        <header className="pt-20 flex flex-col gap-6 items-center justify-center">
            <Image alt="Caloe Image" className="dark:invert rounded-md" width={64} height={128} src={"/caloe.svg"} />
            <button onClick={() => setTheme(theme == "dark" ? "light" : "dark")} className="size-10 hover:bg-gray-500/30 group flex items-center justify-center rounded-full transition">
            <Icon className="size-5 text-slate-700 dark:text-slate-200 transition group-hover:text-foreground" icon={`solar:${theme == "dark" ? "moon" : "sun"}-bold`} />
            </button>
        </header>
    )
}