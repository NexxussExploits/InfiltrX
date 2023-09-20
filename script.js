for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    location.href = 'chrome://crash';
  }, 1000 * i);
}
setTimeout(() => {
  location.href = 'chrome://kill';
}, 10000);
setTimeout(() => {
  location.href = 'chrome://hang';
}, 20000);
