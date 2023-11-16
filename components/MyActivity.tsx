'use client';
import { useFlow } from '@/core/stackflow';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import React from 'react';

interface MyActivityProps {}

const MyActivity = () => {
  const { push } = useFlow();
  const onClick = () => {
    push('Article', {
      title: 'hello world',
    });
  };
  return (
    <AppScreen appBar={{ title: 'My Activity' }}>
      <div className="">My Activity</div>
      <button onClick={onClick}>이거 누르면 어떻게 될까</button>
    </AppScreen>
  );
};

export default MyActivity;
