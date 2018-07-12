import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class TodoForm extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }

    doSubmit(e){
        e.preventDefault();
        var task = ReactDOM.findDOMNode(this.refs.task).value.trim();
        this.props.taskSubmitProps(task);
        console.log(this.refs.task.value)
        ReactDOM.findDOMNode(this.refs.task).value = '';
        return
    }

    render() {
        return (
            <div className="commentForm vert-offset-top-4">
                <div className="clearfix">
                <form onSubmit={this.doSubmit.bind(this)}>
                    <div className="form-group">
                        <label htmlFor="task" className="col-md-4 control-label">Task:</label>
                        <div className="col-md-4">
                            <input type="text" className="form-control" id="task" ref='task' />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-md-offset-2 text-right" style={{marginTop:'15px',marginBottom:'15px'}}>
                    <button type="submit" className="btn btn-primary" style={{marginRight:'15px'}}>Submit</button>
                    <button type="button" className="btn btn-danger" >Clear</button>
                        </div>
                    </div>

                </form>
            </div>
            </div>
        );
    }
}

export default TodoForm;