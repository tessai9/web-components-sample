class LoginComponent extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    shadow.innerHTML = `
<div class="card">
  <form class="login-form">
    <p>
      <input type="email" name="email">
    </p>
    <p>
      <input type="password" name="password">
    </p>
    <p style="margin-top: 1rem;">
      <input type="submit" value="ログイン">
    </p>
  </form>
</div>
`;

    shadow
      .querySelector('input[type=submit]')
      .addEventListener(
        'click',
        async (e) => {
          e.preventDefault();
          await this.signIn()
        }
      );
  }

  async signIn() {
    const email = this.shadowRoot.querySelector('input[type=email]').value;
    const password = this.shadowRoot.querySelector('input[type=password]').value;

    try {
      user = await fetch('https://tesao.awesome-api.jp/api/auth/login', { method: 'POST', body: JSON.stringify({ email: email, password: password }) });
      if(user) {
        window.locaiton = '/dashboard';
      }
    } catch {
      console.error('failed to login');
      const loginFormElm = this.shadowRoot.querySelector('.login-form');
      const loginFailedParagraph = document.createElement('p');
      loginFailedParagraph.innerText = 'ログインに失敗しました';
      loginFormElm.appendChild(loginFailedParagraph);
    }
  }
}

customElements.define('login-component', LoginComponent);
