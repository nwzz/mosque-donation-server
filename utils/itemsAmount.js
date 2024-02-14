const mosjid_donation = "Masjid Donation";
const general_masjid_donation = "General Masjid Donation";
const zakat_al_fitr = "Zakat Al Fitr";
const biriyani_fund = "Biriyani Fund";
const madrasha_donation = "Madrasha Donation";
const zakat_al_maal = "Zakat Al Maal";
const ramadan_iftar_funding = "Ramadan Iftar Funding";
const massey_iftar_donation = "Massey Iftar Donation";
const our_masjid_iftar_program = "Our Masjid Iftar Program";
const food_fund = "Food Fund";
const masjid_renovation = "Masjid Renovation";
const qadr_fund = "Qadr Fund";
const dawah_donation = "Dawah Donation";
const touch_tap_go = "Touch Tap Go";

const itemsAmount = (arr) => {
  let mosjidDonation = 0,
    mosjidDonationCount = 0,
    generalMasjidDonation = 0,
    generalMasjidDonationCount = 0,
    zakatAlFitr = 0,
    zakatAlFitrCount = 0,
    biriyaniFund = 0,
    biriyaniFundCount = 0,
    madrashaDonation = 0,
    madrashaDonationCount = 0,
    zakatAlMaal = 0,
    zakatAlMaalCount = 0,
    ramadanIftarFunding = 0,
    ramadanIftarFundingCount = 0,
    masseyIftarDonation = 0,
    masseyIftarDonationCount = 0,
    ourMasjidIftarProgram = 0,
    ourMasjidIftarProgramCount = 0,
    foodFund = 0,
    foodFundCount = 0,
    masjidRenovation = 0,
    masjidRenovationCount = 0,
    qadrFund = 0,
    qadrFundCount = 0,
    dawahDonation = 0,
    dawahDonationCount = 0,
    touchTapGo = 0,
    touchTapGoCount = 0;

  arr.forEach((element) => {
    element.items.map((item) => {
      if (item.name.toLowerCase() === mosjid_donation.toLowerCase()) {
        mosjidDonationCount++;
        mosjidDonation += item.price;
      } else if (
        item.name.toLowerCase() === general_masjid_donation.toLowerCase()
      ) {
        generalMasjidDonationCount++;
        generalMasjidDonation += item.price;
      } else if (item.name.toLowerCase() === zakat_al_fitr.toLowerCase()) {
        zakatAlFitrCount++;
        zakatAlFitr += item.price;
      } else if (item.name.toLowerCase() === biriyani_fund.toLowerCase()) {
        biriyaniFundCount++;
        biriyaniFund += item.price;
      } else if (item.name.toLowerCase() === madrasha_donation.toLowerCase()) {
        madrashaDonationCount++;
        madrashaDonation += item.price;
      } else if (item.name.toLowerCase() === zakat_al_maal.toLowerCase()) {
        zakatAlMaalCount++;
        zakatAlMaal += item.price;
      } else if (
        item.name.toLowerCase() === ramadan_iftar_funding.toLowerCase()
      ) {
        ramadanIftarFundingCount++;
        ramadanIftarFunding += item.price;
      } else if (
        item.name.toLowerCase() === massey_iftar_donation.toLowerCase()
      ) {
        ramadanIftarFundingCount++;
        ramadanIftarFunding += item.price;
      } else if (
        item.name.toLowerCase() === our_masjid_iftar_program.toLowerCase()
      ) {
        ourMasjidIftarProgramCount++;
        ourMasjidIftarProgram += item.price;
      } else if (item.name.toLowerCase() === food_fund.toLowerCase()) {
        foodFundCount++;
        foodFund += item.price;
      } else if (item.name.toLowerCase() === masjid_renovation.toLowerCase()) {
        masjidRenovationCount++;
        masjidRenovation += item.price;
      } else if (item.name.toLowerCase() === qadr_fund.toLowerCase()) {
        qadrFundCount++;
        qadrFund += item.price;
      } else if (item.name.toLowerCase() === dawah_donation.toLowerCase()) {
        dawahDonationCount++;
        dawahDonation += item.price;
      } else if (item.name.toLowerCase() === touch_tap_go.toLowerCase()) {
        touchTapGoCount++;
        touchTapGo += item.price;
      }
    });
  });

  return [
    {
      name: "Masjid Donation",
      amount: mosjidDonation,
      transactionNo: mosjidDonationCount,
    },
    {
      name: "General Masjid Donation",
      amount: generalMasjidDonation,
      transactionNo: generalMasjidDonationCount,
    },
    {
      name: "Zakat Al Fitr",
      amount: zakatAlFitr,
      transactionNo: zakatAlFitrCount,
    },
    {
      name: "Biriyani Fund",
      amount: biriyaniFund,
      transactionNo: biriyaniFundCount,
    },
    {
      name: "Madrasha Donation",
      amount: madrashaDonation,
      transactionNo: madrashaDonationCount,
    },

    {
      name: "Zakat Al Maal",
      amount: zakatAlMaal,
      transactionNo: zakatAlMaalCount,
    },

    {
      name: "Funding Iftar Funding",
      amount: ramadanIftarFunding,
      transactionNo: ramadanIftarFundingCount,
    },

    {
      name: "Massey Iftar Donation",
      amount: masseyIftarDonation,
      transactionNo: masseyIftarDonationCount,
    },

    {
      name: "Our Masjid Iftar Program",
      amount: ourMasjidIftarProgram,
      transactionNo: ourMasjidIftarProgramCount,
    },

    {
      name: "Food Fund",
      amount: foodFund,
      transactionNo: foodFundCount,
    },

    {
      name: "Masjid Renovation",
      amount: masjidRenovation,
      transactionNo: masjidRenovationCount,
    },

    {
      name: "Qadr Fund",
      amount: qadrFund,
      transactionNo: qadrFundCount,
    },
    {
      name: "Dawah Donation",
      amount: dawahDonation,
      transactionNo: dawahDonationCount,
    },

    {
      name: "Touch Tap Go",
      amount: touchTapGo,
      transactionNo: touchTapGoCount,
    },
  ];
};

export default itemsAmount;
