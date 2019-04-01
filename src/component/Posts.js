import React, { Component } from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/postActions';

 class Posts extends Component {
  //  constructor(props){
  //    super(props);
  //    this.state = {
  //      posts: []
  //    }

  //  }


  // componentWillMount(){
  //   console.log(123);
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //   .then(res => res.json())
  //   .then(data => this.setState({posts: data}));
  // }
  componentWillMount(){
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.newPost){
      this.props.posts.unshift(nextProps.newPost)
    }

  }
  render() {
    const postItem = this.props.posts.map(post =>(
      <div key = {post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ) );
    return (
      <div>
        <h1>Posts</h1>
        {postItem}
      </div>
    )
  }
}

Posts.propTypes = {
  fetchPosts: propTypes.func.isRequired,
  posts: propTypes.array.isRequired,
  newPost: propTypes.object

}

const mapStateToProps = state =>({
   posts: state.posts.items,
   newPost: state.posts.item
})
export default connect(mapStateToProps, {fetchPosts})(Posts);
