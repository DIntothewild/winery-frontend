import { TextField, Button, Grid, Typography, Box, Paper } from '@mui/material';

function Contacto() {
  return (
    <Box sx={{ flexGrow: 1, p: 3, backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <Paper elevation={3} sx={{ p: 4, backgroundColor: '#fff' }}>
        <Typography variant="h4" gutterBottom>
          Contacto
        </Typography>
        <Typography variant="body1" gutterBottom>
          ¡Contáctanos para más información!
        </Typography>
        <form noValidate autoComplete="off">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                id="name"
                label="Nombre"
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="email"
                label="Correo Electrónico"
                type="email"
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="message"
                label="Mensaje"
                multiline
                rows={4}
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" type="submit" fullWidth>
                Enviar
              </Button>
            </Grid>
          </Grid>
        </form>
        <Box mt={4}>
          <Typography variant="h6" gutterBottom>
            Información de Contacto
          </Typography>
          <Typography variant="body1">
            Dirección: Calle de los Vinos, 123, Ciudad del Vino
          </Typography>
          <Typography variant="body1">
            Teléfono: +34 123 456 789
          </Typography>
          <Typography variant="body1">
            Correo Electrónico: info@vinosecommerce.com
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}

export default Contacto;
