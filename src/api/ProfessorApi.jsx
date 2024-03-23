export async function getProfessors() {
  try {
    const response = await fetch(
      import.meta.env.VITE_REACT_BACKEND_URL + "/professors",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const professors = await response.json();
    return professors;
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
}

export async function sentInstructionDate(selectedDate, professorId) {
  try {
    console.log(professorId)
      const response = await fetch(
          import.meta.env.VITE_REACT_BACKEND_URL + "/instructions",
          {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
                  Authorization: "Bearer " + localStorage.getItem("token"),
              },
              body: JSON.stringify({
                  date: selectedDate,
                  professorId: professorId
              })
          }
      );
      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }
      const date = await response.json();
      return date;
  } catch (error) {
      console.error("There has been a problem with your fetch operation:", error);
  }
}

export async function saveName(name, surname, confirmPasswordName) {
  try {
      const response = await fetch(
          import.meta.env.VITE_REACT_BACKEND_URL + "/updateNameSurname",
          {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
                  Authorization: "Bearer " + localStorage.getItem("token"),
              },
              body: JSON.stringify({
                  name: name,
                  surname: surname,
                  password: confirmPasswordName
              })
          }
      );
      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response
  } catch (error) {
      console.error("There has been a problem with your post operation:", error);
  }
}

export async function savePicture(pictureUrl, confirmPasswordPicture) {
  try {
    console.log(pictureUrl)
      const response = await fetch(
          import.meta.env.VITE_REACT_BACKEND_URL + "/updateProfilePicture",
          {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
                  Authorization: "Bearer " + localStorage.getItem("token"),
              },
              body: JSON.stringify({
                  profilePictureUrl: pictureUrl,
                  password: confirmPasswordPicture
              })
          }
      );
      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response
  } catch (error) {
      console.error("There has been a problem with your post operation:", error);
  }
}

export async function savePassword(newpassword, confirmPassword) {
  try {
      const response = await fetch(
          import.meta.env.VITE_REACT_BACKEND_URL + "/updatePassword",
          {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
                  Authorization: "Bearer " + localStorage.getItem("token"),
              },
              body: JSON.stringify({
                  newpassword: newpassword,
                  password: confirmPassword
              })
          }
      );
      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response
  } catch (error) {
      console.error("There has been a problem with your post operation:", error);
  }
}


export async function getInstructions() {
  const response = await fetch(
    `${import.meta.env.VITE_REACT_BACKEND_URL}/instructions`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const instructions = await response.json();
  console.log(instructions)
  return instructions;
}