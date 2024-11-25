import { Box, Image, Grid } from "@chakra-ui/react";

const ServiceProviders = ({ providers }) => {
  return (
    <Box>
      <Grid templateColumns="repeat(4, 1fr)" gap={4}>
        {providers.map((provider, index) => (
          <a href={provider.url} key={index}>
            <Image src={provider.img} alt={provider.name} />
          </a>
        ))}
      </Grid>
    </Box>
  );
};

export default ServiceProviders;
