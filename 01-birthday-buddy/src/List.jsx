import User from './User';

const List = ({ users }) => {
  return (
    <ul style={{ padding: 0, listStyle: 'none' }}>
      {users.map((user) => {
        return <User key={user.id} {...user} />;
      })}
    </ul>
  );
};
export default List;
