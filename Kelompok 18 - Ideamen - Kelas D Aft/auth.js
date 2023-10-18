// Data pengguna simulasi
const testUserData = {
    username: 'testuser',
    password: 'testpassword'
  };
  
  function login() {
    const emailInput = document.querySelector('input[type="email"]');
    const passwordInput = document.querySelector('input[type="password"]');
    const rememberMeCheckbox = document.querySelector('input[type="checkbox"]');
  
    const enteredEmail = emailInput.value;
    const enteredPassword = passwordInput.value;
  
    // Periksa apakah email dan kata sandi yang dimasukkan sesuai dengan data pengguna simulasi
    if (enteredEmail === testUserData.username && enteredPassword === testUserData.password) {
      // Login berhasil, arahkan ke halaman utama
      window.location.href = 'main.html';
    } else {
      if (enteredEmail !== testUserData.username) {
        alert(`Email tidak ditemukan!`);
      } else if (enteredPassword !== testUserData.password) {
        alert(`Password salah!`);
      }
    }
  }
  
  const loginButton = document.querySelector('button');
  loginButton.addEventListener('click', login);
  