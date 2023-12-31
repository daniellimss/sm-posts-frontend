import React, { useState, useEffect } from 'react'
import Form from './Form';



const PostsListings = ({ posts, title, content }) => {
	const [editPost, setEditPost] = useState(false);
	const [postId, setPostId] = useState("");

	const handleEditPost = (e) => {
		setEditPost(true);
	}


	return (
		<div>
			{
				posts.map((post, index) => (
					<div>
						<li key={post.id} className='list-item container1'>
							<div className="post row">
								<div className="col-md-3">
									<h3 className="bolded">Title:</h3>
								</div>
								<div className="col-md-7">
									<h4>{post.title}</h4>
								</div>
								<div className="col-md-2">
									<button className="button-edit" onClick={handleEditPost} >Edit</button>

								</div>
							</div>
							<div className="post row">
								<div className="col-md-3">
									<h3 className="bolded">Content:</h3>
								</div>
								<div className="col-md-7">
									<h4>{post.content}</h4>
								</div>
							</div>
							<button className="button-delete">Delete
							</button>
							{
								editPost ? <Form postId={post.id} editPost={editPost} /> : null
							}
						</li>

					</div>
				))
			}
		</div >
	)
}

export default PostsListings