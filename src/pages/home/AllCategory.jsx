import React from 'react'
import Category from '@components/card/Category'

const AllCategory = () => {
  const categories = [
    {
      id: 1,
      name: 'Nature & Wildlife'
    },
    {
      id: 2,
      name: 'Travel & Destinations'
    },
    {
      id: 3,
      name: 'People & Lifestyle'
    },
    {
      id: 4,
      name: 'Food & Drinks'
    },
    {
      id: 5,
      name: 'Business & Technology'
    },
    {
      id: 6,
      name: 'Architecture & Urban'
    },
    {
      id: 7,
      name: 'Abstract & Art'
    },
    {
      id: 8,
      name: 'Sports & Action'
    },
  ]

  return (
    <div className='grid grid-cols-1 gap-6 mt-10 md:grid-cols-4'>
      {categories.map((category) => (
        <Category
          key={category.id}
          title={category.name}
        />
      ))}
    </div>
  )
}

export default AllCategory
