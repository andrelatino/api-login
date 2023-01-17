const loginForm = document.getElementById('formLogin');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  showProgressBar()
  const email = loginForm.elements.email.value;
  const password = loginForm.elements.password.value;
  const body = {
    email: email,
    password: password,
  };

  fetch('https://x8ki-letl-twmt.n7.xano.io/api:tuullTuB/auth/login', {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
    .then((response) => {
      if (response.status !== 200) {
        hideProgressBar();
        // Display error message
        // document.getElementById('loginMesagge').innerHTML = 'Wrong login!';
        alert ("Wrong login");
        return;
      }
      hideProgressBar()
      response.json().then((data) => {
        const authToken = data.authToken;
        localStorage.setItem('authToken', authToken);
        if (authToken) {
          // window.location.href = 'http://localhost:10073/api-json/';
          alert ("You are logged");
        }
      });
    });
});


function hideProgressBar() {
  const progressBar = document.getElementById('g-progressbar');
  progressBar.style.transition = 'opacity 0.5s ease-out';
  progressBar.style.opacity = 0;
}

function showProgressBar() {
  const progressBar = document.getElementById('g-progressbar');
  progressBar.style.transition = 'opacity 0.5s ease-out';
  progressBar.style.opacity = 1;
}

function generateMathQuestion() {
  // Generate two random numbers between 1 and 10
  var num1 = Math.floor(Math.random() * 10) + 1;
  var num2 = Math.floor(Math.random() * 10) + 1;

  // Generate a random operator (+, -, *, /)
  var operators = ['+', '-', '*', '/'];
  var operator = operators[Math.floor(Math.random() * operators.length)];

  // Return the question as a string
  return num1 + ' ' + operator + ' ' + num2 + ' = ';
}

console.log(generateMathQuestion());

