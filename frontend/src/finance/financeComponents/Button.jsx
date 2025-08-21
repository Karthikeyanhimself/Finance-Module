// // src/components/Button.jsx
// import React from 'react';

// const Button = ({ 
//   children, 
//   type = 'button', 
//   variant = 'primary', 
//   className = '', 
//   disabled = false,
//   onClick 
// }) => {
//   const baseStyles = 'px-4 py-2 rounded-md font-semibold transition-all duration-200 disabled:opacity-50';
//   const variants = {
//     primary: 'bg-blue-600 text-white hover:bg-blue-700',
//     secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
//     danger: 'bg-red-600 text-white hover:bg-red-700'
//   };

//   return (
//     <button
//       type={type}
//       className={`${baseStyles} ${variants[variant]} ${className}`}
//       disabled={disabled}
//       onClick={onClick}
//     >
//       {children}
//     </button>
//   );
// };

// export default Button;








import React from 'react';

const Button = ({ 
  children, 
  type = 'button',
  variant = 'primary',
  className = '',
  onClick,
  ...props 
}) => {
  const baseStyles = "px-4 py-2 rounded-md font-medium transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary: "bg-gray-100 text-gray-700 hover:bg-gray-200 focus:ring-gray-500 border border-gray-300"
  };

  // ✅ Corrected string interpolation with backticks
  const buttonClasses = `${baseStyles} ${variants[variant]} ${className}`;

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
