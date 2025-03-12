import { TextField, Button, Typography, Modal, Box } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useState, useCallback, useEffect } from "react";
import useLogin from "../../helpers/hooks/useLogin";
import useMenuStore from "../../Stores/MenuStore";
import { styled } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";


  
const StyledBox = styled(Box)({
  
 backgroundColor:"white",
  
  position:'absolute',
  padding: 40,
  borderRadius: 4,
  top:'25%',
  left:'35%',
  width:"30%",
  height:"50%"
});



const LoginPage = () => {
  console.log("login one")
  const navigate = useNavigate();
      
  const [user, setUser] = useState<string>("");
  const [pwd, setPwd] = useState<string>("");

  const login = useLogin();
  const handleClick = useCallback(() => {
    login(user, pwd); 
  }, [user, pwd]);

  const setLoginClose = useMenuStore((state) => state.setLoginClose);
  const isLoginOpen = useMenuStore((state) => state.isLoginOpen);


  useEffect(() => {
    
    if (isLoginOpen) {
      setUser("");  
      setPwd("");   
    }
  }, [isLoginOpen]); 
  return (
   
    <Modal
      open={isLoginOpen}
      onClose={setLoginClose} 
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
     >
     
      <StyledBox >
        
        <LockOutlinedIcon
          style={{ fontSize: 50, color: "#1976d2", marginBottom: 10 }}
        />
        <Typography variant="h5" fontWeight="bold" color="primary" gutterBottom>
          Login
        </Typography>

        
        <TextField
          fullWidth
          label="Mobile or Email"
          variant="outlined"
          margin="normal"
          value={user}
          onChange={(e) => setUser(e.target.value)} 
          
        />

       
        <TextField
          fullWidth
          label="Password"
          variant="outlined"
          type="password"
          margin="normal"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)} 
        />

        
        <Button
          fullWidth
          variant="contained"
          color="primary"
          sx={{
            mt: 2,
            py: 1.5,
            borderRadius: "8px",
            fontSize: "1rem",
            fontWeight: "bold",
          }}
          onClick={handleClick} 
        >
          Login
        </Button>
        <Typography fontWeight="bold" onClick={() =>{ setLoginClose();
          navigate('/register')}} style={{ cursor: 'pointer' }}>
  Don't have an account? Register Here
</Typography>

      </StyledBox>
     
    </Modal>
   
  );
};

export default LoginPage;
