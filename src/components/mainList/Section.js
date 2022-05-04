import React from 'react';
import ListMain from './List';
import { ListData } from './DataList';

const SectionMain = () => {
  return (
    <section className="posts">
      <div className="container">
        <ListMain listData={ListData} />
      </div>
    </section>
  );
};

export default SectionMain;
