import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LockIcon from "@mui/icons-material/Lock";
import image from "../assets/result.png";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { Form, Formik } from "formik";
import { object, string } from "yup";
import useAuthCalls from "../service/useAuthCalls";

const Register = () => {
  const { register } = useAuthCalls();
  const registerSchema = object({
    username : string().required("Kullanıcı adı girişi zorunludur."),
    firstName : string().required("İsim girişi zorunludur."),
    lastName : string().required("Soyisim girişi zorunludur."),
    email: string()
      .email("Lütfen geçerli bir e-posta giriniz.")
      .required("E-posta girişi zorunludur."),
    password: string()
      .required("Şifre zorunludur.")
      .min(8, "Şifre en az 8 karakter içermelidir.")
      .max(16, "Şifre en fazla 16 karakter içermelidir.")
      .matches(/\d+/, "Şifre en az bir rakam içermelidir.")
      .matches(/[a-z]/, "Şifre en az bir küçük harf içermelidir.")
      .matches(/[A-Z]/, "Şifre en az bir büyük harf içermelidir.")
      .matches(/[@$!%*?&]+/, "Şifre en az bir özel karakter (@$!%*?&) içermelidir.")
  });
  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        rowSpacing={{ sm: 3 }}
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <Grid item xs={12}>
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
            mb={2}
            color="secondary.light"
          >
            Kayıt Olun
          </Typography>

          <Formik
            initialValues={{
              username: "",
              firstName: "",
              lastName: "",
              email: "",
              password: "",
            }}
            validationSchema={registerSchema}
            onSubmit={(values, actions) => {
              register(values);
              actions.resetForm();
              actions.setSubmitting(false);
            }}
          >
            {({ handleChange, values, touched, errors, handleBlur }) => (
              <Form>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <TextField
                    label="Kullanıcı Adı"
                    name="username"
                    id="username"
                    type="text"
                    variant="outlined"
                    value={values.username}
                    onChange={handleChange}
                    error={touched.username && Boolean(errors.username)}
                    helperText={errors.username}
                    onBlur={handleBlur}
                  />
                  <TextField
                    label="İsim"
                    name="firstName"
                    id="firstName"
                    type="text"
                    variant="outlined"
                    value={values.firstName}
                    onChange={handleChange}
                    error={touched.firstName && Boolean(errors.firstName)}
                    helperText={errors.firstName}
                    onBlur={handleBlur}
                  />
                  <TextField
                    label="Soyisim"
                    name="lastName"
                    id="lastName"
                    type="text"
                    variant="outlined"
                    value={values.lastName}
                    onChange={handleChange}
                    error={touched.lastName && Boolean(errors.lastName)}
                    helperText={errors.lastName}
                    onBlur={handleBlur}
                  />
                  <TextField
                    label="E-posta"
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
                    label="Şifre"
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
                  <Button type="submit" variant="contained" size="large">
                    Gönder
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>

          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Link to="/">Hesabınız var mı?</Link>
          </Box>
        </Grid>

        <Grid item xs={0} sm={7} md={6}>
          <Container>
            <img src={image} alt="" width={"100%"} />
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
