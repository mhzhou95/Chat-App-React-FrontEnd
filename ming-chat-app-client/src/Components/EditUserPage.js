import React, { useContext } from 'react';
import { UserContext } from '../State/UserState';
import { editUser, deleteUser } from '../Services/UserService';
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

    const handleDelete = () => {
        let doIt = window.confirm("Are you sure you want to delete your account?");
        if( doIt ){
            deleteUser(user.id)
            .then( setUser({
                displayName: null,
                id: null,
                authenticated: false
              }))
            .then( history.push("/"));
        }else{
            return;
        }
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
                <div className="form-group">
                    <label htmlFor="displayName">DisplayName:</label>
                    <input className="form-control" type="text" id="displayName" value={ user.displayName} onChange={handleChange} minLength="6" maxLength="12"></input>
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input className="form-control" type="password" id="password" value={ user.password } onChange={handleChange} minLength="6" maxLength="12"></input>
                </div>
           
                <button type="submit" className="btn btn-warning">Update</button>
            </form>
            <button type="submit" className="btn btn-danger" onClick={handleDelete}>Delete Account</button>
        </div>
    )
}
