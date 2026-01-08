import { nanoid } from "nanoid";
import { toast } from "react-toastify";

export function ColorList({ colors }) {
  const saveToClipboard = async (color) => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(color);
        toast.success("Color copied to clipboard!");
      } catch (error) {
        toast.error("Failed to copy color to clipboard!");
      }
    } else {
      toast.error("Clipboard access is not available!");
    }
  };

  return (
    <section className="colors">
      {colors.map((color) => {
        const id = nanoid();
        const { hex, weight, type } = color;

        return (
          <article
            className={type === "shade" ? "color color-light" : "color"}
            style={{ backgroundColor: `#${hex}` }}
            key={id}
            onClick={() => saveToClipboard(`#${hex}`)}
          >
            <p className="percent-value">{weight}%</p>
            <p className="color-value">#{hex}</p>
          </article>
        );
      })}
    </section>
  );
}
