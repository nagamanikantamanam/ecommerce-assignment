import { TextField, Button, Typography, Paper } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { styled } from "@mui/system";
import { useCallback, useState } from "react";
import useLogin from "../../helpers/hooks/useLogin";
const StyledPaper = styled(Paper)({
  padding: "2rem",
  maxWidth: "400px",
  textAlign: "center",
  borderRadius: "12px",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  margin: "auto auto",
});

const LoginPage = () => {
  const [user, setUser] = useState<string>("");
  const [pwd, setPwd] = useState<string>("");
  const login = useLogin();
  const handleClick = useCallback(() => {
    login(user, pwd);
  }, [user, pwd]);

  return (
    <StyledPaper>
      <LockOutlinedIcon
        style={{ fontSize: 50, color: "#1976d2", marginBottom: 10 }}
      />
      <Typography variant="h5" fontWeight="bold" color="primary" gutterBottom>
        Login
      </Typography>
      <TextField
        fullWidth
        label="username"
        variant="outlined"
        margin="normal"
        onChange={(e) => {
          setUser(e.target.value);
        }}
      />
      <TextField
        fullWidth
        label="Password"
        variant="outlined"
        type="password"
        margin="normal"
        onChange={(e) => {
          setPwd(e.target.value);
        }}
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
    </StyledPaper>
  );
};

export default LoginPage;
