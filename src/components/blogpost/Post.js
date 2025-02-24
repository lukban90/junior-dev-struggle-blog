import React from "react"

const Post = ({ title, author, description, date, body }) => {
  return (
    <article className="box post">
     <header style={{marginBottom:'2em'}}>
          <h2 style={{marginBottom:0}}>{this.props.title}</h2>
        {this.props.description}
          <h6>
            {this.props.author}
          </h6>
          <h6>
          {this.props.date}
          </h6>
        </header>
      {/* <span className="image featured">
      <img src="images/pic04.jpg" alt="" />
    </span> */}
      <p>{description}</p>
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </article>
  )
}

export default Post
