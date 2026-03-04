setTimeout(() => {
  const copyrightDate = document.getElementById("copyright-date");
  if (copyrightDate) return;

  copyrightDate.innerHTML = `© Yusufbek Alimatov ${new Date().getFullYear()}`;
}, 0);
