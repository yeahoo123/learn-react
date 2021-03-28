import React, { useEffect, useState, useMemo } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router';
import TodoList from '../../components/TodoList';
import queryString from 'query-string';
import TodoForm from '../../components/TodoForm';
function ListPage(props) {
    const initTodoList = [
        {
            id: 1,
            title: 'eat',
            status: 'new',
        },
        {
            id: 2,
            title: 'sleep',
            status: 'completed',
        },
        {
            id: 3,
            title: 'code',
            status: 'new',
        },
    ];
    const location = useLocation();
    const history = useHistory();
    const match = useRouteMatch();
    // console.log(location);
    // console.log(history);
    // console.log(match);
    const [todoList, setTodoList] = useState(initTodoList);
    const [filterStatus, setFilterStatus] = useState(() => {
        const params = queryString.parse(location.search);
        return params.status || 'all';
    });
    useEffect(() => {
        const params = queryString.parse(location.search);
        setFilterStatus(params.status || 'all');
    }, [location.search]);
    const handleTodoClick = (index) => {
        const newTodoList = [...todoList];
        const newTodo = {
            ...newTodoList[index.id-1],
            status: newTodoList[index.id-1].status === 'new' ? 'completed' : 'new',
        };
        console.log(newTodo)
        newTodoList[index.id-1] = newTodo;
        setTodoList(newTodoList);
    };


    const handleShowAllClick = () => {
        const queryParams = { status: 'all' };
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        });
        console.log(history);
    };
    const handleShowNewClick = () => {
        const queryParams = { status: 'new' };
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        });
        console.log(history);
    };
    const handleShowCompletedClick = () => {
        const queryParams = { status: 'completed' };
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        });
        console.log(history);
    };
    const renderTodoList = useMemo(() => {
        return todoList.filter((todo) => filterStatus === 'all' || filterStatus === todo.status);
    }, [todoList, filterStatus]);

    const handleTodoFormSubmit = (value) => {
        console.log(value)
    }

    return (
        <div>
            <h3>What to do</h3>
            <TodoForm onSubmit={handleTodoFormSubmit}/>
            <h3>Todo List</h3>
            <TodoList todoList={renderTodoList} onTodoClick={handleTodoClick} />
            <div>
                <button onClick={handleShowAllClick}>Show All</button>
                <button onClick={handleShowNewClick}>Show New</button>
                <button onClick={handleShowCompletedClick}>Show Completed</button>
            </div>
        </div>
    );
}

export default ListPage;
