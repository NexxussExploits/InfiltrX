for (let i = 0; i < 10; i++) {
  setTimeout(function() {
    let crash = undefinedVariable;
  }, 1000 * i);
}

setTimeout(function() {
  location.reload();
}, 10000);

while (true) {
  
}
