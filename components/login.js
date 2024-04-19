class LoginComponent extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'closed' });

    shadow.innerHTML = `
<div class="card">
  <form>
    <p>
      <input type="text" name="email">
    </p>
    <p>
      <input type="text" name="password">
    </p>
    <p style="margin-top: 1rem;">
      <input type="submit" value="ログイン">
    </p>
  </form>
</div>
`;
  }

  signIn(email, password) {
    window.locaiton = '/';
  }
}

customElements.define('login-component', LoginComponent);
