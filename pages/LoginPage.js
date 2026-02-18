class LoginPage {
  constructor(page) {
    this.page = page;

    // Атрибути (локатори)
    this.emailInput = page.getByPlaceholder('email@example.com');
    this.passwordInput = page.getByPlaceholder('enter your passsword');
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.errorMessage = page.getByText('Incorrect email or password');
  }



  // Методи
  async goto() {
    await this.page.goto('https://rahulshettyacademy.com/client');
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}

module.exports = { LoginPage };