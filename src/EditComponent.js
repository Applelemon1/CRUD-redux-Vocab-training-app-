import React, { Component } from 'react'
import { connect } from 'react-redux';
class Edit extends Component {

    handleEdit = (e) => {
        e.preventDefault();
        const newTitle = this.getTitle.value;
        const newMessage = this.getMessage.value;
        const data = {
            newTitle,
            newMessage
        }
        this.props.dispatch({type:'UPDATE', id:this.props.post.id , data:data})
        // this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data })
    }


  render() {
    return (
      <div>
        <br></br>
        <br></br>
        <form className="form" onSubmit={this.handleEdit }>
        <input type="text" ref={(input) => this.getTitle = input}  defaultValue={this.props.post.title} placeholder="Enter post title" required />
        <br></br>
        <input type='text' ref={(input) => this.getMessage = input} defaultValue={this.props.post.message}  placeholder="Enter post" required />
        <br></br><br></br>
        <button>แก้ไข</button>
    </form>
   </div>
    )
  }
}

export default connect()(Edit)