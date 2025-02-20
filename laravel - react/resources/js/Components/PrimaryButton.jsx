export default function PrimaryButton({ className = '', disabled, children, ...props }) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center px-2 bg-gray-800 border 
                border-transparent rounded-md font-semibold text-xs 
                text-white uppercase tracking-widest hover:bg-gray-600
                 focus:bg-gray-700 active:bg-gray-900 focus:outline-none 
               min-h-10 max-w-28 md:max-w-36 
                 focus:ring-offset-2 transition ease-in-out duration-150 ${disabled && 'opacity-25' } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
