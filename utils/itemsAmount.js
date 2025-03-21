const mosjid_donation = "Masjid Donation";
const general_masjid_donation = "General Masjid Donation";
const zakat_al_fitr = "Zakat Al Fitr";
const fitrana_maal = "Fitrana";
const biriyani_fund = "Biriyani Fund";
const madrasha_donation = "Madrasha Donation";
const zakat_al_maal = "Zakat Al Maal";
const ramadan_iftar_funding = "Ramadan Iftar Funding";
const massey_iftar_donation = "Massey Iftar Donation";
const our_masjid_iftar_program = "Our Masjid Iftar Program";
const food_fund = "Food Fund";
const masjid_renovation = "Masjid Renovation";
const water_n_power = "Water & Power";
const qadr_fund = "Qadr Fund";
const imam_donation = "Imam Donation";
const dawah_donation = "Dawah Donation";
const donate_for_gaza = "Donate for Gaza";
const donate_for_sudan = "Donate for Sudan";
const donate_for_yemen = "Donate for Yemen";
const donate_for_palestine = "Donate for Palestine";
const building_development_fund = "Building Development Fund";
const imam_quarter = "Project New Imam Quarters";
const touch_tap_go = "Touch Tap Go";

const itemsAmount = (arr) => {
  let mosjidDonation = 0,
    mosjidDonationCount = 0,
    generalMasjidDonation = 0,
    generalMasjidDonationCount = 0,
    zakatAlFitr = 0,
    zakatAlFitrCount = 0,
    fitrana = 0,
    fitranaCount = 0,
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
    waterPower = 0,
    waterPowerCount = 0,
    qadrFund = 0,
    qadrFundCount = 0,
    dawahDonation = 0,
    dawahDonationCount = 0,
    donateForGaza = 0,
    donateForGazaCount = 0,
    donateForSudan = 0,
    donateForSudanCount = 0,
    donateForYemen = 0,
    donateForYemenCount = 0,
    donateForPalestine = 0,
    donateForPalestineCount = 0,
    imamDonation = 0,
    imamDonationCount = 0,
    buildingDevelopmentFund = 0,
    buildingDevelopmentFundCount = 0,
    imamQuarter = 0,
    imamQuarterCount = 0,
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
      } else if (item.name.toLowerCase() === fitrana_maal.toLowerCase()) {
        fitranaCount++;
        fitrana += item.price;
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
      } else if (item.name.toLowerCase() === water_n_power.toLowerCase()) {
        waterPowerCount++;
        waterPower += item.price;
      } else if (item.name.toLowerCase() === qadr_fund.toLowerCase()) {
        qadrFundCount++;
        qadrFund += item.price;
      } else if (item.name.toLowerCase() === dawah_donation.toLowerCase()) {
        dawahDonationCount++;
        dawahDonation += item.price;
      } else if (item.name.toLowerCase() === donate_for_gaza.toLowerCase()) {
        donateForGazaCount++;
        donateForGaza += item.price;
      } else if (item.name.toLowerCase() === donate_for_sudan.toLowerCase()) {
        donateForSudanCount++;
        donateForSudan += item.price;
      } else if (item.name.toLowerCase() === donate_for_yemen.toLowerCase()) {
        donateForYemenCount++;
        donateForYemen += item.price;
      } else if (
        item.name.toLowerCase() === donate_for_palestine.toLowerCase()
      ) {
        donateForPalestineCount++;
        donateForPalestine += item.price;
      } else if (item.name.toLowerCase() === imam_donation.toLowerCase()) {
        imamDonationCount++;
        imamDonation += item.price;
      } else if (
        item.name.toLowerCase() === building_development_fund.toLowerCase()
      ) {
        buildingDevelopmentFundCount++;
        buildingDevelopmentFund += item.price;
      } else if (item.name.toLowerCase() === imam_quarter.toLowerCase()) {
        imamQuarterCount++;
        imamQuarter += item.price;
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
      name: "Fitrana",
      amount: fitrana,
      transactionNo: fitranaCount,
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
      name: "Water & Power",
      amount: waterPower,
      transactionNo: waterPowerCount,
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
      name: "Donate for Gaza",
      amount: donateForGaza,
      transactionNo: donateForGazaCount,
    },
    {
      name: "Donate for Sudan",
      amount: donateForSudan,
      transactionNo: donateForSudanCount,
    },
    {
      name: "Donate for Yemen",
      amount: donateForYemen,
      transactionNo: donateForYemenCount,
    },
    {
      name: "Donate for Palestine",
      amount: donateForPalestine,
      transactionNo: donateForPalestineCount,
    },
    {
      name: "Imam Donation",
      amount: imamDonation,
      transactionNo: imamDonationCount,
    },
    {
      name: "Building Development Fund",
      amount: buildingDevelopmentFund,
      transactionNo: buildingDevelopmentFundCount,
    },

    {
      name: "Project New Imam Quarters",
      amount: imamQuarter,
      transactionNo: imamDonationCount,
    },

    {
      name: "Touch Tap Go",
      amount: touchTapGo,
      transactionNo: touchTapGoCount,
    },
  ];
};

export default itemsAmount;
