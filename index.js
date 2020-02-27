import { LitElement, html, customElement } from 'lit-element';

class CatFact extends LitElement {
  constructor() {
    super();

    this.fact = '';

    // https://catfact.ninja/
    fetch('https://catfact.ninja/fact')
      .then(res => res.json())
      .then(data => {
        this.fact = data.fact;
        this.requestUpdate();
      });
  }

  render() {
    return html`
      <h2>Did you know?</h2>
      ${this.fact
        ? html`
            <p>${this.fact}</p>
          `
        : null}
    `;
  }
}

customElements.define('cat-fact', CatFact);
