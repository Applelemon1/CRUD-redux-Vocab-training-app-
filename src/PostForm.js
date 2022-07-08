import React, { Component } from 'react'
import { connect } from 'react-redux'

class PostForm extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        const title = this.getTitle.value;
        const message = this.getMessage.value;
        const data = {
            id: new Date(),
            title,
            message,
            editing: false,
            showing: false
        }
        this.props.dispatch({
            type: 'ADD_POST',
            data
        })
        this.getTitle.value = "";
        this.getMessage.value = "";
    }

    render() {
        return (
            <div className="post-container">
                <h1 className="post_heading">เพิ่มคำศัพท์</h1>
                <form className="form" onSubmit={this.handleSubmit}>
                    <input type="text" ref={(input) => this.getTitle = input} placeholder="ใส่คำอังกฤษ" required />
                    <br/><br/>
                    <input type="text" ref={(input) => this.getMessage = input}  placeholder="ใส่คำแปล" required />
                    <br/><br/>
                    <button>เพิ่ม</button>
                </form>
            </div>
        )
    }
}

export default connect()(PostForm)