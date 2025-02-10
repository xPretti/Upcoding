import styles from "./DropdownButton.module.css";
import { ReactNode, useState } from "react";
import { DropdownItems } from "./DropdownItems";
import { DropdownItemType } from "../@types/DropdownItemType";
import { DropdownItemButton } from "./DropdownItemButton";
import { useClickOutside } from "@/hooks/useClickOutside";

type Props = {
    title: string;
    options: DropdownItemType[];
    expImg?: ReactNode;
};

export const DropdownButton = ({ title, options, expImg = undefined }: Props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const closeDropdown = () => setIsOpen(false);
    const handleClick = () => closeDropdown();

    const containerRef = useClickOutside<HTMLDivElement>({ onClickOutside: closeDropdown });

    return (
        <div ref={containerRef} className={styles.container} onClick={toggleDropdown}>
            <div className={styles.button} >
                <p className={styles.title}>{title}</p>
                <div className={styles.expanded}>
                    {expImg}
                </div>
            </div>
            {isOpen && (
                <div className={styles.options}>
                    <DropdownItems>
                        {options.map((option, index) => (
                            <DropdownItemButton key={index} title={option.title} description={option.description} onClick={() => { handleClick(); option.onClick(); }} />
                        ))}
                    </DropdownItems>
                </div>
            )}
        </div>
    );
};