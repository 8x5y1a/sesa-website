import { AnchorHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    variant?: 'outline' | 'fill' | undefined;
}

const Button = forwardRef<HTMLAnchorElement, ButtonProps>(
    ({ children, variant = 'fill', className, ...rest }, ref) => {
        const baseStyle = 'px-6 py-2 clip-corner';

        switch (variant) {
            case 'fill':
                return (<a role="button" ref={ref} className={`${baseStyle} fill-gradient ${className}`} {...rest}>{children}</a>);
            case 'outline':
                // Wrapper element required to create border effect with clipping
                return (<div className="bg-[#8824DC] clip-corner flex items-center justify-center">
                    <a role="button" ref={ref} className={`${baseStyle} ${className} bg-[#0a0a0a] clip-corner-inner`} {...rest}>{children}</a>
                </div>)
            default:
                throw new Error(`Unknown button variant ${variant}`)
        }
    }
)

Button.displayName = 'Button';

export default Button;
