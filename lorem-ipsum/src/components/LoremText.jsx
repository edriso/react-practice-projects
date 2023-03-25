export function LoremText({ paragraphs }) {
  return (
    <article className="lorem-text">
      {paragraphs.map((item, i) => {
        return <p key={i}>{item}</p>;
      })}
    </article>
  );
}
