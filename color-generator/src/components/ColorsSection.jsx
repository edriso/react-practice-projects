export function ColorsSection({ colors }) {
  return (
    <section className="colors">
      {colors.map((elm, i) => {
        return (
          <article className="color" key={i}>
            <p className="percent-value">{elm?.percent}%</p>
            <p className="color-value">{elm?.hex}</p>
          </article>
        );
      })}
    </section>
  );
}
