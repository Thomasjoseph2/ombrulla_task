import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const buttonStyles = cva(
  {
    fontSize: "0.875rem",
    padding: "0.5rem 1rem",
  },
  {
    variants: {
      color: {
        primary: "bg-[#5D50C6] text-white",
        secondary: "bg-white text-black",
      },
    },
    
  }
);

const Button = ({ variant, className, ...props }) => {
  return (
    <button
      {...props}
      className={twMerge(buttonStyles({ color: variant }), className)}
    />
  );
};

export default Button;
