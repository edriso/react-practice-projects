import { nanoid } from "nanoid";

export function LoremText({ paragraphs }) {
  return (
    <article className="lorem-text">
      {paragraphs.map((item) => {
        const id = nanoid();
        return <p key={id}>{item}</p>;
      })}
    </article>
  );
}
