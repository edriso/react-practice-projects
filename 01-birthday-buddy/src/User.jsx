const Person = ({ name, age, image }) => {
  return (
    <li
    className='person'
      style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '1rem',
      }}
    >
      <img
        src={image}
        alt={name}
        style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          marginRight: '1rem',
          objectFit: 'cover',
        }}
      />
      <div>
        <h4 style={{ margin: 0 }}>{name}</h4>
        <p style={{ margin: 0 }}>{age} years</p>
      </div>
    </li>
  );
};
export default Person;
