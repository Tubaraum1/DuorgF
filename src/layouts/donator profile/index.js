// @mui material components
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import Tooltip from "@mui/material/Tooltip";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import HeartIcon from "@mui/icons-material/Favorite";  // Ícone para representar o coração, indicando doador de órgãos

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";

// Overview page components
import Header from "layouts/profile/components/Header";
import PlatformSettings from "layouts/profile/components/PlatformSettings";

function Overview() {
  // Lista de órgãos cadastrados
  const organs = ["Coração", "Rim", "Fígado", "Pulmão", "Pâncreas"];

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} />
      <Header>
        <MDBox mt={5} mb={3}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6} xl={4}>
              <PlatformSettings />
            </Grid>
            <Grid item xs={12} md={6} xl={4} sx={{ display: "flex" }}>
              <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />
              <ProfileInfoCard
                title="Informações de Perfil"
                description="Olá, sou Marcos Costa. Tenho orgulho de ser um doador de órgãos e ajudar a salvar vidas."
                info={{
                  fullName: "Marcos Costa Lima",
                  mobile: "+55 (11) 91234-5678",
                  email: "marcoscosta@gmail.com",
                  location: "BR",
                }}
                social={[
                  {
                    link: "#",
                    icon: <FacebookIcon />,
                    color: "facebook",
                  },
                  {
                    link: "#",
                    icon: <TwitterIcon />,
                    color: "twitter",
                  },
                  {
                    link: "#",
                    icon: <InstagramIcon />,
                    color: "instagram",
                  },
                ]}
                action={{ route: "", tooltip: "Editar Perfil" }}
                shadow={false}
              />
              <Divider orientation="vertical" sx={{ mx: 0 }} />

              {/* Indicação visual de doador */}
              <MDBox mt={2} ml={3}>
                <MDTypography variant="h6" fontWeight="medium" color="text">
                  Doador de Órgãos
                </MDTypography>
                <Chip
                  icon={<HeartIcon />}
                  label="Sou um doador de órgãos"
                  color="success"
                  sx={{ mt: 1 }}
                />

                {/* Exibindo órgãos cadastrados */}
                <MDTypography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
                  Órgãos cadastrados para doação:
                </MDTypography>
                <MDBox mt={1}>
                  {organs.map((organ, index) => (
                    <Chip
                      key={index}
                      label={organ}
                      color="primary"
                      sx={{ marginRight: 1, marginBottom: 1 }}
                    />
                  ))}
                </MDBox>
              </MDBox>

            </Grid>
          </Grid>
        </MDBox>
      </Header>
      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
