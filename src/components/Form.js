import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Form = ({ title, content, postId, setTitle, setContent, editTitle, setEditTitle, editContent, setEditContent }) => {



	const handleChange = (e) => {
		if (e.target.name ===
			title) {
			setTitle(e.target.value)
		} else if (e.target.name ===
			content) {
			setContent(e.target.value)
		}
	}
	const onFormSubmit = async (e) => {
		e.preventDefault();
		//CRUD - Add new post:
		const newPost = {
			title: title,
			content: content
		}
		const res = await axios.post(`http://localhost:8000/posts/newpost`, newPost)
		console.log(res)
		setTitle("");
		setContent("");

		//CRUD - Update post:
		const updatedPost = async () => {
			const updatedPost = {
				title: title,
				content: content
			}
			const res = await axios.put(`http://localhost:8000/posts/${postId}/edit`, updatedPost)
			console.log(res)
		}
		updatedPost();
	}


	return (
		<form className="post-form" onSubmit={onFormSubmit}>
			<input className="post-title"
				placeholder="Title..."
				value="title"
				name="title"
				type="text"
				onChange={handleChange}
			/>
			<textarea className="post-content"
				rows="5"
				cols="50"
				placeholder='Content...'
				value="content"
				name="content"
				type="text"
				onChange={handleChange}
			/>
			<button className="button-add" type="submit">{
				editTitle || editContent ? "Update" : "Add"
			}</button>
		</form>
	)
}

export default Form;