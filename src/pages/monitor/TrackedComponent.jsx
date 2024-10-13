import WithEventTracker from './WithEventTracker';

function TrackedComponent() {
  return (
    <div>
      <h1>Click anywhere or resize the page</h1>
      <p>This components should track click and scroll event</p>
    </div>
  );
}

export default WithEventTracker(TrackedComponent);
