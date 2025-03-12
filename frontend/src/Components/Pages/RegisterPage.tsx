import  { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import { styled } from '@mui/material/styles';
import { api_public } from "../../utils/api";
import { useNavigate } from "react-router-dom";
const StyledBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 20,
  maxWidth: 400,
  margin: 'auto',
  borderRadius: 8,
  backgroundColor: '#f4f6f8',
});

const RegisterPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister =async () => {
    try{
     
    await api_public.post('user/adduser',{email,mobile,username,password});
    
    navigate(`/`);
    }catch(err){
      console.log(err)
    console.log("Error during registeration");
    }
  };

  return (
    <StyledBox>
      <Typography variant="h5" fontWeight="bold" color="primary" gutterBottom>
        Register
      </Typography>

      <TextField
        fullWidth
        label="Email"
        variant="outlined"
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextField
        fullWidth
        label="Mobile"
        variant="outlined"
        margin="normal"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />

      <TextField
        fullWidth
        label="Username"
        variant="outlined"
        margin="normal"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <TextField
        fullWidth
        label="Password"
        variant="outlined"
        type="password"
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button
        fullWidth
        variant="contained"
        color="primary"
        sx={{ mt: 2, py: 1.5, borderRadius: "8px", fontSize: "1rem", fontWeight: "bold" }}
        onClick={handleRegister}
      >
        Register
      </Button>
    </StyledBox>
  );
};

export default RegisterPage;
