var slider = tns({
    container: '.shelf__product',
    items: 1,
    navPosition: "bottom",
    responsive: {
      600: {
        items: 2,
        gutter:30,
        edgePadding:30
      },
      900: {
        items: 3,
        gutter:30,
        edgePadding:30
      },
      1200: {
        items: 4,
        gutter:30,
        edgePadding:30
      }
    }
});