import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import AddIcon from "@mui/icons-material/Add";
import { v4 as uuidv4 } from "uuid";

// Validation Schema using Yup
const validationSchema = Yup.object().shape({
  fullName: Yup.string().required("Full Name is required"),
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const SignUp: React.FC = () => {
  const [generatedUsername, setGeneratedUsername] = useState("");

  // Function to generate a random username
  const generateUsername = () => {
    const randomUsername = `user_${uuidv4().slice(0, 8)}`;
    setGeneratedUsername(randomUsername);
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#171622",
      }}
    >
      <Box
        sx={{
          width: "400px",
          padding: "40px",
          background: "#1f1e26",
          borderRadius: "8px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
        }}
      >
        <Typography variant="h4" sx={{ color: "#fff", marginBottom: "20px" }}>
          Sign Up
        </Typography>

        <Formik
          initialValues={{
            fullName: "",
            username: generatedUsername || "",
            email: "",
            avatar: null,
            coverImage: null,
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values); // Form submit logic
          }}
        >
          {({ setFieldValue, values }) => (
            <Form>
              {/* Full Name */}
              <Box sx={{ marginBottom: "16px" }}>
                <Field
                  as={TextField}
                  name="fullName"
                  label="Full Name"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{
                    style: { color: "white" }, // Label color
                  }}
                  inputProps={{
                    style: { color: "white" }, // Input text color
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#3d3d3d",
                      },
                      "&:hover fieldset": {
                        borderColor: "white",
                      },
                    },
                  }}
                />
                <ErrorMessage name="fullName">
                  {(msg) => (
                    <Typography variant="body2" color="error">
                      {msg}
                    </Typography>
                  )}
                </ErrorMessage>
              </Box>

              {/* Username */}
              <Box sx={{ display: "flex", gap: "10px", marginBottom: "16px" }}>
                <Field
                  as={TextField}
                  name="username"
                  label="Username"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{
                    style: { color: "white" }, // Label color
                  }}
                  inputProps={{
                    style: { color: "white" }, // Input text color
                  }}
                  value={values.username || generatedUsername}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#3d3d3d",
                      },
                      "&:hover fieldset": {
                        borderColor: "white",
                      },
                    },
                  }}
                />
                <Button
                  variant="contained"
                  onClick={generateUsername}
                  sx={{
                    background: "#3d3d3d",
                    "&:hover": { background: "#5a5a5a" },
                  }}
                >
                  Generate
                </Button>
              </Box>

              <ErrorMessage name="username">
                {(msg) => (
                  <Typography variant="body2" color="error">
                    {msg}
                  </Typography>
                )}
              </ErrorMessage>

              {/* Email */}
              <Box sx={{ marginBottom: "16px" }}>
                <Field
                  as={TextField}
                  name="email"
                  label="Email"
                  type="email"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{
                    style: { color: "white" }, // Label color
                  }}
                  inputProps={{
                    style: { color: "white" }, // Input text color
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#3d3d3d",
                      },
                      "&:hover fieldset": {
                        borderColor: "white",
                      },
                    },
                  }}
                />
                <ErrorMessage name="email">
                  {(msg) => (
                    <Typography variant="body2" color="error">
                      {msg}
                    </Typography>
                  )}
                </ErrorMessage>
              </Box>

              {/* Avatar Upload */}
              <Box sx={{ marginBottom: "16px", textAlign: "center" }}>
                <label htmlFor="avatar">
                  <Box
                    sx={{
                      width: "100px",
                      height: "100px",
                      background: "#3d3d3d",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      margin: "0 auto",
                      "&:hover": { background: "#5a5a5a" },
                    }}
                  >
                    <AddIcon sx={{ color: "white", fontSize: "2rem" }} />
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{ color: "white", marginTop: "8px" }}
                  >
                    Choose Avatar
                  </Typography>
                  <input
                    type="file"
                    id="avatar"
                    name="avatar"
                    accept="image/*"
                    onChange={(e) =>
                      setFieldValue(
                        "avatar",
                        e.target.files ? e.target.files[0] : null
                      )
                    }
                    style={{ display: "none" }}
                  />
                </label>
              </Box>

              {/* Cover Image Upload */}
              <Box sx={{ marginBottom: "16px", textAlign: "center" }}>
                <label htmlFor="coverImage">
                  <Box
                    sx={{
                      width: "100px",
                      height: "100px",
                      background: "#3d3d3d",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      margin: "0 auto",
                      "&:hover": { background: "#5a5a5a" },
                    }}
                  >
                    <AddIcon sx={{ color: "white", fontSize: "2rem" }} />
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{ color: "white", marginTop: "8px" }}
                  >
                    Choose Cover Image
                  </Typography>
                  <input
                    type="file"
                    id="coverImage"
                    name="coverImage"
                    accept="image/*"
                    onChange={(e) =>
                      setFieldValue(
                        "coverImage",
                        e.target.files ? e.target.files[0] : null
                      )
                    }
                    style={{ display: "none" }}
                  />
                </label>
              </Box>

              {/* Password */}
              <Box sx={{ marginBottom: "16px" }}>
                <Field
                  as={TextField}
                  name="password"
                  label="Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{
                    style: { color: "white" }, // Label color
                  }}
                  inputProps={{
                    style: { color: "white" }, // Input text color
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#3d3d3d",
                      },
                      "&:hover fieldset": {
                        borderColor: "white",
                      },
                    },
                  }}
                />
                <ErrorMessage name="password">
                  {(msg) => (
                    <Typography variant="body2" color="error">
                      {msg}
                    </Typography>
                  )}
                </ErrorMessage>
              </Box>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  background: "#3d3d3d",
                  "&:hover": { background: "#5a5a5a" },
                  color: "white",
                  padding: "10px 0",
                }}
              >
                Sign Up
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default SignUp;
