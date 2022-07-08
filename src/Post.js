import React, { Component } from 'react'
import { connect } from 'react-redux'

class Post extends Component {


    render() {
        return (
            <div className="post">
                <h2 className="post_title">{this.props.post.title}</h2>
                <p className="post_message" >{this.props.post.showing ? this.props.post.message : 'xxx'}</p>
                <div className="control-buttons">
                <button className="edit" onClick={() => this.props.dispatch({ type: 'EDIT_POST', id: this.props.post.id})}>แก้ไข</button>
                <button className="delete" onClick={() => this.props.dispatch({ type: 'DELETE_POST', id: this.props.post.id })}>ลบ</button>
                <button className="show" onClick={() => this.props.dispatch({ type: 'SHOW_VOCAB', id: this.props.post.id })}>{this.props.post.showing ? 'ปิดคำแปล' : 'ดูคำแปล'}</button>
                </div>
            </div>
        )
    }
}

export default connect()(Post);