function Form({}) {
  return (
    <form>
      <h4>Grocery Bud</h4>
      <div className="form-control">
        <input type="text" className="form-input" />
        <button type="submit" className="btn">
          Add Item
        </button>
      </div>
    </form>
  );
}

export default Form;
