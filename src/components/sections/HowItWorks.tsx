"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";

const steps = [
    {
        number: "01",
        title: "Snap Your Wardrobe",
        description: "Take photos of your clothes. Our AI automatically processes and catalogs them.",
    },
    {
        number: "02",
        title: "Define Your Style",
        description: "Input your aesthetic preferences, height, and weight for personalized fitting.",
    },
    {
        number: "03",
        title: "Get Daily Looks",
        description: "Receive daily outfit recommendations that are certified to make you look your best.",
    },
];

export function HowItWorks() {
    return (
        <section className="py-24">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight md:text-4xl">How It Works</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-border to-transparent" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="relative flex flex-col items-center text-center"
                        >
                            <div className="w-24 h-24 rounded-full bg-white border-4 border-accent flex items-center justify-center text-3xl font-bold text-foreground mb-6 z-10 shadow-sm">
                                {step.number}
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                            <p className="text-muted-foreground max-w-xs">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
