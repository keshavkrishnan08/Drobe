"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled ? "bg-white/80 backdrop-blur-md border-b border-border/50 py-3" : "bg-transparent py-5"
            )}
        >
            <Container className="flex items-center justify-between">
                <Link href="/" className="text-xl font-bold tracking-tight">
                    Drobe AI
                </Link>
                <nav className="flex items-center gap-6">
                    <Link href="/privacy" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                        Privacy Policy
                    </Link>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-foreground text-background hover:bg-foreground/90 shadow-sm h-9 px-3 text-sm"
                    >
                        Contact Us
                    </Link>
                </nav>
            </Container>
        </header>
    );
}
