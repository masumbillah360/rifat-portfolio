import SectionHeading from '@/components/ui/sectionHeading';
import React from 'react'
import ContentClient from './content-client';
import { getAllContent } from '@/actions/content.action';

const ContentPage = async() => {
  const contents = await getAllContent();
  return (
    <div className="pt-4 px-2">
      <SectionHeading
        title="All Contents"
        subTitle="Manage your categories from here."
      />
      <ContentClient contents={contents} />
    </div>
  );
}

export default ContentPage