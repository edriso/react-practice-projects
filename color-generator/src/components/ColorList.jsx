import { nanoid } from "nanoid";
import { toast } from "react-toastify";

export function ColorList({ colors }) {
  const copyColor = (color) => {
    toast.success("Copied to clipboard!");
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
            onClick={() => copyColor(`#${hex}`)}
          >
            <p className="percent-value">{weight}%</p>
            <p className="color-value">#{hex}</p>
          </article>
        );
      })}
    </section>
  );
}
