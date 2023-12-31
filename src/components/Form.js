import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Form = ({ postId, posts, setPosts, editPost }) => {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");


	const onFormSubmit = (e) => {
		e.preventDefault();

		if (editPost) {
			//CRUD - Update post:
			const updatedPost = async () => {
				const updatedPost = {
					title,
					content
				}
				const res = await axios.put(`http://localhost:8000/posts/${postId}/edit`, updatedPost)
				console.log(res)
			}
			updatedPost();
			/* setTitle("");
			setContent(""); */
		} else {
			//CRUD - Add new post:
			const newPosting = async () => {
				const newPosting = {
					title,
					content
				}
				console.log(newPosting);
				const newPostData = await axios.post(`http://localhost:8000/posts/newpost`, newPosting)
				console.log(newPostData)
				/* 	setPosts([...posts, newPostData]) */
			}
			newPosting();
			setTitle("");
			setContent("");
		}

	}

	return (
		<form className="post-form" onSubmit={onFormSubmit}>
			<input className="post-title"
				placeholder="Title..."
				value={title}
				name="title"
				type="text"
				onChange={(e) => setTitle(e.target.value)}
			/>
			<textarea className="post-content"
				rows="5"
				cols="50"
				placeholder='Content...'
				value={content}
				name="content"
				type="text"
				onChange={(e) => setContent(e.target.value)}
			/>
			<button className="button-add" type="submit">{
				editPost ? "Update" : "Add"
			}</button>
		</form>
	)
}

export default Form;