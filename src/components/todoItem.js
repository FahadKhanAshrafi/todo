import React, { Component } from 'react';
import EditModal from './editModal';
import Modal from  'react-modal';


class TodoItem extends Component{

    constructor(props){
        super(props);
        this.state={
            modalIsOpen:false
        };
        this.modalOpen = this.modalOpen.bind(this);
        this.modalClose= this.modalClose.bind(this);

    }

    removeTask(){
        this.props.removeTaskList(this.props.id);
        return;
    }

    completeTask(){
        this.props.completeTaskList(this.props.id);
        return;
    }

    modalOpen(){
        this.setState({modalIsOpen:true});
    }

    modalClose(){
        this.setState({ modalIsOpen:false})
    }

    editTask(ntask){
        this.props.editTaskList(this.props.id,this.props.task,ntask)
        this.props.modalClose;
    }




    render(){
        var classes = 'list-group-item clearfix';
        if (this.props.complete ==='true') {
            classes = classes+ '  list-group-item-success';
        }
        return(
            <div>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.modalClose.bind(this)}
                    style={customStyles} >
                <EditModal
                    onEditTask = {this.editTask.bind(this)}
                    task={this.props.task}
                    mClose={this.modalClose.bind(this)}
                    id={this.props.id}
                />

                </Modal>
                <li className={classes} style={{padding:'5px'}}>
                    {this.props.task}
                    <div className="pull-right" role="group">
                        <button type="button" className="btn btn-xs btn-success img-circle"
                                onClick={this.completeTask.bind(this)}
                                >
                            &#x2713;
                        </button>
                        <button type="button" className="btn btn-xs btn-info img-circle"
                              onClick={this.modalOpen.bind(this)}  >
                            &#x2756;
                        </button>
                        <button type="button" className="btn btn-xs btn-danger img-circle"
                                onClick={this.removeTask.bind(this)}>
                            &#xff38;
                        </button>
                    </div>
                </li>
            </div>
        );
    }
}

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};


export default TodoItem;