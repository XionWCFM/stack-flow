import { AppScreen } from '@stackflow/plugin-basic-ui';
import { ActivityComponentType } from '@stackflow/react';
import React from 'react';

interface ArticleProps {}

const Article: ActivityComponentType<{ title: string }> = ({ params }) => {
  return (
    <AppScreen appBar={{ title: 'Article' }}>
      <div className="">
        <h1>{params.title}</h1>
      </div>
    </AppScreen>
  );
};

export default Article;
