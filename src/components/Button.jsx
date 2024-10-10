function Button({ label, onClick, href, primary, icon, className, ...props }) {
  const baseClasses =
    "flex justify-center items-center w-32 gap-x-2 transition duration-300 rounded-full text-base p-2 border-2";
  const primaryClasses =
    "bg-[#333333] text-[#f0f0f0] border-[#333333] hover:bg-[#f0f0f0] hover:text-[#333333]";
  const secondaryClasses =
    "bg-[#f0f0f0] text-[#333333] border-[#333333] hover:bg-[#333333] hover:text-[#f0f0f0]";

  const classes = `${baseClasses} ${
    primary ? primaryClasses : secondaryClasses
  } ${className}`;

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        <button className={classes} {...props}>
          {icon && <span className="mr-2">{icon}</span>}
          {label}
        </button>
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick} {...props}>
      {icon && <span className="mr-2">{icon}</span>}
      {label}
    </button>
  );
}

export default Button;
