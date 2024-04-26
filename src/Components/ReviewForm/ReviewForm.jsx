import React, { useId } from 'react'
import { Form } from 'react-router-dom';

function ReviewForm() {
  const reviewId = useId();
  const selectId = useId();

  return (
    <Form className='m-3'>
      <label htmlFor={selectId}>Rating</label><br />
      <select name="" id="" className='w-40'>
        <option value="1">⭐</option>
        <option value="2">⭐⭐</option>
        <option value="3">⭐⭐⭐</option>
        <option value="4">⭐⭐⭐⭐</option>
        <option value="5">⭐⭐⭐⭐⭐</option>
      </select><br />

      <label htmlFor={reviewId}>Review</label><br />
      <textarea className='h-20' name="" id={reviewId} cols="30" rows="10"></textarea><br />
      <button type='submit'>Submit</button>

    </Form>
  )
}

export default ReviewForm;