
function App() {
const title = 'Youtube Channel'
const body = 'This is my Youtube channel.'
const comments = [
 { id: 1, text: 'Comment one'},
 { id: 2, text: 'Comment two'},
 { id: 3, text: 'Comment three'},


]
  return(
<div className='container'>
  <h1>
   {title.toUpperCase()}
  </h1>
  <p>
    {body}
  </p>
<div className='comments'>
  <h3>Comments ({comments.length})</h3>
  <ul>
    {comments.map((comment, index) => (
      <li key={index}>{comment.text}</li>
    ))}
  </ul>
  <h1>hello again</h1>
</div>
</div>
  )
  
}


export default App
