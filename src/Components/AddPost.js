const AddPost = () => {
  return(
      <>
        <div>
            <textarea className={'text-area'} name={'post'}  placeholder='Type your tweet ....' />
            <button className={'add-post-button'}>Add Post</button>
        </div>
      </>
  )

}

export default AddPost;