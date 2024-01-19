import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LockIcon from "@mui/icons-material/Lock";
import image from "../assets/result.png";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { Form, Formik } from "formik";
import { object, string } from "yup";
import useAuthCalls from "../service/useAuthCalls";

const Login = () => {

  const { login } = useAuthCalls();

  const loginSchema = object({
    email: string()
      .email("Please enter a valid e-mail.")
      .required("E-mail entry is mandatory."),
    password: string()
      .required("Password is mandatory.")
      .min(8, "The password must contain at least 8 characters.")
      .max(16, "The password must contain a maximum of 16 characters.")
      .matches(/\d+/, "The password must contain at least one number.")
      .matches(
        /[a-z]/,
        "The password must contain at least one lower case letter."
      )
      .matches(
        /[A-Z]/,
        "The password must contain at least one capital letter."
      )
      .matches(
        /[@$!%*?&]+/,
        "The password must contain at least one special character (@$!%*?&)."
      ),
  });

    return (
      <Container maxWidth="lg">
        <Grid
          container
          justifyContent="center"
          direction="row-reverse"
          sx={{
            height: "100vh",
            p: 2,
          }}
        >
          <Grid item xs={12} mb={3}>
            <Typography variant="h3" color="primary" align="center">
              STOCK APP
            </Typography>
          </Grid>

          <Grid item xs={12} sm={10} md={6}>
            <Avatar
              sx={{
                backgroundColor: "secondary.light",
                m: "auto",
                width: 40,
                height: 40,
              }}
            >
              <LockIcon size="30" />
            </Avatar>
            <Typography
              variant="h4"
              align="center"
              mb={4}
              color="secondary.light"
            >
              Login
            </Typography>
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={loginSchema}
              onSubmit={(values, actions) => {
                login(values);
                actions.resetForm();
                actions.setSubmitting(false);
              }}
            >
              {({ handleChange, values, touched, errors, handleBlur }) => (
                <Form>
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                  >
                    <TextField
                      label="E-mail"
                      name="email"
                      id="email"
                      type="email"
                      variant="outlined"
                      value={values.email}
                      onChange={handleChange}
                      error={touched.email && Boolean(errors.email)}
                      helperText={errors.email}
                      onBlur={handleBlur}
                    />
                    <TextField
                      label="Password"
                      name="password"
                      id="password"
                      type="password"
                      variant="outlined"
                      value={values.password}
                      onChange={handleChange}
                      error={touched.password && Boolean(errors.password)}
                      helperText={errors.password}
                      onBlur={handleBlur}
                    />
                    <Button variant="contained" type="submit">
                      Submit
                    </Button>
                  </Box>
                </Form>
              )}
            </Formik>

            <Box sx={{ textAlign: "center", mt: 2 }}>
              <Link to="/register">Don't you have an account?</Link>
            </Box>
          </Grid>

          <Grid item xs={10} sm={7} md={6}>
            <Container>
              <img src={image} alt="img" width={"100%"} />
            </Container>
          </Grid>
        </Grid>
      </Container>
    );
};

export default Login;
