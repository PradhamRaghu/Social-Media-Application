import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/ad1.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}><b>Sneaker Addict</b></Typography>
        <Typography color={medium}>sneakeraddict.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
      Step into Sneaker Couture, where luxury meets street style. Our curated collection features the finest designer sneakers, exclusive collaborations, and limited-edition releases from the world's top brands. 
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
