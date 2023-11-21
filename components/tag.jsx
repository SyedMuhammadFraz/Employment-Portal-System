import React from 'react';

const TagComponent = ({ tag, classes, onClick }) => {
  return (
    <div className={classes}  onClick={() => onClick(tag)}>
            {tag && <h3 className=''>{tag.title}</h3>}
    </div>
  );
};

export default TagComponent;
