import { TextField, Button } from '@mui/material';

interface UserProfileFormProps {
  email: string;
  mobile: string;
  isEditable: boolean;
  onEmailChange: (email: string) => void;
  onMobileChange: (mobile: string) => void;
  onSave: () => void;
  onEdit: () => void;
}

const UserProfileForm = ({
  email,
  mobile,
  isEditable,
  onEmailChange,
  onMobileChange,
  onSave,
  onEdit,
}: UserProfileFormProps) => {
  return (
    <>
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => onEmailChange(e.target.value)}
        disabled={!isEditable}
      />

      <TextField
        label="Mobile"
        variant="outlined"
        fullWidth
        margin="normal"
        value={mobile}
        onChange={(e) => onMobileChange(e.target.value)}
        disabled={!isEditable}
      />

      {!isEditable ? (
        <Button variant="contained" color="secondary" onClick={onEdit} sx={{ mt: 2 }}>
          Edit
        </Button>
      ) : (
        <Button variant="contained" color="primary" onClick={onSave} sx={{ mt: 2 }}>
          Save
        </Button>
      )}
    </>
  );
};

export default UserProfileForm;
