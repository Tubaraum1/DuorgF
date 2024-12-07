// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

function Dashboard() {
  const chartData = {
    labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
    datasets: [
      {
        label: "Doadores",
        data: [42, 45, 48, 50, 53, 55, 58, 60, 62, 65, 70, 75],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
      {
        label: "Receptores",
        data: [115, 118, 120, 123, 125, 130, 132, 135, 138, 140, 145, 150],
        backgroundColor: "rgba(255, 99, 132, 0.6)",
      },
      {
        label: "Hospitais",
        data: [4, 5, 5, 6, 6, 7, 8, 8, 9, 9, 10, 10],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
      {
        label: "Órgãos",
        data: [80, 82, 85, 88, 90, 92, 95, 98, 100, 102, 105, 110],
        backgroundColor: "rgba(153, 102, 255, 0.6)",
      },
    ],
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        {/* Cartões de Estatísticas */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="volunteer_activism"
                title="Doadores"
                count={42}
                percentage={{
                  color: "success",
                  amount: "+3",
                  label: "cadastro(s) novo(s)",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="person"
                title="Receptores"
                count="115"
                percentage={{
                  color: "success",
                  amount: "+3",
                  label: "Cadastro(s) novo(s)",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="local_hospital"
                title="Hospitais"
                count="4"
                percentage={{
                  color: "success",
                  amount: "+3",
                  label: "demanda(s)",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="error"
                icon="favorite"
                title="Órgãos"
                count="80"
                percentage={{
                  color: "success",
                  amount: "+5",
                  label: "Cadastro(s) novo(s)",
                }}
              />
            </MDBox>
          </Grid>
        </Grid>

        {/* Gráfico Mensal */}
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <ReportsBarChart
                color="info"
                title="Cadastros Mensais"
                description="Resumo dos cadastros ao longo dos meses"
                date="atualizado recentemente"
                chart={chartData}
              />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default Dashboard;
