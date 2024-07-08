import { createTable } from './generate-table.js';
import { makeToastNotification } from './helper.js';
import { fetchData } from './views-fetcher.js';

const createGoalObjectiveToggle = document.getElementById('create-new-goal-button');
const newGoalObjectiveForm = document.getElementById('new-goal-form');

createGoalObjectiveToggle.onclick = () => newGoalObjectiveForm.classList.toggle('active');

newGoalObjectiveForm.onsubmit = event => {
  event.preventDefault();

  const formValues = {
    college_id: document.getElementById('college_id').value,
    department_id: document.getElementById('department_id').value,
    text: document.getElementById('text').value,
  };

  const formData = new FormData();

  formData.append("text", formValues['text']);
  formData.append("college_id", formValues['college_id']);
  formData.append("department_id", formValues['department_id']);

  FormData();
    // college_id: "2"
    // department_id: "2"
    // text: "To protect and improve students learning efficiency."

  fetch("views/goal/create.php", {
    method: "POST",
    body: formData,
  })
    .then(response => response.json())
    .then(data => {
      if (data.status === "error") {
        makeToastNotification(data.message);
      }

      if (data.status === "success") {
        makeToastNotification(data.message);
        // leave empty
      }
    })
    .catch(error => console.error("Error:", error));
}

createTable(
  await fetchData("views/table_headers.php?table=goal"),
  await fetchData("views/goal.php/goals")
);


