import type { FC } from 'react'

interface ModalCloseButtonProps {
    onClose: () => void
}

const ModalCloseButton: FC<ModalCloseButtonProps> = ({ onClose }) => {
    return (
        <>
        <button type='button' onClick={onClose} className="absolute top-4 right-4 z-50 flex h-9.5 w-9.5 items-center justify-center rounded-full text-gray-500 hover:text-gray-700 transition-colors hover:bg-gray-100 sm:h-11 sm:w-11 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
        </>
    )
}

export default ModalCloseButton