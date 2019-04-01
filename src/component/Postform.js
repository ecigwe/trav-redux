import React, {Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { createpost } from '../actions/postActions'

class Postform extends Component{
    state={
      title: '',
      body: ''
    }
    handleChange = (e) =>{
      this.setState({
          [e.target.name]: e.target.value
      })
    }
      handleSubmit = (e) =>{
        e.preventDefault();
        const post = {
            title: this.state.title,
            body: this.state.body
        }
        // fetch('https://jsonplaceholder.typicode.com/posts', {
        //     method: 'POST',
        //     headers: {
        //         'content-type' : 'application/json',

        //     },
        //     body: JSON.stringify(post)

        // })
        // .then(res => res.json())
        // .then(data => console.log(data)); 

        //call action
        this.props.createpost(post);
        
        this.setState({
            title: '',
            body: ''
        })
      }
    render(){
        return(
            <div>
                <h3>Add Post</h3>
                <form onSubmit={this.handleSubmit}>
                <label>title</label>
                <input type="text"  name="title"onChange={this.handleChange} value= {this.state.title}/>
                <label>body</label>
                <input type="text"  name="body"onChange={this.handleChange} value= {this.state.body}/>
                <button type="submit">Submit</button>
                </form>
            </div>
        )

    }
}

Postform.PropTypes ={
    createpost: PropTypes.func.isRequired
    
}


export default connect(null, {createpost})(Postform);
