import { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import './ReviewEdit.css'


export default function ReviewEdit(props) {
  const [formData, setFormData] = useState({
    rating: '',
    content: ''
  })
  const { rating, content } = formData;
  const { reviews, handleEdit } = props;
  const { id } = useParams();

  
  useEffect(() => {
    const prefillFormData = () => {
      const reviewItem = reviews.find(review => review.id === Number(id) )
      setFormData({
        rating: reviewItem.rating,
        content: reviewItem.content
      })
    }
    if (reviews.length) {
      prefillFormData();
    }
  }, [reviews])

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }))
    }
  
  const handleSubmit =(e) => {
    e.preventDefault();
    handleEdit(id, formData);
  }
  
    return (
    <form onSubmit={(e) => {
      handleSubmit(e)
    }}>
      <h3> Add your review </h3>
      <div className='review-container'>
        <label>Rating:
          <select name='rating' value={rating} onChange={handleChange}>
              <option defaultValue>--Select--</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
          </select>
        </label>
        <br/>
        <textarea
          type='text'
          name='content'
          placeholder="Did you enjoy the book?"  
          value={content}
          onChange={handleChange}
        />
      </div>
      <button>Edit</button>
    </form>
  )
}