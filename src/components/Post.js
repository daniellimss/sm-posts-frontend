import React, { useState } from 'react'
import axios from 'axios';
import Form from './Form';


const Post = ({ post }) => {
	const [editPost, setEditPost] = useState(false);
	const handleEditPost = (e) => {
		setEditPost(true);
	}

	const handleDeletePost = (e) => {
		const deletePost = async () => {
			const res = await axios.delete(`http://localhost:8000/posts/${post.id}`)
			console.log(res)
			console.log(res.data)
		}
		deletePost();
	}
	return (
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
						<button className="button-edit" onClick={handleEditPost}>Edit</button>
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
				<button className="button-delete" onClick={handleDeletePost}>Delete
				</button>
				{
					editPost ? <Form postId={post.id} editPost={editPost} /> : null
				}
			</li>
		</div>
	)
}

export default Post