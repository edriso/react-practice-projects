export function ColorList({ colors }) {
  const copyColor = (color) => {
    alert(color);
  };

  return (
    <section className="colors">
      {colors.map((color) => {
        return (
          <article
            className={color.type === "shade" ? "color color-light" : "color"}
            style={{ backgroundColor: `#${color.hex}` }}
            key={color.id}
            onClick={() => copyColor(`#${color.hex}`)}
          >
            <p className="percent-value">{color.percent}%</p>
            <p className="color-value">#{color.hex}</p>
          </article>
        );
      })}
    </section>
  );
}
