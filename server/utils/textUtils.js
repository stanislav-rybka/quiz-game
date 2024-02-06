export const isNumeric = (text) => {
  if (typeof text != 'string') {
    return false;
  }

  return (
    !isNaN(text) 
    && 
    !isNaN( parseFloat(text) ) 
  );
};