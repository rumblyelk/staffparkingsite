import { parseISO, format } from "date-fns";
import styles from "./listitem.module.css";

export default function ListItem({ spot }) {
  function parseTime(ts) {
    const date = parseISO(ts);
    return format(date, "HH:mm:ss, dd-MM-yyy");
  }

  return (
    <div>
      <div
        className={
          spot[1].plate
            ? styles.itemContainerOccupied
            : styles.itemContainerVacant
        }
      >
        {spot[1].plate ? (
          <div className={styles.textDisplay}>
            <span>
              <strong>{spot[0]}</strong>
            </span>
            <span>|</span>
            <span>{spot[1].plate}</span>
            <span>|</span>
            <span>{parseTime(spot[1].timestamp)}</span>
          </div>
        ) : (
          <div className={styles.textDisplay}>
            <span>{spot[0]}</span>
            <span>
              <strong>Spot available</strong>
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
