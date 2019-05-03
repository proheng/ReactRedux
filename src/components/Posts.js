import React, { Component } from "react";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentWillMount() {
    console.log(1223);
    fetch("http://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => {
        this.setState({ posts: data });
        return data;
      })
      .then(josonData => {
        console.log(josonData);
        return josonData[0];
      })
      .then(first => console.log(first));
  }

  render() {
    const postItems = this.state.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <div>
        <h1>Post</h1> {postItems}
      </div>
    );
  }
}

export default Posts;
