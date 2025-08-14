"use client"


export default function Waitlist() {
    return(
        <section className="flex items-center px-8 flex-col gap-6">
            <h1 className="text-3xl font-bold">Bekleme listesi</h1>
            <p className="text-muted">Bekleme listesine katılarak gelişmelerden haberdar ol</p>
            <div className="flex items-center gap-2">
                <input type="text" className="p-2.5 focus:ring-2 focus:ring-green-600 transition ring ring-tertiary rounded-lg outline-none text-[15px] font-medium placeholder:text-muted text-foreground" placeholder="E-mail adresi" />
                <button className="p-2.5 px-5 hover:bg-accent text-[15px] bg-foreground rounded-md text-background font-semibold">Katıl</button>
            </div>
        </section>
    )
}