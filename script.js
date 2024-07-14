const khodamKeren = [
    "Naga Api",
    "Naga Air",
    "Harimau Putih",
    "Elang Perak",
    "Kuda Pemberani",
    "Lembuswana",
    "Macan Kumbang",
    "Raja Ular",
    "Macan Putih",
  ];
  const khodamJelek = [
    "Sendal Goreng",
    "Ayam Penyet",
    "Sapu Terbang",
    "Kucing Kesleo",
    "Jeruk Nutrisari",
    "Nasi Kucing",
    "Kelinci Lumpuh",
    "Bebek Nyasar",
    "Ikan Teri",
    "Charger HP Mito",
    "Ipin Ngesot",
    "Sepeda Rongsok",
    "Bantal Melayang",
    "Lemari Kayu",
    "Guling Terbang",
    "Roti Berjamur",
    "Pisang Keju",
    "Sendal Jepit",
    "Tikus Kantor",
    "Senter",
    "Es Krim",
    "Kaos Kaki",
    "Permen Karet"
  ];
  
  const usernameInput = document.getElementById('username');
  const checkKhodamButton = document.getElementById('check-khodam');
  const resultDiv = document.getElementById('result');
  
  checkKhodamButton.addEventListener('click', () => {
    const userName = usernameInput.value.trim();
    if (userName!== '') {
      checkKhodamButton.disabled = true;
      checkKhodamButton.textContent = 'Bentar Lagi Di Terawang...';
      setTimeout(() => {
        const allKhodamNames = [...khodamKeren,...khodamJelek];
        const randomIndex = Math.floor(Math.random() * allKhodamNames.length);
        const selectedKhodam = allKhodamNames[randomIndex];
        const message = khodamKeren.includes(selectedKhodam)? 'Anjay Keren Juga Khodam Lu' : 'WKWKWWK Khodam Lu Gitu Amat';
        resultDiv.innerHTML = `
          <h2 class="text-2xl font-bold text-gray-800">${userName} Khodam Lu</h2>
          <p class="text-lg text-black font-mono"><span class="font-bold text-4xl">✦${selectedKhodam}✦</span></p>
          <p class="text-lg text-gray-600 mt-4"><span class="font-bold">${message}</span></p>
        `;
        checkKhodamButton.disabled = false;
        checkKhodamButton.textContent = 'Cek';
      }, 2000);
    } else {
      alert('Ngga Ada Nama Gimana Nerawangnya😌');
    }
  });
