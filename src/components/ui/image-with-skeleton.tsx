import React from "react";
import { cn } from "@/lib/utils";

interface ImageWithSkeletonProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    containerClassName?: string;
}

export function ImageWithSkeleton({
    src,
    alt,
    className,
    containerClassName,
    ...props
}: ImageWithSkeletonProps) {
    // Simplified to ensure images load correctly without hydration/state issues
    return (
        <div className={cn("relative overflow-hidden bg-secondary/50", containerClassName)}>
            <img
                src={src}
                alt={alt}
                loading="lazy"
                decoding="async"
                className={cn("transition-opacity duration-500", className)}
                {...props}
            />
        </div>
    );
}
