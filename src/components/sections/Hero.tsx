"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Iphone15Mockup } from "@/components/ui/Iphone15Mockup";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section className="relative overflow-hidden pt-32 pb-16 md:pt-48 md:pb-32">
            {/* Background Blur Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-100/50 rounded-full blur-3xl -z-10 opacity-50" />
            <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-purple-100/50 rounded-full blur-3xl -z-10 opacity-30" />

            <Container className="flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-muted-foreground mb-6">
                        The Future of Personal Style
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70"
                >
                    Your Digital Wardrobe, <br /> Perfected by AI.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
                >
                    Digitize your closet instantly. Get daily outfits tailored to your aesthetic, body type, and the weather. Look your best, effortlessly.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-10 flex flex-col gap-4 sm:flex-row"
                >
                    <Button size="lg" className="gap-2">
                        Download for iOS <ArrowRight className="h-4 w-4" />
                    </Button>
                    {/* <Button size="lg" variant="outline">
            Learn More
          </Button> */}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="relative mt-20 w-full max-w-5xl flex justify-center"
                >
                    <Iphone15Mockup
                        src="/assets/IMG_2012.PNG"
                        alt="Drobe AI App Interface"
                        className="shadow-2xl"
                    />

                    {/* Floating Elements / Decor */}
                    <div className="absolute top-1/4 left-10 lg:left-1/4 p-4 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl animate-bounce-slow hidden md:block">
                        <p className="text-sm font-semibold">✨ Outfit Certified</p>
                    </div>
                    <div className="absolute bottom-1/4 right-10 lg:right-1/4 p-4 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl animate-bounce-slow delay-700 hidden md:block">
                        <p className="text-sm font-semibold">🌤️ Weather Matched</p>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}
