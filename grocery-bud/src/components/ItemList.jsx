function ItemList({ items, checkItem, deleteItem }) {
  return (
    <section className="items">
      {items.map((item) => {
        return (
          <article className="single-item" key={item.id}>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => checkItem(item.id)}
            />
            <p className={item.completed ? "completed" : ""}>{item.text}</p>
            <button
              className="btn remove-btn"
              onClick={() => deleteItem(item.id)}
            >
              Delete
            </button>
          </article>
        );
      })}
    </section>
  );
}

export default ItemList;
