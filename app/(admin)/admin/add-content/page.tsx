import { getAllCategory } from '@/actions/category.action'
import AddContentForm from '@/components/ui/add-content-form'
import SectionHeading from '@/components/ui/sectionHeading'
import React from 'react'

const AddContentPage = async() => {
  const categories = await getAllCategory();
  return (
    <div className='mt-4 mb-8 px-4'>
        <SectionHeading title='Add your content' subTitle='To visible your best works and services to people add your best content' />
        <div>
          <AddContentForm categories ={categories} />
        </div>
    </div>
  )
}

export default AddContentPage