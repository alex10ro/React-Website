/**
 * Updating Award Status Component
 * 
 * This will make Updating the Award from "None" to "Won Award" and vice versa possible
 * 
 * @author Cristian Mitoi
 */

function UpdateAward(props) {
 
    const handleSelect = (event) => {

  //Create form data to pass the award and paper_id to the API
        const formData = new FormData();
        formData.append('award', event.target.value);
        formData.append('paper_id', props.paper.paper_id);
       
        //get token from the local storage
        const token = localStorage.getItem('token'); 
       
        fetch("http://unn-w20010102.newnumyspace.co.uk/kf6012/assessment/api/update",
          {
            method: 'POST',
            headers: new Headers( { "Authorization": "Bearer " + token}),
            body: formData
          })
        .then(
          (response) => response.text()
        )
        .then(
          (json) => {
            console.log(json)
            props.handleUpdate()
          })
        .catch(
          (e) => {
            console.log(e.message)
          })
      }

      return (
        <div>
            {props.paper.title} &nbsp; &nbsp;
            <select value={props.paper.award.toLowerCase()} onChange={handleSelect}>
                    <option value="true">Won award</option>
                    <option value="none">None</option>
            </select>
        </div>
    )
}
  export default UpdateAward;