import React from "react"
export function HeroSection() {
    return(
        <section className="flex items-center px-8 justify-center flex-col gap-4">
        <h1 className="text-5xl text-center lg:w-xl font-bold">Yeni, Güvenli ve Profosyonel <span className="text-green-500 dark:text-green-400 p-1">Sosyal Medya</span></h1>

        <p className="text-muted text-center">Profosyonel olarak sizin güvenliğiniz için tasarlandı</p>
        <button className="bg-foreground text-background font-semibold p-2.5 rounded-full px-5 hover:bg-accent">Hakkımızda -&gt;</button>
        </section>
    )
}