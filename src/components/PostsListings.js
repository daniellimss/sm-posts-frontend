import React from 'react'
import Post from './Post';

const PostsListings = ({ posts }) => {

	return (
		<div>
			{
				posts.map((post) => (
					<Post post={post} />
				))
			}
		</div >
	)
}

export default PostsListings