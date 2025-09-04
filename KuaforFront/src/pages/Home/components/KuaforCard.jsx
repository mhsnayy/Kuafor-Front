import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import BerberFoto from "../../../assets/Berber.jpg";


function KuaforCard() {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
      component="img"
      height="180"
      image={BerberFoto} // baştaki / önemli
      alt="Berber dükkanı"  
      />

      {/* İçerik */}
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Ahmet Barber
        </Typography>
        <Typography variant="body2" color="text.secondary">
          İstanbul • Kadıköy <br />
          Saç kesimi, sakal tıraşı ve bakım hizmetleri.
        </Typography>
      </CardContent>

      {/* Alt buton */}
      <CardActions>
        <Button size="small" variant="contained">
          Kuaförü Görüntüle
        </Button>
      </CardActions>
    </Card>
  );
}

export default KuaforCard