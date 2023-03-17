/**
 * Conference page component
 * 
 * This page will show information about papers
 * 
 * @author Cristian Mitoi
 */


import React, { useState, useEffect } from "react";
import PaperAuthor from "./PaperAuthor";
import './Conferences.css'

function Conferences(props) {
  const [track, setTrack] = useState([]);
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectValue, setSelectValue] = useState("all");

  useEffect(() => {
    fetch("http://unn-w20010102.newnumyspace.co.uk/kf6012/assessment/api/paper" +
        props.track)
      .then(
        (response) => response.json()
      )
      .then(
        (json) => {
              setLoading(false);
              setTrack(json.data);
        }
      )
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const searchPapers = (value) => {
    const information = value.title + " " + value.abstract;
    return information.toLowerCase().includes(searchTerm.toLowerCase());
  };

  const selectPapers = (value) => {
      if (selectValue === "true") return (value.award === "true")
      if (selectValue === "none") return (value.award === "none")
      if(selectValue === "all") return (value.award)
  };

  // This takes what is typed by the user (event.target.value) and
  // stores it in state
  const onChange = (event) => setSearchTerm(event.target.value);
  const onChangeSelect = (event) => setSelectValue(event.target.value);

  const listOfPapers = (
    <ul>
      {track.filter(searchPapers).filter(selectPapers).slice(0, limit).map((value, key) => (
        <p key={key}> <div className="infocontainer">
          <section><p><strong>Title:</strong> {value.title}</p></section>
            <p>&nbsp; &nbsp; &nbsp; &nbsp; <strong>Abstract:</strong> {value.abstract}</p>
            <p><strong>Award:</strong> {value.award}</p>
            </div>
            <PaperAuthor paper_id={value.paper_id} />
          </p>
        ))}
    </ul>
  );

  const showMore = () => {
    setLimit(limit + 5);
  };

  return (
    <div>
      <h1>{props.conference} Papers</h1>
      {loading && <p>Loading...</p>}
      <div>Search...</div>
      <input value={searchTerm} onChange={onChange} />

      <div>
        <br></br>
        <select value={selectValue} onChange={onChangeSelect}>
          <option value="all">All</option>
          <option value="true">Award Winning</option>
          <option value="none">No Award</option>
        </select>
      </div>
      <br></br>
      <div class="Papers">{listOfPapers}</div>
      {limit < track.length && !loading && (
        <button onClick={showMore}>Show More</button>
      )}
    </div>
  );
}

export default Conferences;
