import React, { useState } from 'react';
import {
  Button,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import './SettingsPage.css'; // Import CSS file for custom styles
import { saveName } from "../../api/ProfessorApi";
import { savePicture } from "../../api/ProfessorApi";
import { savePassword } from "../../api/ProfessorApi";

const SettingsPage = () => {
  const [profilePicture, setProfilePicture] = useState(null);

  const [confirmPasswordProfilePicture, setConfirmPasswordProfilePicture] = useState('');
  const [confirmPasswordName, setConfirmPasswordName] = useState('');
  const [confirmPasswordEmail, setConfirmPasswordEmail] = useState('');
  const [confirmPasswordPassword, setConfirmPasswordPassword] = useState('');

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');

  // Handlers for updating profile picture, name, email, and password
  const handleProfilePictureChange = (event) => {
    setProfilePicture(event.target.files[0]);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSurnameChange = (event) => {
    setSurname(event.target.value);
  };

  const handleEmailChange = (event) => {
    setNewEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  // Handlers for saving changes
  const handleProfilePictureSave = async () => {

  const reader = new FileReader();
  reader.onload = () => {
      const profilePictureBase64 = reader.result.split(",")[1];
      const profilePictureUrl = `data:image/png;base64,${profilePictureBase64}`;

      savePicture(profilePictureUrl, confirmPasswordProfilePicture);
      };
  reader.readAsDataURL(profilePicture);
  };

  const handleNameSave = async (name, surname, confirmPasswordName) => {

    try {
        var result = await saveName(name, surname, confirmPasswordName);
        console.log(result)
    } catch (error) {
        console.error("Error saving name:", error);
    }
};


  const handlePasswordSave = async () => {
    console.log(confirmPasswordPassword)
    console.log(newPassword)
    try {
      var result = await savePassword(newPassword, confirmPasswordPassword);
      console.log(result)
  } catch (error) {
      console.error("Error saving password:", error);
  }  
};

  return (
    <div className="register-wrapper">
      <div className="register-container">
        <h2>Profilna fotografija</h2>
        <input type="file" className="form-control" onChange={handleProfilePictureChange} />
        <InputLabel htmlFor="confirmPasswordProfilePicture">Lozinka</InputLabel>
        <OutlinedInput
          id="confirmPasswordProfilePicture"
          type="password"
          value={confirmPasswordProfilePicture}
          onChange={(e) => setConfirmPasswordProfilePicture(e.target.value)}
          startAdornment={
            <InputAdornment position="start">
              <img
                src="/icons/password-icon.svg"
                style={{ height: "15px", width: "15px" }}
              />
            </InputAdornment>
          }
          style={{ marginBottom: '1rem' }}
        />
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: '1rem' }}
          onClick={handleProfilePictureSave}
        >
          Spremi
        </Button>

        <h2>Ime i prezime</h2>
        <InputLabel htmlFor="name">Novo Ime</InputLabel>
        <OutlinedInput
          id="name"
          type="text"
          value={name}
          onChange={handleNameChange}
          startAdornment={
            <InputAdornment position="start">
              <img
                src="/icons/person-icon.svg"
                style={{ height: "15px", width: "15px" }}
              />
            </InputAdornment>
          }
          style={{ marginBottom: '1rem' }}
        />
        <InputLabel htmlFor="surname">Novo Prezime</InputLabel>
        <OutlinedInput
          id="surname"
          type="text"
          value={surname}
          onChange={handleSurnameChange}
          startAdornment={
            <InputAdornment position="start">
              <img
                src="/icons/person-icon.svg"
                style={{ height: "15px", width: "15px" }}
              />
            </InputAdornment>
          }
          style={{ marginBottom: '1rem' }}
        />
        <InputLabel htmlFor="confirmPasswordName">Lozinka</InputLabel>
        <OutlinedInput
          id="confirmPasswordName"
          type="password"
          value={confirmPasswordName}
          onChange={(e) => setConfirmPasswordName(e.target.value)}
          startAdornment={
            <InputAdornment position="start">
              <img
                src="/icons/password-icon.svg"
                style={{ height: "15px", width: "15px" }}
              />
            </InputAdornment>
          }
          style={{ marginBottom: '1rem' }}
        />
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: '1rem' }}
          onClick={() => handleNameSave(name, surname, confirmPasswordName)}
        >
          Spremi
        </Button>

        <h2>Lozinka</h2>
        <InputLabel htmlFor="newPassword">Nova lozinka</InputLabel>
        <OutlinedInput
          id="newPassword"
          type="password"
          value={newPassword}
          onChange={handlePasswordChange}
          startAdornment={
            <InputAdornment position="start">
              <img
                src="/icons/password-icon.svg"
                style={{ height: "15px", width: "15px" }}
              />
            </InputAdornment>
          }
          style={{ marginBottom: '1rem' }}
        />
        <InputLabel htmlFor="confirmPasswordPassword">Lozinka</InputLabel>
        <OutlinedInput
          id="confirmPasswordPassword"
          type="password"
          value={confirmPasswordPassword}
          onChange={(e) => setConfirmPasswordPassword(e.target.value) }
          startAdornment={
            <InputAdornment position="start">
              <img
                src="/icons/password-icon.svg"
                style={{ height: "15px", width: "15px" }}
              />
            </InputAdornment>
          }
            style={{ marginBottom: '1rem' }}
        />
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: '1rem' }}
          onClick={() => handlePasswordSave()}
        >
          Spremi
        </Button>
      </div>
    </div>
  );
};


export default SettingsPage;
