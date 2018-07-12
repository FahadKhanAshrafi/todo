import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class EditModal extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }
doEditSubmit(e) {
        e.preventDefault();
        var eTask = ReactDOM.findDOMNode(this.refs.eTask).value.trim();
        if(!eTask){
            this.props.modalClose;
            return;
        }
        this.props.onEditTask(eTask);
        ReactDOM.findDOMNode(this.refs.eTask).value = '';
        this.props.mClose
    return
}



    render(){
        return(
            <div>
                <h1>Pakistan</h1>
                <div className="clearfix">
                    <form className="todoForm form-horizontal" onSubmit={this.doEditSubmit.bind(this)}>
                        <div className="form-group">
                            <label htmlFor="task" className="col-md-2 control-label">Task</label>
                            <div className="col-md-10">
                                <input type="text" id="task" ref="eTask" className="form-control" placeholder={this.props.task} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-10 col-md-offset-2 text-right">
                                <input type="submit" value="Update Task" className="btn btn-primary" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}