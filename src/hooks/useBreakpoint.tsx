import { useEffect, useState } from "react";

const breakpoints = {
    sm: 640,
    md: 768,
    lg: 950,
};

const getBreakpoint = (width: number): string => {
    for (const [key, value] of Object.entries(breakpoints)) {
        if (width <= value) {
            return key;
        }
    }
    return "lg";
};

export const useBreakpoint = () => {
    const [breakpoint, setBreakpoint] = useState(getBreakpoint(window.innerWidth));

    useEffect(() => {
        const handleResize = () => {
            setBreakpoint(getBreakpoint(window.innerWidth));
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return breakpoint;
};