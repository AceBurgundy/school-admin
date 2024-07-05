<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Student</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  <link rel="stylesheet" href="./styles/coursecurriculum.css">
  <link rel="stylesheet" href="./styles/global.css">
  <script defer type="module" src="./scripts/coursecurriculum.js"></script>
</head>

<body>
  <button id="create-new-course-curriculum-button" class="btn btn-primary">Create</button>

  <form id="new-course-curriculum-form">

    <div class="form-group">
      <label for="text">Text</label>
      <input type="text" class="form-control" id="text" placeholder="Input text">
    </div>

    <div class="form-group">
      <label for="course-id">Course ID</label>
      <input type="number" class="form-control" id="course-id" name="course-id" placeholder="Course ID" maxlength="255">
    </div>

    <button type="submit" class="btn btn-primary">Submit</button>

  </form>

</body>

</html>