import React, { useEffect } from "react";
// Chakra imports
import { Box, useColorModeValue } from "@chakra-ui/react";
import mapboxgl from "mapbox-gl";

export default function Marketplace() {
  useEffect(() => {
    // Set your Mapbox access token here
    mapboxgl.accessToken =
      "pk.eyJ1IjoibXJjaGVlc2UyMyIsImEiOiJjbTFqbGl5b2YwYnl6MmpzZWYyYWtjYnhsIn0.-NMoLX7OlT_LAsuzQRTZSg";

    // Initialize the map with the new style
    const map = new mapboxgl.Map({
      container: "map", // container ID
      style: "mapbox://styles/mrcheese23/cm1lanc25005501pl4k99gjgm", // Updated style
      projection: "globe",
      zoom: 4,
      center: [78, 21],
    });

    map.addControl(new mapboxgl.NavigationControl());
    map.scrollZoom.disable();

    map.on("style.load", () => {
      map.setFog({}); // Set the default atmosphere style
    });

    // The following values control rotation speed
    const secondsPerRevolution = 240;
    const maxSpinZoom = 3;
    const slowSpinZoom = 1;
    let userInteracting = false;
    const spinEnabled = true;

    function spinGlobe() {
      const zoom = map.getZoom();
      if (spinEnabled && !userInteracting && zoom < maxSpinZoom) {
        let distancePerSecond = 360 / secondsPerRevolution;
        if (zoom > slowSpinZoom) {
          const zoomDif = (maxSpinZoom - zoom) / (maxSpinZoom - slowSpinZoom);
          distancePerSecond *= zoomDif;
        }
        const center = map.getCenter();
        center.lng -= distancePerSecond;
        map.easeTo({ center, duration: 1000, easing: (n) => n });
      }
    }

    // Pause spinning on interaction
    map.on("mousedown", () => {
      userInteracting = true;
    });
    map.on("dragstart", () => {
      userInteracting = true;
    });

    // When animation is complete, start spinning if there is no ongoing interaction
    map.on("moveend", () => {
      spinGlobe();
    });

    spinGlobe();

    // Cleanup on unmount
    return () => map.remove();
  }, []);

  const textColor = useColorModeValue("secondaryGray.900", "white");

  return (
    <Box
      w="100%"
      h="800px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderRadius="20px"
      bg={useColorModeValue("white", "gray.800")}
      id="map" // This is the container for Mapbox
      mt="80px"
    >
      {/* Your map will render in this container */}
    </Box>
  );
}
