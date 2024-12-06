import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const MovieForm = ({setFormData}) => {
    //handle formClear
    const handleFormClear = () => {
        document.getElementById('title').value = ''
        document.getElementById('description').value = ''
        document.getElementById('image').value = ''
        document.getElementById('rating').value = ''
    }
    //handleSubmit
    const handleSubmit = (e) => {
        e.preventDefault()
        const title = e.target.title.value
        const description = e.target.description.value
        const image = e.target.image.value
        const rating = e.target.rating.value
        setFormData({title, description, image, rating})
        handleFormClear()
    }
  return (
    <div style={{margin: '20px 50px'}}>
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Movie Title</Form.Label>
        <Form.Control type="text" placeholder="Enter title" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="description">
        <Form.Label>Movie Description</Form.Label>
        <Form.Control type="text" placeholder="Describe the movie" />
      </Form.Group>

      
      <Form.Group className="mb-3" controlId="image">
        <Form.Label>Movie Image</Form.Label>
        <Form.Control type="text" placeholder="paste image url" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="rating">
        <Form.Label>Movie Rating</Form.Label>
        <Form.Control type="text" placeholder="rate the movie" />
        
      </Form.Group>

      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    
  )
}

export default MovieForm