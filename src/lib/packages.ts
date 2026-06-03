export type SponsorPackage = {
  name: string;
  tag: string;
  price: string;
  features: string[];
  url: string;
  featured: boolean;
};

export const MEMBERSHIP_NOTE = "A $25 membership fee is added to all packages and purchases.";

/* Headline tiers — shown on the homepage, sponsors page and tickets page */
export const PACKAGES: SponsorPackage[] = [
  {
    name: "The Caledonian",
    tag: "Silver Sponsor",
    price: "$7,500",
    features: [
      "Table of ten guests",
      "Premier table location",
      "Company signage in reception",
      "Website & social recognition",
      "Program advert",
      "Premium whisky",
    ],
    url: "https://donate.stripe.com/aEUg2y7bOa6sdTq4go",
    featured: false,
  },
  {
    name: "The Bard",
    tag: "Title Sponsor",
    price: "$10,000",
    features: [
      "Table of ten guests",
      "Head table location",
      "Chieftain recognition",
      "Part in the Grand Entrance",
      "Full-page program advert",
      "Table goodie bag",
      "Website & social recognition",
      "Premium whisky",
    ],
    url: "https://buy.stripe.com/eVq7sM4kEcz57GBe2d5gc0l",
    featured: true,
  },
  {
    name: "The Duke",
    tag: "Reception Sponsor",
    price: "$5,000",
    features: [
      "Table of ten guests",
      "Premier table location",
      "Company signage in reception",
      "Website & social recognition",
      "Program advert",
    ],
    url: "https://buy.stripe.com/28E9AU2cw8iPaSN4rD5gc0m",
    featured: false,
  },
];

/* Smaller sponsorship tiers — shown on the tickets page */
export type MinorPackage = { name: string; tag: string; price: string; note: string; url: string };

export const MINOR_PACKAGES: MinorPackage[] = [
  { name: "The Marquess", tag: "Whisky Sponsor", price: "$1,250", note: "Includes 2 tickets · 4 available", url: "https://donate.stripe.com/fZedUq1RuguQ16E7sC" },
  { name: "The Lord & Lady", tag: "Wine Sponsor", price: "$1,250", note: "Includes 2 tickets · 4 available", url: "https://donate.stripe.com/fZe8A6fIkguQ9DaaEP" },
  { name: "The Earl", tag: "Band Sponsor", price: "$1,250", note: "Includes 2 tickets · 4 available", url: "https://donate.stripe.com/fZe7w22Vy1zW5mU6oA" },
  { name: "The Highlander", tag: "Haggis Sponsor", price: "$1,000", note: "Special recognition from the Chieftain", url: "https://donate.stripe.com/4gw6rY9jWdiE4iQ5kp" },
  { name: "The Viscount", tag: "Centerpiece Sponsor", price: "$500", note: "Reception signage · program advert", url: "https://donate.stripe.com/00gaIe1Ru3I42aI28l" },
  { name: "The Baron", tag: "Program Sponsor", price: "$500", note: "Program advert · reception signage", url: "https://donate.stripe.com/3cs03A53GbawbLi5ky" },
];

/* Individual tickets */
export type Ticket = { name: string; price: string; note: string; url: string };

export const TICKETS: Ticket[] = [
  {
    name: "Table of 10",
    price: "$2,250",
    note: "Reserve a full table for your party of ten.",
    url: "https://buy.stripe.com/cN2dUq3ZCfqM9DafZh",
  },
  {
    name: "Couples",
    price: "$600",
    note: "Two seats together at a shared table.",
    url: "https://buy.stripe.com/3csdUqdAc0vScPm4gA",
  },
];
