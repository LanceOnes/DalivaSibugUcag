import type { FC } from "react";

interface CloseButtonProps {
    label: string;
    onClose: () => void;
    newClassName?: string;
    className?: string;
}

const CloseButton: FC<CloseButtonProps> = ({
    label,
    onClose,
    newClassName,
    className,
}) => {
    return (
        <button
            type="button"
            className={`${newClassName ? newClassName : 'bg-blue-500 hover:bg-blue-700 text-white text-sm font-medium cursor-pointer py-2 px-4'} rounded focus:outline-none focus:shadow-outline ${className ?? ''}`}
            onClick={onClose}
        >
            {label}
        </button>
    );
};

export default CloseButton;