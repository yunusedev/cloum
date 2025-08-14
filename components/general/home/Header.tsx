"use client"
import Image from "next/image"
import React from "react"
export function Header() {
    return(
        <header className="pt-20 flex flex-col gap-6 items-center justify-center">
            <Image alt="Caloe Image" className="dark:invert rounded-md" width={64} height={128} src={"/caloe.svg"} />
        </header>
    )
}