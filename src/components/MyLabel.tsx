import "./MyLabel.css";

export interface MyLabelProps {
  /**
   * Este es el label
   */
  label: string;
  /**
   * Este es el size
   */
  size: "normal" | "h1" | "h2" | "h3";
  /**
   * Este es el booelano allCaps
   */
  allCaps?: boolean;
  /**
   * Este es el color
   */
  color?: "primary" | "secondary" | "tertiary";
  /**
   * Selector de colores para el label
   */
  fontColor?: string;
  backgroundColor?: string;
}

export const MyLabel = ({
  allCaps = false,
  color = "primary",
  label = "No Label",
  size = "normal",
  fontColor,
  backgroundColor = "transparent",
}: MyLabelProps) => {
  return (
    <span
      className={[size, `text-${color}`].join(" ")}
      style={{ color: fontColor, backgroundColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
