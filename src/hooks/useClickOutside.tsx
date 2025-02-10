import { useEffect, useRef } from "react";

type UseClickOutsideProps = {
    onClickOutside: () => void;
};

export const useClickOutside = <T extends HTMLElement>({ onClickOutside }: UseClickOutsideProps) => {
    const ref = useRef<T>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                onClickOutside();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onClickOutside]);

    return ref;
};