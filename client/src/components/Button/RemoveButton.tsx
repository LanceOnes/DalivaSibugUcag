import type { FC } from "react";


interface RemoveButtonProps {
    label: string;
    className?: string;
    newclassName?: string;
    onRemove: () => void
}
const RemoveButton: FC<RemoveButtonProps> = ({
    label,
    className,
    newclassName,
    onRemove
}) => {
    return (
        <>
            <button type="button"
                className={newclassName ? newclassName : `px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white
                text-sm font-medium cursor-pointer rounded-lg shadow-lg ${className}`}
                onClick={onRemove}
            >
                {label}
            </button>
        </>
    )
}

export default RemoveButton