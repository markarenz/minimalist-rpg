const screens = {
  xs: '0px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

const getCurrentBreakpoints = () => {
  // find between and select lower value
  const thisW = window.innerWidth;
  let newBp = null;
  Object.keys(screens).forEach((k) => {
    const thisBp = parseInt(screens[k].replace('px'), 10);
    if (thisW > thisBp) {
      newBp = k;
    }
  });
  return newBp;
};

export default getCurrentBreakpoints;
