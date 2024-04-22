class TweetElement extends HTMLElement {
  connectedCallback() {
    this.addEventListener('click', () => {
      alert(this.tweetContent());
    });
  }

  constructor() {
		super();

		const template = document.getElementById('tweet-template').content.cloneNode(true);

		// create icon image
		template.querySelector('.user-icon').appendChild(this.createIcon());
		// set user name
		template.querySelector('.tweet-user-name').innerHTML = this.userName();
    // set user id
    template.querySelector('.tweet-user-id').innerHTML = this.userID();
    // set tweeted at
    template.querySelector('.tweet-date').innerHTML = this.tweetedAt();
    // set tweet content
    template.querySelector('.tweet-content').innerHTML = this.tweetContent();

    this.attachShadow({mode: 'open'}).appendChild(template);
	}

	createIcon() {
		const imgElm = document.createElement('img');
		imgElm.src = this.hasAttribute('img-src') ? this.getAttribute('img-src') : 'img/default.png';
		imgElm.alt = 'icon';
    imgElm.setAttribute('width', '50');

		return imgElm;
	}

	userName() {
		return this.hasAttribute('user-name') ? this.getAttribute('user-name') : 'No Name';
	}

  userID() {
    return this.hasAttribute('user-id') ? `@${this.getAttribute('user-id')}` : 'No ID';
  }

  tweetedAt() {
    return this.hasAttribute('tweeted-at') ? this.getAttribute('tweeted-at') : 'No Date';
  }

  tweetContent() {
    return this.hasAttribute('tweet-content') ? this.getAttribute('tweet-content') : 'No Content';
  }
}

customElements.define('tweet-element', TweetElement);
