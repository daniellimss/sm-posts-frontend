import React from 'react'

const PostsListings = ({ posts, title, content }) => {
	return (
		<div>
			{
				posts.map((post, index) => (
					<li key={post.id} className='list-item container1'>
						<div className="post row">
							<div className="col-md-3">
								<h3 className="bolded">Title:</h3>
							</div>
							<div className="col-md-7">
								<h4>{post.title}</h4>
							</div>
							<div className="col-md-2">
								<button className="button-edit">Edit</button>
							</div>
						</div>
						<div className="post row">
							<div className="col-md-3">
								<h3 className="bolded">Content:</h3>
							</div>
							<div className="col-md-7">
								<h4>{post.content}</h4>
							</div>
							<div className="col-md-2">
								<button className="button-edit">Edit</button>
							</div>
						</div>
						<button className="button-delete">Delete
						</button>

					</li>
				))
			}
		</div >
	)
}

export default PostsListings