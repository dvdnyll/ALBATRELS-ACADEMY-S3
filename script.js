function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const lockerScroll = document.getElementById('lockerScroll');
const slider = document.querySelector('.locker-slider');

if (slider && lockerScroll) {
  slider.addEventListener('input', () => {
    const maxScroll =
      lockerScroll.scrollWidth - lockerScroll.clientWidth;
    lockerScroll.scrollLeft = (slider.value / 100) * maxScroll;
  });

  lockerScroll.addEventListener('scroll', () => {
    const maxScroll =
      lockerScroll.scrollWidth - lockerScroll.clientWidth;
    slider.value =
      (lockerScroll.scrollLeft / maxScroll) * 100;
  });
}

const lockers = document.querySelectorAll('.locker');

function updateActiveLocker() {
  const containerCenter =
    lockerScroll.scrollLeft + lockerScroll.clientWidth / 2;

  let closestLocker = null;
  let closestDistance = Infinity;

  lockers.forEach(locker => {
    const lockerCenter =
      locker.offsetLeft + locker.offsetWidth / 2;

    const distance = Math.abs(containerCenter - lockerCenter);

    if (distance < closestDistance) {
      closestDistance = distance;
      closestLocker = locker;
    }
  });

  lockers.forEach(locker => locker.classList.remove('active'));
  if (closestLocker) closestLocker.classList.add('active');
}

lockerScroll.addEventListener('scroll', updateActiveLocker);
slider.addEventListener('input', updateActiveLocker);

// jalankan pertama kali
updateActiveLocker();

