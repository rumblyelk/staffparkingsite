export default function ListItem({ spot }) {
  return (
    <div>
      {spot.plate ? (
        <h3>
          {spot.plate} | {spot.timestamp}
        </h3>
      ) : (
        <h3>Spot available</h3>
      )}
      <hr />
    </div>
  );
}
