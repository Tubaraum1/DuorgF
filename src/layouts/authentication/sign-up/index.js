import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/sing-up.jpg";

function Cover() {
  const [userType, setUserType] = useState("doador"); // Estado para o tipo de usuário

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  return (
    <CoverLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Faça seu Cadastro!
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            Insira o seu e-mail e senha para se cadastrar
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput type="text" label="Nome" variant="standard" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="email" label="E-mail" variant="standard" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="password" label="Senha" variant="standard" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              {/* Adicionando a opção para o tipo de usuário (Doador ou Receptor) */}
              <MDTypography variant="body2" color="text" mb={1}>
                Você é um:
              </MDTypography>
              <RadioGroup value={userType} onChange={handleUserTypeChange} row>
                <FormControlLabel value="doador" control={<Radio />} label="Doador" />
                <FormControlLabel value="receptor" control={<Radio />} label="Receptor" />
              </RadioGroup>
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Checkbox />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;Concordo com os &nbsp;
              </MDTypography>
              <MDTypography
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                color="info"
                textGradient
              >
                Termos e condições
              </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" fullWidth>
                Cadastrar
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Já possui cadastro?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Entrar
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </CoverLayout>
  );
}

export default Cover;
