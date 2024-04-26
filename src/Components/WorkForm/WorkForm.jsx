import React, { useEffect, useId, useState } from 'react'
import { Form } from 'react-router-dom'
import useDate from '../../Hooks/useCurrencyInfo';

function WorkForm() {
 const currentDay = useDate()

  const locationId = useId();
  const budgetId = useId();
  const deadlineId = useId();
  const projectId = useId();


  return (
    <Form action="" method='Post' className='ml-7'>
      {console.log(currentDay)}

      <label htmlFor={locationId}>Location</label><br />
      <input type="text" id={locationId} /><br />

      <label htmlFor={budgetId}>Budget</label><br />
      <input type="number" id={budgetId} /><br />

      <label htmlFor={deadlineId}>Deadline</label><br />
      <input type="date" id={deadlineId} min='2024-04-25' /><br />

      <label htmlFor={projectId}>Project Detail</label><br />
      <textarea className="h-8" name="" id={projectId} cols="30" rows="10"></textarea><br />

      <button type='submit'>Post</button>

    </Form>
  )
}

export default WorkForm;