import React from 'react';

const TagComponent = ({ tagName, classes, onClick }) => {
  return (
    <div className={classes}  onClick={onClick}>
      <h3 className=''>{tagName}</h3>
    </div>
  );
};

export default TagComponent;
