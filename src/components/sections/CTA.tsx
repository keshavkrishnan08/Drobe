"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CTA() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-foreground text-background" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

            <Container className="relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-bold tracking-tight md:text-5xl text-white mb-6">
                        Ready to Elevate Your Style?
                    </h2>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
                        Join thousands of users who are looking their best every day with Drobe AI.
                    </p>
                    <Button size="lg" className="bg-white text-black hover:bg-white/90 gap-2">
                        Download Now <ArrowRight className="w-4 h-4" />
                    </Button>
                </motion.div>
            </Container>
        </section>
    );
}
