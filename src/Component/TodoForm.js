import React, { useState, useContext} from 'react';
import {
    FormGroup,
    Form,
    Input,
    Button,
    InputGroupAddOn,
    InputGroup
} from 'reactstrap';

import {v4} from "uuid";
import {ADD_TODO} from "../context/action.types";
import {TodoContext} from '../context/TodoContext';

const TodoForm = () => {
    const [todoString, setTodoString] = useState("");
    const {dispatch} = useContext(TodoContext);

    const handleSubmit = e => {
        e.preventDefault();
        if(todoString === ""){
            return alert("Please enter a todo");
        }

        const todo = {
            todoString,
            id: v4()
        }

        dispatch({
            type: ADD_TODO,
            payload: todo
        })

        setTodoString("");
    }

    return (
        <Form autocomplete="off" onSubmit={handleSubmit} className='form__todo mb-0 !important'>
            <FormGroup className="mb-0 !important">
                <InputGroup className="mb-0 !important">
                    <Input
                        className="mb-0 !important"
                        type="text"
                        name="todo"
                        id="todo"
                        placeholder='Your Next Todo'
                        value={todoString}
                        onChange={e => setTodoString(e.target.value)}
                    />
                    {/* <InputGroupAddOn addonType="prepend"> */}
                        <Button  color="warning">Add Todo</Button>
                    {/* </InputGroupAddOn> */}
                </InputGroup>
            </FormGroup>
        </Form>
    )
}

export default TodoForm;