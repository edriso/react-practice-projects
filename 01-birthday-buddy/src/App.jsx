import { useState } from "react";
import usersData from "./data.js";
import List from "./List.jsx";

const App = () => {
  const [users, setUsers] = useState(usersData);

  return (
    <main>
      <div>
        <h3>{users.length} birthdays today</h3>

        <List users={users} />

        <button className="btn" onClick={() => setUsers([])}>Clear All</button>
      </div>
    </main>
  );
};
export default App;
