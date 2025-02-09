import styles from "./DropdownButton.module.css";
import { ReactNode, useEffect, useRef, useState } from "react";
import { DropdownItem, DropdownItemButton } from "./DropdownItemButton";

type Props = {
    title: string;
    options: DropdownItem[];
    expImg?: ReactNode;
};

export const DropdownButton = ({ title, options, expImg = undefined }: Props) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleClick = () => {
        setIsOpen(false);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div ref={containerRef} className={styles.container} onClick={toggleDropdown}>
            <div className={styles.button}>
                <p className={styles.title}>{title}</p>
                <div className={styles.expanded}>
                    {expImg}
                </div>
            </div>
            {isOpen && (
                <ul className={styles.options}>
                    {options.map((option, index) => (
                        <DropdownItemButton key={index} title={option.title} description={option.description} onClick={() => { handleClick(); option.onClick(); }} />
                    ))}
                </ul>
            )}
        </div>
    );
};