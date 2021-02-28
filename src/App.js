import { useEffect, useState } from 'react';
import './App.css';
import User from './components/User/User';

function App() {

  const [users, setUsers] = useState([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
      setUsers(data);
      setLoading(false);  
    });
  }, []);

console.log(users);

if(loading){
  return <h1>Loading...</h1>
}
  return (
      <div className="App">
          <h1>Users</h1>
          {
            users.map((user, i) => {
            return <button onClick={() => setIndex(i)} key={user.id}>
                {user.name}
            </button>
            })
          }
            <User user={users[index]} />
      </div>
  );

}

export default App;
