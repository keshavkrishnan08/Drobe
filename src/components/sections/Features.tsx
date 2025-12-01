"use client";

import { Container } from "@/components/ui/Container";
import { Iphone15Mockup } from "@/components/ui/Iphone15Mockup";
import { motion } from "framer-motion";
import { Sparkles, Shirt, Zap } from "lucide-react";

const features = [
    {
        title: "AI-Powered Digitization",
        description: "Simply snap a photo of your clothes. Our AI instantly removes the background and adds it to your digital wardrobe.",
        icon: Shirt,
        image: "/assets/IMG_2008.PNG",
        colSpan: "md:col-span-2",
    },
    {
        title: "Daily Style Recommendations",
        description: "Get outfit suggestions tailored to your specific aesthetic, body type, and the day's weather.",
        icon: Sparkles,
        image: "/assets/IMG_2010.PNG",
        colSpan: "md:col-span-1",
    },
    {
        title: "Instant Outfit Generation",
        description: "Don't know what to wear? Generate a certified look in seconds.",
        icon: Zap,
        image: "/assets/IMG_2011.PNG",
        colSpan: "md:col-span-3",
    },
];

export function Features() {
    return (
        <section className="py-24 bg-muted/30">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight md:text-5xl mb-4">
                        Your Closet, Reimagined.
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Experience the most advanced wardrobe assistant. Built for those who value style and efficiency.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`group relative overflow-hidden rounded-3xl bg-white border border-border/50 shadow-sm hover:shadow-md transition-all ${feature.colSpan}`}
                        >
                            <div className="p-8 h-full flex flex-col">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2.5 rounded-xl bg-accent text-foreground">
                                        <feature.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                                </div>
                                <p className="text-muted-foreground mb-8 max-w-md">
                                    {feature.description}
                                </p>

                                <div className="relative flex-1 min-h-[400px] w-full rounded-2xl overflow-hidden bg-accent/50 flex items-center justify-center p-6">
                                    <Iphone15Mockup
                                        src={feature.image}
                                        alt={feature.title}
                                        className="h-[400px] w-[200px] border-[8px]"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
