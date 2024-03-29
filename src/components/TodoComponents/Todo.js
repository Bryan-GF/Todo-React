import React from 'react';
import './Todo.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const Todo = props => { 
    return (
        <div className = 'todo'>
            <h1>TO-DO</h1>
            <div className = "todoform">
                <TodoForm 
                newTask = {props.newTask}
                inputChange = {props.inputChange}
                addTodoInput = {props.addTodoInput}
                completeTaskWipe={props.completeTaskWipe}
                inputChangeFilter={props.inputChangeFilter}
                />   
            </div> 
            <TodoList 
            filter = {props.filter}
            completeTaskSelect = {props.completeTaskSelect}
            decorate ={props.decorate}
            />
        </div>
    );
}

export default Todo;
