function Title({ subTitle, highlight }) {
  return (
    <div className="section-title">
      <h2>
        {subTitle} <span>{highlight}</span>
      </h2>
    </div>
  );
}

export default Title;
