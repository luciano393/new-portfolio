/* import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEntriesAction } from "../app/slices/entriesSlice";
import { Link, useParams } from 'react-router-dom';

export const Entries = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.entries.value);
  const params = useParams();

  useEffect(() => {
    dispatch(getEntriesAction());
  }, []);

  return (
    <div className="Entries">
      <h2>All posts</h2>
      <div className="box-container">
        {data
          ? data.map((entry) => (
              <Link to={`/${entry.id}`} className="box" key={entry.id}>
                <h3>{entry.title}</h3>
                <p>{entry.description}</p>
              </Link>
            ))
          : null}
      </div>
    </div>
  );
};
 */