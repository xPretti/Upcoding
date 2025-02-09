import { useEffect, useState } from "react";

const breakpoints = {
    lg: 950,
    md: 768,
    sm: 640,
};

const getBreakpoint = (width: number): string => {
    for (const [key, value] of Object.entries(breakpoints)) {
        if (width >= value) {
            return key;
        }
    }
    return "sm";
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