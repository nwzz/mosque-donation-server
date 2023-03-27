const mosjid_donation = "Masjid Donation";
const zakat_al_fitr = "Zakat Al Fitr";
const biriyani_fund = "Biriyani Fund";
const madrasha_donation = "Madrasha Donation";
const zakat_al_maal = "Zakat Al Maal";
const massey_iftar_donation = "Massey Iftar Donation";
const our_masjid_iftar_program = "Our Masjid Iftar Program";
const toush_tap_go = "Touch Tap Go";

const itemsAmount = (arr) => {
  let mosjidDonation = 0,
    mosjidDonationCount = 0,
    zakatAlFitr = 0,
    zakatAlFitrCount = 0,
    biriyaniFund = 0,
    biriyaniFundCount = 0,
    madrashaDonation = 0,
    madrashaDonationCount = 0,
    zakatAlMaal = 0,
    zakatAlMaalCount = 0,
    masseyIftarDonation = 0,
    masseyIftarDonationCount = 0,
    ourMasjidIftarProgram = 0,
    ourMasjidIftarProgramCount = 0,
    touchTapGo = 0,
    touchTapGoCount = 0;

  arr.forEach((element) => {
    element.items.map((item) => {
      if (item.name.toLowerCase() === mosjid_donation.toLowerCase()) {
        mosjidDonationCount++;
        mosjidDonation += item.price;
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
        item.name.toLowerCase() === massey_iftar_donation.toLowerCase()
      ) {
        masseyIftarDonationCount++;
        masseyIftarDonation += item.price;
      } else if (
        item.name.toLowerCase() === our_masjid_iftar_program.toLowerCase()
      ) {
        ourMasjidIftarProgramCount++;
        ourMasjidIftarProgram += item.price;
      } else if (item.name.toLowerCase() === toush_tap_go.toLowerCase()) {
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
      name: "Touch Tap Go",
      amount: touchTapGo,
      transactionNo: touchTapGoCount,
    },
  ];
};

export default itemsAmount;
