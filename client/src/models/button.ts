import { ButtonClassEnum, ButtonSize, ButtonState } from "./enum";

export interface IButton {
  color: ButtonClassEnum;
  customClassName?: string;
  text: string;
  onClick?: any;
  url?: string;
  openInNewTab?: boolean;
  size?: ButtonSize;
  state?: ButtonState;
  className?: string;
  type?: "submit" | "reset" | "button";
}
