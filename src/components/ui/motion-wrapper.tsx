import React from "react";
import { motion } from "framer-motion";

interface MotionWrapperProps {
    children: React.ReactNode;
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    className?: string;
}

export function MotionWrapper({
    children,
    delay = 0,
    direction = "up",
    className = ""
}: MotionWrapperProps) {
    const variants = {
        hidden: {
            opacity: 0,
            scale: 0.9,
            y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
            x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            x: 0,
            transition: {
                type: "spring",
                damping: 15,
                stiffness: 100,
                delay,
            } as any
        },
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={variants}
            className={className}
        >
            {children}
        </motion.div>
    );
}
