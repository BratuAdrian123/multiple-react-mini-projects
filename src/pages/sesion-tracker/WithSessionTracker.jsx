import { useEffect, useState } from 'react';

function WithSessionTracker(WrappedComponent) {
  return function SessionTrackerdComponent(props) {
    const [sessionTime, setSessionTime] = useState(0);

    useEffect(() => {
      const startTime = Date.now();
      const interval = setInterval(() => {
        setSessionTime((Date.now() - startTime) / 1000);
      }, 1000); // Actualizează la fiecare secundă

      return () => {
        clearInterval(interval); // Oprește timer-ul la demontare
        const endTime = Date.now();
        const totalTime = (endTime - startTime) / 1000;
        console.log(
          `Componenta a fost vizualizată timp de: ${totalTime.toFixed(
            2
          )} secunde.`
        );
      };
    }, []);
    return (
      <WrappedComponent {...props} sessionTime={sessionTime}></WrappedComponent>
    );
  };
}

export default WithSessionTracker;
