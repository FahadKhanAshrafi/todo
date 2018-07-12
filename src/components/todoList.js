import React, { Component } from 'react';
import TodoItem from './todoItem';


class  TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    removeTask(id){
        this.props.removeTaskTodo(id);
        return
    }

    completeTask(id){
        this.props.completeTaskTodo(id);
        return
    }
    editTask(id,oTask,nTask){
        this.props.editTaskTodo(id,oTask,nTask);
        return;
    }

    render(){
         var listNodes = this.props.data.map(fahad => {
             return <TodoItem
                         key={fahad.id}
                         id={fahad.id}
                         task={fahad.tk}
                         complete={fahad.complete}
                         removeTaskList={this.removeTask.bind(this)}
                         completeTaskList={this.completeTask.bind(this)}
                         editTaskList = {this.editTask.bind(this)}
                        />
             })

        return(
            <div>
                <ul className="list-group" >
                    {listNodes}

                </ul>
            </div>
        );
    }
}
export default TodoList;