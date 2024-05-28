import { IButton } from "../../models/button";

export const Button = ({
    color,
    customClassName = "",
    text,
    onClick,
    url,
    openInNewTab,
    size,
    state,
    className,
    type,
  }: IButton) => {
    const buttonClassName = `
        ${styles.button}
        ${styles[color]}
        ${customClassName}
        ${size ? styles[size] : styles.button_medium}
        ${state ? styles[state] : ""}
        `;
  
    return (
      <div className={`${styles.button_container} ${className ? className : ""}`}>
        {url ? (
          <a
            className={buttonClassName}
            href={url || ""}
            target={openInNewTab ? "_blank" : "_self"}
            rel="noreferrer"
          >
            {text}
          </a>
        ) : (
          <button className={buttonClassName} onClick={onClick} type={type}>
            {text}
          </button>
        )}
      </div>
    );
  };
  