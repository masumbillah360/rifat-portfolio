import getCurrentUser from '@/actions/getUser.action'
import { redirect } from 'next/dist/server/api-utils'
import React from 'react'
import ContentDetails from './content-details'
import { getContentDetails } from '@/actions/content.action'

interface IParams {
  params: {
    contentId: string
  }
}

const Details = async({params: { contentId}}:IParams) => {
  const user = await getCurrentUser();
  const content = await getContentDetails(contentId);

  return (
    <div className='mt-4 mb-8'>
      <ContentDetails user={user} content={content} />
    </div>
  );
}

export default Details;