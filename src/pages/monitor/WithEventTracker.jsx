import { useEffect } from 'react';

function WithEventTracker(WrappedComponent) {
  return function EventTrackedComponent(props) {
    useEffect(() => {
      function handleClick(event) {
        console.log('element clicked', event?.target);
      }

      function handleResize() {
        console.log('element resized', window.innerWidth, window.innerHeight);
      }

      window.addEventListener('click', handleClick);
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('click', handleClick);
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return <WrappedComponent {...props}></WrappedComponent>;
  };
}

export default WithEventTracker;
