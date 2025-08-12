export function hotelJsonLd(copy: any) {
  const BOOKING_PRIMARY = process.env.BOOKING_PRIMARY || 'https://app.mews.com';
  return {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: "MOMA1890 Boutique Hotel",
    description: copy.heroSub,
    url: "https://www.moma1890.com/",
    image: ["https://www.moma1890.com/media/img/hero.jpg"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Orleansplatz 6a",
      addressLocality: "Munich",
      postalCode: "81667",
      addressCountry: "DE"
    },
    telephone: "+49-89-4482424",
    checkinTime: "14:00",
    checkoutTime: "12:00",
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Free Wi‑Fi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Breakfast", value: true },
      { "@type": "LocationFeatureSpecification", name: "Air conditioning", value: true }
    ],
    starRating: { "@type": "Rating", ratingValue: 4.6, bestRating: 5 },
    aggregateRating: { "@type": "AggregateRating", ratingValue: 4.6, reviewCount: 850 },
    sameAs: [
      "https://www.tripadvisor.com/Hotel_Review-g187309-d678878-Reviews-Moma1890_Boutique_Hotel-Munich_Upper_Bavaria_Bavaria.html",
      "https://www.booking.com/hotel/de/moma1890-boutique-hotel.html",
      "https://www.instagram.com/moma1890_boutique_hotel/"
    ],
    makesOffer: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      url: BOOKING_PRIMARY,
      priceCurrency: "EUR",
      priceSpecification: { "@type": "PriceSpecification", price: 201 },
      potentialAction: {
        "@type": "ReserveAction",
        target: BOOKING_PRIMARY,
        name: "Book a room at MOMA1890",
        result: { "@type": "LodgingReservation" }
      }
    },
    potentialAction: [{
      "@type": "SearchAction",
      target: `${BOOKING_PRIMARY}?checkIn={checkin}&checkOut={checkout}&adults={adults}`,
      queryInput: ["required name=checkin","required name=checkout","required name=adults"]
    }]
  };
}
