import React from 'react';
import ContentMobile from './ContentMobile';
import tabs from '../../common/tabs';
import { compose, withState } from 'recompose';

const enhance = compose(withState('expanded', 'setExpanded', -1));
const ProductsSection = ({ className, expanded, setExpanded }) => {
  return (
    <div className={className}>
      {tabs.map((tab, i) => {
        return (
          <ContentMobile
            expanded={i === expanded}
            setExpanded={() => setExpanded(i)}
            {...tab}
          />
        );
      })}
    </div>
  );
};

export default enhance(ProductsSection);
