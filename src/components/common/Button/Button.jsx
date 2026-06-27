import "./Button.css";

const Button = ({
  children,
  icon,
  variant = "primary",
  type = "button",
  className = "",
  ...props
}) => {
  return (
    <button
      type={type}
      className={`button button--${variant} ${className}`}
      {...props}
    >
      {icon && (
        <span className="button__icon">
          <img src={icon} alt="" aria-hidden="true" />
        </span>
      )}

      <span className="button__text">{children}</span>
    </button>
  );
};

export default Button;
