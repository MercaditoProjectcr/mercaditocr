import React from 'react';
import axios from 'axios';
import { getAllUsers } from '../../../api/fetchData';

const ListUsers = () => {
    const [listUsers, setListUsers] = React.useState([]);
    
    React.useEffect(() => {
        const fetchData = async () => {
          const response = await getAllUsers();
          const { error, data } = response;
          console.log('data', data);
          if(!error) {
            setListUsers(data);
        }
      }
      fetchData();
    }, []);
    
    return (
    <div>
       <h1>List All Users</h1>
      {listUsers.map(user =>
        <div key={user._id}>{user.name}</div>
      )}
    </div>
    );
  }

  export default ListUsers;