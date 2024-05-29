import React, {useState} from 'react';
import {useForm} from "react-hook-form";

const UsersPage = () => {

    const [nameInput, setNameInput] = useState({
        name: '',
        username: '',
        email: '',
        phone: '',
        website: ''
    })

    const [nameUser, setNameUser] = useState([

    ])

    const {handleSubmit,register, reset} = useForm()

    function submit(values) {
        console.log(values)
    }


    const nameWebsite = (event) => {
        const name = event.target.name
        const value = event.target.value
        setNameInput({
            ...nameInput, [name]:value
        })
    }

    const createName = () => {
        if (nameInput.name.trim() === '' || nameInput.username.trim() === '' || nameInput.email.trim() === '' || nameInput.phone.trim() === ''){
           alert('введите данные')
        } else  {
            setNameUser([
                ...nameUser, nameInput
            ])
            setNameInput({
                name: '',
                username: '',
                email: '',
                phone: '',
                website: ''
            })
        }
        }



    const deleteName = () => {
        setNameUser([])
    }

    const deleteAnyway = (id) => {
      setNameUser(prevState => prevState.filter((_,i) => i !== id))
    }

    return (
        <div>
            <h2>Users Page</h2>

            <form onSubmit={handleSubmit(submit)} onReset={() => (reset())} className={"form"} onChange={(e) => nameWebsite(e)}>
                <label>
                    <span>add name</span>
                    <input type="text" placeholder={"name"} {...register("name", {required: true})}/>
                </label>

                <label>
                    <span>add username</span>
                    <input type="text" placeholder={"username"}  {...register("username", {required: true})}/>
                </label>

                <label>
                    <span>add email</span>
                    <input type="text" placeholder={"email"}  {...register("email", {required: true})}/>
                </label>

                <label>
                    <span>add phone</span>
                    <input type="text" placeholder={"phone"}  {...register("phone", {required: true})}/>
                </label>

                <label>
                    <span>add website</span>
                    <input type="text" placeholder={"website"}  {...register("website")}/>
                </label>

                <button onClick={createName}>create</button>
                <button type='reset' onClick={deleteName}>Очистить таблицу</button>

            </form>

            <div>
                <div>name</div>
                <div>username</div>
                <div>email</div>
                <div>phone</div>
                <div>website</div>
            </div>
            {nameUser.length > 0? (<div>
                {
                    nameUser.map((item, id) => (<div key={id}>
                        <p>{item.name}</p>
                        <p>{item.username}</p>
                        <p>{item.email}</p>
                        <p>{item.phone}</p>
                        <p>{item.website}</p>

                        <button onClick={() => deleteAnyway(id) }>Удалить</button>
                    </div>))
                }

            </div>):(<div>Таблица пуста</div>)}

        </div>
    );
};


export default UsersPage;