import React, { useContext, useState } from 'react'
import GithubContext from '../context/github/githubContext';
import AlertContext from '../context/alert/alertContext';


const Search = () => {

    const { searchUsers, clearUsers, users } = useContext(GithubContext);
    const { setAlert } = useContext(AlertContext);
    const [keyword, setKeyword] = useState('');

    const onChange = (e) => {
        setKeyword(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (keyword === '') {
            setAlert('Lütfen bilgi giriniz', "danger")
        } else {
            searchUsers(keyword);
            setKeyword('')
        }


    }
    return (
        <div className="container mt-2">
            <form onSubmit={onSubmit} >
                <div className="input-group" >
                    <input type="text" value={keyword} onChange={onChange} className="form-control" />
                    <div className="input-group-append">
                        <button type="submit" className="btn btn-primary"> Search</button>
                    </div>
                </div>
            </form>
            {users.length > 0 && <button onClick={clearUsers} className="btn btn-primary btn-sm btn-block mt-2" >Clear Items </button>}

        </div>
    )
}

export default Search

