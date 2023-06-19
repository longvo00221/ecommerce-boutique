import {
  CardContent,
  Card,
  Stack,
  Grid,
  Typography,
  Divider,
  ListItem,
  List,
  ListItemText
} from "@mui/material";
import HeaderNav from "../common/Header/HeaderNav";
import conversionRate from "../../../assets/image/conversionRate.jpg";
import increaseAvarage from "../../../assets/image/increaseAvarage.jpg";
import management from "../../../assets/image/management.jpg";
import dragDrop from "../../../assets/image/dragDrop.jpg";
import addCart from "../../../assets/image/addCart.jpg";
import sellingProduct from "../../../assets/image/sellingProduct.jpg";
import lowStock from "../../../assets/image/lowStock.jpg";
import productCategories from "../../../assets/image/productCategories.jpg";
// import LogoTool from "../../../assets/icon/logoTool";
import Free from "../../../assets/image/Free.jpg";
import Advanced from "../../../assets/image/Advanced.jpg";
import Business from "../../../assets/image/Business.jpg";


const MainLayout = () => {
  return (
    <div>
      {/* header */}
      <HeaderNav />
      {/* body */}
      <>
        <Card sx={{ backgroundColor: "#19646f" }} >
          <Grid padding="140px 160px">
            <CardContent
              // sx={{
              //   fontSize: {md:'100px', xs:'50px'},
              //   color: {md: '#fff', xs},
              // }}
              sx={{
                color: "#fff",
                fontSize: "50px",
                fontFamily: "sans-serif",
                textAlign: "center",
                paddingBottom: "84px"
              }}> Merchandising to increase sales.</CardContent>
            <CardContent>
              <Grid container width="100%" textAlign="center">
                <Grid display="flex" flexDirection="column" alignItems="center" width="33.333%" >
                  <img src={conversionRate} />
                  <Typography sx={{
                    color: "#fff",
                    fontSize: "28px",
                    padding: "43px 0 18px",
                    width: "70%",
                    textAlign: "center",
                  }}>Conversion rate skyrockets.</Typography>
                  <Typography sx={{
                    color: "#fff",
                    width: "70%",
                    textAlign: "center",
                  }}>Convert more online sales with our visual merchandising interface.</Typography>
                </Grid>
                <Grid display="flex" flexDirection="column" alignItems="center" width="33.333%" >
                  <img src={increaseAvarage}></img>
                  <Typography sx={{
                    color: "#fff",
                    fontSize: "28px",
                    padding: "43px 0 18px",
                    width: "60%",
                    textAlign: "center",
                  }}>Increase average order value</Typography>
                  <Typography sx={{
                    color: "#fff",
                    width: "75%",
                    textAlign: "center",
                  }}>Increase average order value of your online store by 17% with this little trick.</Typography>
                </Grid>
                <Grid display="flex" flexDirection="column" alignItems="center" width="33.333%" >
                  <img src={management}></img>
                  <Typography sx={{
                    color: "#fff",
                    fontSize: "28px",
                    padding: "43px 0 18px",
                    width: "70%",
                    textAlign: "center",
                  }}>Spend less time for management</Typography>
                  <Typography sx={{
                    color: "#fff",
                    width: "70%",
                    textAlign: "center",
                  }}>Let your employees spend less time managing the online selling it.</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Grid>
          <Grid>
            <CardContent >
              <Grid>
                <Typography sx={{ fontSize: "50px", color: "#fff", textAlign: "center" }}>How Smaller works</Typography>
                <Typography sx={{ fontSize: "20px", color: "#fff", textAlign: "center" }}> Smaller is a cloud-based tool for merchandisers and eCommerce professionals.</Typography>
              </Grid>
              <Grid
                padding="90px 20px 0"
                display="flex"
                justifyContent="space-between"
              >
                <Grid style={{ width: "45%", padding: "0 115px" }}><img style={{ borderRadius: "22px" }} src={productCategories} /></Grid>
                <Grid>
                  <div style={{ width: "2px", height: "100%", backgroundColor: "#8CA4A8" }}></div>
                </Grid>
                <Grid style={{ width: "45%", padding: " 0 115px" }} >
                  <Typography sx={{ fontSize: "38px", color: "#fff", lineHeight: "44px" }}>Set basic sorting rules for any categories</Typography>
                  <Typography sx={{ color: "#fff", marginTop: "18px" }}>Bulk sort products on any category page you need, combine different sort rules:</Typography>
                  <Divider sx={{ marginTop: "30px", backgroundColor: "#ffff" }} />
                  <List sx={{ color: "#fff" }}>
                    <ListItem>
                      <ListItemText primary="Newest" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Bestseller" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Most reviewable" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Price" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Custom Attribute" />
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
              <Grid
                padding="90px 20px 0"
                display="flex"
                justifyContent="space-between"
                flexDirection="row-reverse"
              >
                <Grid style={{ width: "45%", padding: "0 115px" }}><img style={{ borderRadius: "22px" }} src={dragDrop} /></Grid>
                <Grid>
                  <div style={{ width: "2px", height: "100%", backgroundColor: "#8CA4A8" }}></div>
                </Grid>
                <Grid style={{ width: "45%", padding: " 0 115px" }} >
                  <Typography sx={{ fontSize: "38px", color: "#fff", lineHeight: "44px" }}>Drag and Drop catalog management</Typography>
                  <Typography sx={{ color: "#fff", marginTop: "18px" }}>Use the Drag and Drop function to sort your products in the most intuitive, quickest way.</Typography>
                  <Typography sx={{ color: "#fff", marginTop: "18px" }}>Set scores for products by adding number, SKUs with higher scores will be displayed on top of the category pages.</Typography>
                </Grid>
              </Grid>
              <Grid
                padding="90px 20px 0"
                display="flex"
                justifyContent="space-between"
              >
                <Grid style={{ width: "45%", padding: "0 115px" }}><img style={{ borderRadius: "22px" }} src={addCart} /></Grid>
                <Grid>
                  <div style={{ width: "2px", height: "100%", backgroundColor: "#8CA4A8" }}></div>
                </Grid>
                <Grid style={{ width: "45%", padding: " 0 115px" }} >
                  <Typography sx={{ fontSize: "38px", color: "#fff", lineHeight: "44px" }}>Limit and add product groups per category pages</Typography>
                  <Typography sx={{ color: "#fff", marginTop: "18px" }}>Achieve a certain variety on your catalog pages:</Typography>
                  <Divider sx={{ marginTop: "30px", backgroundColor: "#ffff" }} />
                  <List sx={{ color: "#fff" }}>
                    <ListItem>
                      <ListItemText primary="Ensure the page does not contain identical products: same color, style or type." />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Hide and add the desired products or product groups on the category page." />
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
              <Grid
                padding="90px 20px 0"
                display="flex"
                justifyContent="space-between"
                flexDirection="row-reverse"
              >
                <Grid style={{ width: "45%", padding: "0 115px" }}><img style={{ borderRadius: "22px" }} src={sellingProduct} /></Grid>
                <Grid>
                  <div style={{ width: "2px", height: "100%", backgroundColor: "#8CA4A8" }}></div>
                </Grid>
                <Grid style={{ width: "45%", padding: " 0 115px" }} >
                  <Typography sx={{ fontSize: "38px", color: "#fff", lineHeight: "44px" }}>Control poor-selling products</Typography>
                  <Typography sx={{ color: "#fff", marginTop: "18px" }}>Sortler provides flexible features for the management of your low-selling items.</Typography>
                  <Divider sx={{ marginTop: "30px", backgroundColor: "#ffff" }} />
                  <List sx={{ color: "#fff" }}>
                    <ListItem>
                      <ListItemText primary="Tracking low-selling items" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Raising the item position to the top." />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Applying discounts" />
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
              <Grid
                padding="90px 20px 0"
                display="flex"
                justifyContent="space-between"
              >
                <Grid style={{ width: "45%", padding: "0 115px" }}><img style={{ borderRadius: "22px" }} src={lowStock} /></Grid>
                <Grid>
                  <div style={{ width: "2px", height: "100%", backgroundColor: "#8CA4A8" }}></div>
                </Grid>
                <Grid style={{ width: "45%", padding: " 0 115px" }} >
                  <Typography sx={{ fontSize: "38px", color: "#fff", lineHeight: "44px" }}>Create rules of low-stock and out-of-stock products</Typography>
                  <Typography sx={{ color: "#fff", marginTop: "18px" }}>Place low-stock items at the top of your product list. Move out-of-stock products down the catalog.</Typography>
                  <Divider sx={{ marginTop: "30px", backgroundColor: "#ffff" }} />
                  <Grid sx={{ color: "#fff", paddingTop: "10px" }}>
                    <Typography>Place low-stock items at the top of your product list. Move out-of-stock products down the catalog.</Typography>
                    <Typography>Create rules for applying discounts in your catalog. Simplify loyalty program management, thereby increasing sales.</Typography>

                  </Grid>

                </Grid>
              </Grid>
            </CardContent>
          </Grid>
          <Grid paddingTop="140px">
            <CardContent>
              <Grid textAlign="center">
                <Typography sx={{ fontSize: "50px", color: "#fff" }}>Benefits</Typography>
              </Grid>
              <Grid item md={12}>
                <Grid item md={3}></Grid>
                <Grid item md={3}></Grid>
                <Grid item md={3}></Grid>
              </Grid>
              <Grid></Grid>
            </CardContent>
          </Grid>
          <Grid paddingTop="140px">
            <CardContent>
              <Grid textAlign="center" >
                <Typography sx={{fontSize: "50px", color: "#fff"}}>Simple pricing</Typography>
                <Typography sx={{color: "#fff"}}>No credit card required. Cancel any time.</Typography>
              </Grid>
              <Grid>
                <img src={Business}/>
              </Grid>
            </CardContent>
          </Grid>

        </Card>
      </>
    </div>
  )
}

export default MainLayout