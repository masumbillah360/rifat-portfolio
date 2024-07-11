import SectionHeading from '@/components/ui/sectionHeading';
import React from 'react'
import ContentClient from './content-client';
import { getAllContent } from '@/actions/content.action';
import getCurrentUser from '@/actions/getUser.action';

const ContentPage = async() => {
  const contents = await getAllContent();
  const user = await getCurrentUser();
  return (
    <div className="pt-4 px-2">
      <SectionHeading
        title="All Contents"
        subTitle="Manage your categories from here."
      />
      <ContentClient contents={contents} user ={user} />
    </div>
  );
}

export default ContentPage