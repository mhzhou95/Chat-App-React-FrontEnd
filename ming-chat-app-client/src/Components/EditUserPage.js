import React, { useContext } from 'react';
import { UserContext } from '../State/UserState';
import { editUser } from '../Services/UserService';
import { useHistory } from 'react-router-dom';

export default function EditUserPage() {
    const [ user, setUser ] = useContext(UserContext);
    const history = useHistory();

    const handleEdit = (event) => {
        event.preventDefault();
        editUser(user.id, user)
        .then( data => setUser(data))
        .then( history.push("/"))
    }
    const handleChange = (event)=> {
        setUser({
            ...user,
            [event.target.id]: event.target.value
        })
    }
    return (
        <div>
            <form onSubmit={handleEdit} >
                <p><input type="text" id="displayName" value={ user.displayName} onChange={handleChange} minLength="6" maxLength="12"></input></p>
                <p><input type="password" id="password" value={ user.password } onChange={handleChange} minLength="6" maxLength="12"></input></p>
                <button>Update</button>
            </form>
        </div>
    )
}
