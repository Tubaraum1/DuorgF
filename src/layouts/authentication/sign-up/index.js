import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

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
  const [isSmoker, setIsSmoker] = useState(""); // Estado para a opção de fumante
  const [bloodType, setBloodType] = useState(""); // Estado para o tipo sanguíneo
  const [donationOrgans, setDonationOrgans] = useState([]); // Estado para os órgãos a serem doados
  const [hasAllergies, setHasAllergies] = useState(""); // Estado para alergias
  const [familyHistory, setFamilyHistory] = useState(""); // Estado para histórico familiar
  const [waitingOrgans, setWaitingOrgans] = useState(""); // Estado para o órgão que está aguardando (receptor)

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handleDonationOrgansChange = (event) => {
    setDonationOrgans(event.target.value);
  };

  const handleWaitingOrgansChange = (event) => {
    setWaitingOrgans(event.target.value);
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

            {/* Exibindo o formulário do doador quando o tipo de usuário for doador */}
            {userType === "doador" && (
              <>
                <MDBox mb={2}>
                  <FormControl fullWidth>
                    <InputLabel>Tipo Sanguíneo</InputLabel>
                    <Select
                      value={bloodType}
                      onChange={(e) => setBloodType(e.target.value)}
                      label="Tipo Sanguíneo"
                    >
                      <MenuItem value="A+">A+</MenuItem>
                      <MenuItem value="A-">A-</MenuItem>
                      <MenuItem value="B+">B+</MenuItem>
                      <MenuItem value="B-">B-</MenuItem>
                      <MenuItem value="AB+">AB+</MenuItem>
                      <MenuItem value="AB-">AB-</MenuItem>
                      <MenuItem value="O+">O+</MenuItem>
                      <MenuItem value="O-">O-</MenuItem>
                    </Select>
                  </FormControl>
                </MDBox>
                <MDBox mb={2}>
                  <MDTypography variant="body2" color="text" mb={1}>
                    Órgãos que você tem intenção de doar:
                  </MDTypography>
                  <Select
                    multiple
                    value={donationOrgans}
                    onChange={handleDonationOrgansChange}
                    fullWidth
                    renderValue={(selected) => selected.join(", ")}
                  >
                    <MenuItem value="coração">Coração</MenuItem>
                    <MenuItem value="rins">Rins</MenuItem>
                    <MenuItem value="fígado">Fígado</MenuItem>
                    <MenuItem value="pulmões">Pulmões</MenuItem>
                    <MenuItem value="pâncreas">Pâncreas</MenuItem>
                    <MenuItem value="córneas">Córneas</MenuItem>
                  </Select>
                </MDBox>

                <MDBox mb={2}>
                  <MDTypography variant="body2" color="text" mb={1}>
                    Você tem alergias?
                  </MDTypography>
                  <RadioGroup
                    value={hasAllergies}
                    onChange={(e) => setHasAllergies(e.target.value)}
                    row
                  >
                    <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                    <FormControlLabel value="nao" control={<Radio />} label="Não" />
                  </RadioGroup>
                </MDBox>

                <MDBox mb={2}>
                  <MDTypography variant="body2" color="text" mb={1}>
                    Histórico Familiar:
                  </MDTypography>
                  <RadioGroup
                    value={familyHistory}
                    onChange={(e) => setFamilyHistory(e.target.value)}
                    row
                  >
                    <FormControlLabel
                      value="sem"
                      control={<Radio />}
                      label="Sem histórico de doenças"
                    />
                    <FormControlLabel
                      value="com"
                      control={<Radio />}
                      label="Com histórico de doenças"
                    />
                  </RadioGroup>
                </MDBox>

                <MDBox mb={2}>
                  <MDInput type="date" label="Data de Nascimento" variant="standard" fullWidth />
                </MDBox>
                <MDBox mb={2}>
                  <MDInput
                    type="text"
                    label="CPF"
                    variant="standard"
                    fullWidth
                    inputProps={{ maxLength: 11 }} // Limitando o CPF a 11 caracteres
                  />
                </MDBox>

                <MDBox mb={2}>
                  <MDTypography variant="body2" color="text" mb={1}>
                    Você é fumante?
                  </MDTypography>
                  <RadioGroup value={isSmoker} onChange={(e) => setIsSmoker(e.target.value)} row>
                    <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                    <FormControlLabel value="nao" control={<Radio />} label="Não" />
                  </RadioGroup>
                </MDBox>

                <MDBox mb={2}>
                  <MDTypography variant="body2" color="text" mb={1}>
                    Você consome álcool?
                  </MDTypography>
                  <RadioGroup value={isSmoker} onChange={(e) => setIsSmoker(e.target.value)} row>
                    <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                    <FormControlLabel value="nao" control={<Radio />} label="Não" />
                  </RadioGroup>
                </MDBox>
              </>
            )}

            {/* Exibindo o formulário do receptor quando o tipo de usuário for receptor */}
            {userType === "receptor" && (
              <>
                <MDBox mb={2}>
                  <FormControl fullWidth>
                    <InputLabel>Tipo Sanguíneo</InputLabel>
                    <Select
                      value={bloodType}
                      onChange={(e) => setBloodType(e.target.value)}
                      label="Tipo Sanguíneo"
                    >
                      <MenuItem value="A+">A+</MenuItem>
                      <MenuItem value="A-">A-</MenuItem>
                      <MenuItem value="B+">B+</MenuItem>
                      <MenuItem value="B-">B-</MenuItem>
                      <MenuItem value="AB+">AB+</MenuItem>
                      <MenuItem value="AB-">AB-</MenuItem>
                      <MenuItem value="O+">O+</MenuItem>
                      <MenuItem value="O-">O-</MenuItem>
                    </Select>
                  </FormControl>
                </MDBox>
                <MDBox mb={2}>
                  <MDTypography variant="body2" color="text" mb={1}>
                    Órgão que você está aguardando:
                  </MDTypography>
                  <Select value={waitingOrgans} onChange={handleWaitingOrgansChange} fullWidth>
                    <MenuItem value="coração">Coração</MenuItem>
                    <MenuItem value="rins">Rins</MenuItem>
                    <MenuItem value="fígado">Fígado</MenuItem>
                    <MenuItem value="pulmões">Pulmões</MenuItem>
                    <MenuItem value="pâncreas">Pâncreas</MenuItem>
                    <MenuItem value="córneas">Córneas</MenuItem>
                  </Select>
                </MDBox>

                <MDBox mb={2}>
                  <MDInput type="date" label="Data de Nascimento" variant="standard" fullWidth />
                </MDBox>
                <MDBox mb={2}>
                  <MDInput
                    type="text"
                    label="CPF"
                    variant="standard"
                    fullWidth
                    inputProps={{ maxLength: 11 }} // Limitando o CPF a 11 caracteres
                  />
                </MDBox>
              </>
            )}

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
