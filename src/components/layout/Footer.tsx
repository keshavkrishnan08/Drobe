import { Container } from "@/components/ui/Container";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t border-border bg-muted/30 py-12">
            <Container>
                <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                    <p className="text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} Drobe AI. All rights reserved.
                    </p>
                    <nav className="flex gap-6">
                        <Link href="/tos" className="text-sm text-muted-foreground hover:text-foreground">
                            Terms of Service
                        </Link>
                        <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                            Contact
                        </Link>
                    </nav>
                </div>
            </Container>
        </footer>
    );
}
