import * as React from "react"
import { cn } from "@/src/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'default', ...props }, ref) => {
    
    const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-500 ease-out focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 tracking-wide";
    
    const variants = {
      primary: "bg-charcoal-900 text-ivory-50 hover:bg-charcoal-500 shadow-sm hover:shadow-md",
      secondary: "bg-ivory-100 text-charcoal-900 hover:bg-ivory-200",
      outline: "border border-ivory-200 bg-transparent hover:bg-ivory-100 hover:text-charcoal-900 hover:border-charcoal-900",
      ghost: "hover:bg-ivory-100 hover:text-charcoal-900",
      link: "text-charcoal-900 underline-offset-4 hover:underline",
    };

    const sizes = {
      default: "h-11 px-8 py-2",
      sm: "h-9 rounded-sm px-4 text-xs uppercase tracking-widest",
      lg: "h-14 rounded-md px-10 text-base",
      icon: "h-10 w-10",
    };

    return (
      <button
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    );
  }
)
Button.displayName = "Button"

export { Button }
