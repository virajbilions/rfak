const usaTourData = [
    {
        date: "Sunday, 15 Sep",
        city: "Brookville, NY",
        place: "Tilles Center Concert Hall",
        url: "https://www.ticketmaster.com/rahat-fateh-ali-khan-brookville-new-york-09-15-2024/event/000060F6A84F21E3",
        soldOut: true
    },
    {
        date: "Saturday, 21 Sep",
        city: "Washington, DC",
        place: "DAR Constitution Hall",
        url: "https://www.ticketmaster.com/rahat-fateh-ali-khan-washington-district-of-columbia-09-21-2024/event/150060B1C7C853D3",
        soldOut: true
    },
    {
        date: "Saturday, 28 Sep",
        city: "Atlanta, GA",
        place: "Coca-Cola Roxy",
        url: "https://concerts.livenation.com/the-legacy-of-khans-continues-with-atlanta-georgia-09-28-2024/event/0E00608AD2653B8C?_gl=1*722ls5*_gcl_au*MTI3NTAzMzI0OC4xNzI1NTQ4MDg0*_ga*MTk3OTY5NzU1NS4xNzI1NTQ4MDg5*_ga_C1T806G4DF*MTcyNTU1MTQ5OC4yLjEuMTcyNTU1Mjg0MC42MC4wLjA.*_ga_H1KKSGW33X*MTcyNTU1MTQ5OC4yLjEuMTcyNTU1Mjg0MC42MC4wLjA.&_ga=2.42442790.246295158.1725548090-1979697555.1725548089",
    },
    {
        date: "Friday, 04 Oct",
        city: "Oakland, CA",
        place: "Oakland Arena",
        url: "https://www.ticketmaster.com/rahat-fateh-ali-khan-oakland-california-10-04-2024/event/1C00606BC4417EB2",
    },
    {
        date: "Saturday, 05 Oct",
        city: "Everett, WA",
        place: "Angel Of The Winds Arena",
        url: "https://www.ticketmaster.com/rahat-fateh-ali-khan-everett-washington-10-05-2024/event/0F006102928B579C",
    },
    {
        date: "Sunday, 06 Oct",
        city: "Chicago",
        place: "The Matrix Club",
        url: "https://events.sulekha.com/the-legacy-of-khans-rahat-fateh-ali-khan-live-in-chicago-2024_event-in_naperville-il_378344",
    },
    {
        date: "Saturday, 12 Oct",
        city: "Atlantic City, NJ",
        place: "Hard Rock Live at Etess Arena",
        url: "https://www.ticketmaster.com/rahat-fateh-ali-khan-atlantic-city-new-jersey-10-12-2024/event/020060DBC84C834E",
    },
    {
        date: "Sunday, 13 Oct",
        city: "Indianapolis, IN",
        place: "Old National Centre",
        url: "https://concerts.livenation.com/the-legacy-of-khans-continues-with-indianapolis-indiana-10-13-2024/event/050060F2CFF558DB?_gl=1*722ls5*_gcl_au*MTI3NTAzMzI0OC4xNzI1NTQ4MDg0*_ga*MTk3OTY5NzU1NS4xNzI1NTQ4MDg5*_ga_C1T806G4DF*MTcyNTU1MTQ5OC4yLjEuMTcyNTU1Mjg0MC42MC4wLjA.*_ga_H1KKSGW33X*MTcyNTU1MTQ5OC4yLjEuMTcyNTU1Mjg0MC42MC4wLjA.&_ga=2.42442790.246295158.1725548090-1979697555.1725548089",
    },
    {
        date: "Friday, 18 Oct",
        city: "Houston, TX",
        place: "NRG Arena",
        url: "https://www.ticketmaster.com/the-legacy-of-khans-continues-houston-texas-10-18-2024/event/3A0060EBCCBF5F5B",
    },
    {
        date: "Saturday, 19 Oct",
        city: "Irving, TX",
        place: "The Pavilion at Toyota Music Factory",
        url: "https://concerts.livenation.com/rahat-fateh-ali-khan-irving-texas-10-19-2024/event/0C0060999B8324E2?_gl=1*722ls5*_gcl_au*MTI3NTAzMzI0OC4xNzI1NTQ4MDg0*_ga*MTk3OTY5NzU1NS4xNzI1NTQ4MDg5*_ga_C1T806G4DF*MTcyNTU1MTQ5OC4yLjEuMTcyNTU1Mjg0MC42MC4wLjA.*_ga_H1KKSGW33X*MTcyNTU1MTQ5OC4yLjEuMTcyNTU1Mjg0MC42MC4wLjA.&_ga=2.42442790.246295158.1725548090-1979697555.1725548089",
    },
    {
        date: "Sunday, 20 Oct",
        city: "Hollywood, CA",
        place: "Dolby Theatre",
        url: "https://www.ticketmaster.com/the-legacy-of-khans-starring-rahat-hollywood-california-10-20-2024/event/09006091C5C73A56",
    },
];

const canadaTourData = [
    {
        date: "Friday, 06 Sep",
        city: "Calgary, AB, CA",
        place: "WinSport Event Centre",
        url: "https://www.ticketmaster.ca/rahat-fateh-ali-khan-calgary-alberta-09-06-2024/event/110060B8D2EA44DC?_gl=1*rmrohh*_gcl_au*MTI3NTAzMzI0OC4xNzI1NTQ4MDg0*_ga*MTk3OTY5NzU1NS4xNzI1NTQ4MDg5*_ga_C1T806G4DF*MTcyNTU1MTQ5OC4yLjEuMTcyNTU1Mjg0MC42MC4wLjA.*_ga_H1KKSGW33X*MTcyNTU1MTQ5OC4yLjEuMTcyNTU1Mjg0MC42MC4wLjA.&_ga=2.49196069.246295158.1725548090-1979697555.1725548089",
        soldOut: true
    },
    {
        date: "Sunday, 08 Sep",
        city: "Edmonton, AB, CA",
        place: "Edmonton EXPO Centre",
        url: "https://www.ticketmaster.ca/rahat-fateh-ali-khan-edmonton-alberta-09-08-2024/event/110060C4D24E41C4?_gl=1*rmrohh*_gcl_au*MTI3NTAzMzI0OC4xNzI1NTQ4MDg0*_ga*MTk3OTY5NzU1NS4xNzI1NTQ4MDg5*_ga_C1T806G4DF*MTcyNTU1MTQ5OC4yLjEuMTcyNTU1Mjg0MC42MC4wLjA.*_ga_H1KKSGW33X*MTcyNTU1MTQ5OC4yLjEuMTcyNTU1Mjg0MC42MC4wLjA.&_ga=2.49196069.246295158.1725548090-1979697555.1725548089",
        soldOut: true
    },
    {
        date: "Saturday, 14 Sep",
        city: "Toronto, ON, CA",
        place: "The Theatre at Great Canadian Casino Resort Toronto",
        url: "https://www.ticketmaster.ca/rahat-fateh-ali-khan-the-legacy-toronto-ontario-09-14-2024/event/10006108EA076A4B?_gl=1*rmrohh*_gcl_au*MTI3NTAzMzI0OC4xNzI1NTQ4MDg0*_ga*MTk3OTY5NzU1NS4xNzI1NTQ4MDg5*_ga_C1T806G4DF*MTcyNTU1MTQ5OC4yLjEuMTcyNTU1Mjg0MC42MC4wLjA.*_ga_H1KKSGW33X*MTcyNTU1MTQ5OC4yLjEuMTcyNTU1Mjg0MC42MC4wLjA.&_ga=2.49196069.246295158.1725548090-1979697555.1725548089",
        soldOut: true
    },
    {
        date: "Sunday, 29 Sep",
        city: "Vancouver, BC, CA",
        place: "Queen Elizabeth Theatre",
        url: "https://www.ticketmaster.ca/rahat-fateh-ali-khan-live-in-vancouver-british-columbia-09-29-2024/event/1100611CE0544E1A?_gl=1*rmrohh*_gcl_au*MTI3NTAzMzI0OC4xNzI1NTQ4MDg0*_ga*MTk3OTY5NzU1NS4xNzI1NTQ4MDg5*_ga_C1T806G4DF*MTcyNTU1MTQ5OC4yLjEuMTcyNTU1Mjg0MC42MC4wLjA.*_ga_H1KKSGW33X*MTcyNTU1MTQ5OC4yLjEuMTcyNTU1Mjg0MC42MC4wLjA.&_ga=2.49196069.246295158.1725548090-1979697555.1725548089",
    },
];

export { usaTourData, canadaTourData };
