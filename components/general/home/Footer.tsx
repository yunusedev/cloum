import { Icon } from "@iconify/react/dist/iconify.js"
import Link from "next/link"
import React from "react"
export function Footer() {

    const contactInfos = [
        {
            icon: "instagram-icon",
            name: "Instagram",
            description: "@yunus.emregun",
            href: "https://instagram.com/yunus.emregun"
        },
        {
            icon: "github-icon",
            name: "Github",
            description: "@yunusedev",
            href: "https://github.com/yunusedev"
        },
        {
            icon: "apple",
            name: "E-mail",
            description: "yunusemregun222@icloud.com",
        }
    ]
    return(
        <footer className="w-full p-12 pb-6 flex justify-center">
        <section className="flex flex-col gap-6">
            <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                {contactInfos.map((item, i) => (
                <Link href={item.href ? item.href : "#"} key={i} className="flex items-center gap-3">
                    <Icon className="dark:invert size-8" icon={"logos:"+item.icon} />
                    <div className="flex flex-col leading-none gap-1">
                        <span className="font-bold">{item.name}</span>
                        <span className="text-muted font-medium">{item.description}</span>
                    </div>
                </Link>
            ))}
            </div>
            <span className="font-medium text-muted text-center">yunusedev 2025 &copy; tüm hakları saklıdır.</span>
        </section>
        </footer>
    )
}