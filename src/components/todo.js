import React, { Component } from 'react';
import TodoForm from "./todoForm";
import TodoList from './todoList';
import EditModal from "./editModal";


class Todo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    genrateId(){
        return Math.floor(Math.random() * 90000) + 10000;
    }

    onTaskHandelSubmit(tk){
        var data = this.state.data;
        console.log('state',data)
        var complete = 'false';
        var id = this.genrateId().toString();
        data = data.concat([{id,tk,complete}]);
        console.log('arrydata',data)
        console.log('arrydata',data)
        this.setState({data})
        }

    onTaskRemove(taskId){
        var data = this.state.data;
         data = data.filter(remove=>{
             return remove.id !== taskId;
         });
         this.setState({data});
         return;
    }

    onCompleteTask(id){
        var data = this.state.data;
        for (var i in data){
            if(data[i].id === id){
                data[i].complete = data[i].complete === 'true'? 'false':'true';
                break;
            }
        }
        this.setState({data});
        return;
    }


    onEditTask(id,otask,ntask){
        var data = this.state.data;
        var index =data.findIndex(i => i.tk === otask);
        data[index].tk = ntask;
        this.setState({data})
        this.props.modalClose
    }



    render() {
        return (
            <div>
                <TodoForm
                    taskSubmitProps={this.onTaskHandelSubmit.bind(this)}
                />
                <TodoList
                    data={this.state.data}
                    removeTaskTodo={this.onTaskRemove.bind(this)}
                    completeTaskTodo={this.onCompleteTask.bind(this)}
                    editTaskTodo={this.onEditTask.bind(this)}

                />
            </div>
        );
    }
}

export default Todo;