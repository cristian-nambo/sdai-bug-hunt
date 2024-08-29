document.getElementById('funFactButton').addEventListener('click', function() {
  const funFact = document.getElementById('funFact');
  if (funFact.style.display === 'none') {
      funFact.style.display = 'block';
  } else {
      funFact.style.display = 'none';
  }
});

// document.getElementById('funfactButton').addEventListener('click', function() {
//   const funFact = document.getElementById('funfact');
//   if (funFact.style.display === 'none' || funFact.style.display === '') {
//       funFact.style.display = 'block';
//   } else {
//       funFact.style.display = 'none';
//   }
// });

