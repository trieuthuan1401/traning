const secondHand = document.querySelector('.second-hand');
  const minsHand = document.querySelector('.min-hand');
  const hourHand = document.querySelector('.hour-hand');
  function setDate() {
    const now = new Date();
    // Lấy giây hiện tại của máy
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    // Sau khi tính ra ta thay đổi css cho nó
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    // Lấy phút hiện tại của máy
    const mins = now.getMinutes();
    // Sau khi tính ra ta thay đổi css cho nó
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;
    // Lấy giờ hiện tại của máy 
    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    // Sau khi tính ra ta thay đổi css cho nó
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  }
  setInterval(setDate, 1000);