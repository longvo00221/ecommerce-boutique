import * as React from 'react';
import {
  Box,
  Typography,
  Grid,
  Button,
  Stack,

} from '@mui/material';
import Logo from '../../../../assets/icon/LogoIcon';
import logoIdol from '../../../../assets/image/logoIdol.jpg';
import dashboard from '../../../../assets/image/dashboard.jpg';
const HeaderNav = () => {
  console.log(123)

  return (
    <Box>
      <Stack style={{ padding: "30px 135px 0 135px" }}>
        <Grid display="flex"  >
          <Grid display="flex" gap="50px" >
            <Grid container alignItems="center" gap="6px" width="100px">
              <Logo style={{ width: "50px" }} />
              <Typography fontWeight="600">Smaller</Typography>
              <CardDetails header="test"/>
              <CardDetails header="test2"/>
              <CardDetails header="test3"/>
            </Grid>
            <Grid display="flex" gap="36px" alignItems="center">
              <Typography>Product</Typography>
              <Typography>Pricing</Typography>
              <Typography width="78px">Contact us</Typography>
              <Typography>Blog</Typography>
              <Typography width="100px">About Us</Typography>
            </Grid>
          </Grid>
          <Grid container gap="28px" alignItems="center" >
            <Typography marginLeft="auto">Login</Typography>
            <Button
              type='button'
              variant="contained"
              style={{ backgroundColor: "#000", borderRadius: "30px", padding: "14px", width: "150px" }}
            >Book a Demo</Button>
          </Grid>
        </Grid>
      </Stack>
      <Grid display="flex" gap="30px">
          <Grid width="50%" padding="130px 0 0 135px" >
            <Typography lineHeight="88px" fontSize="68px" fontWeight="600">Online catalog management <img src={logoIdol} alt="logo" height="30px" style={{ display: 'inline-block' }} />
              tool</Typography>
            <Typography color="#676562" marginTop="20px" width="100%">Skyrocket your online store conversion rate the customer experience with visual merchandising.</Typography>
            <Grid marginTop="35px" display="flex" gap="30px">
          <Button type='button' variant="contained" style={{ backgroundColor: "#F7D047", padding: "14px", width: "28%",color: "#000", borderRadius: "30px" }} >Book a Demo</Button>
          <Button type='button' variant='outlined' color="primary" style={{ borderColor: "#000", color: "#000",width: "28%" ,borderRadius: "30px", padding: "14px" }} >Ask a Question</Button>
        </Grid>
          </Grid>
          <Grid width="50%" paddingTop="100px" >
           <img src={dashboard} style={{width: "100%"}}></img>
          </Grid>
        </Grid>
      <Stack>
      </Stack>
    </Box>
  )
}

export default HeaderNav