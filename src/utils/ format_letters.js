import React from 'react';

export const format_first_uppercase_letter = text => {
  const upperText = text.replace(
    /\w\S*/g,
    word => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase(),
  );
  return upperText;
};
