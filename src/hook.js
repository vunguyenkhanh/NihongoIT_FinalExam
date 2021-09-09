import { useState } from 'react'

function DeleteUser(){
    const [name, setName] = useState('');


    const [user, setUser] = useState(['Huyen', 'Hoa', 'Hung', 'Long']);

    var newArr = user.join(', ');

    const handleChange = (event) => {
        setName(event.target.value);
    }

    const handleDeleteName = (name) => {
        setUser(user.filter((x) => x !== name));
    }
    return [name, newArr, handleChange, handleDeleteName];
}

export default DeleteUser;