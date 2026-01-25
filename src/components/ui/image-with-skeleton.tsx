import React, { useState } from "react";
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
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className={cn("relative overflow-hidden bg-secondary/50", containerClassName)}>
            {isLoading && (
                <div className="absolute inset-0 animate-pulse bg-secondary flex items-center justify-center">
                    <div className="w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
                </div>
            )}
            <img
                src={src}
                alt={alt}
                className={cn(
                    "transition-opacity duration-500",
                    isLoading ? "opacity-0" : "opacity-100",
                    className
                )}
                onLoad={() => setIsLoading(false)}
                {...props}
            />
        </div>
    );
}
