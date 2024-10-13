import './UserDashboard.css';
import WithSessionTracker from './WithSessionTracker';

function UserDashboard({ sessionTime }) {
  return (
    <div className="dashboard">
      <h1>Dashboard utilizator</h1>
      <p>Bine ai venit </p>
      {sessionTime > 0 ? (
        <p>Timp petrecut pe această pagină: {sessionTime.toFixed(2)} secunde</p>
      ) : null}
    </div>
  );
}

export default WithSessionTracker(UserDashboard);
