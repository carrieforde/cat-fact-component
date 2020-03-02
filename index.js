import { LitElement, html, customElement, css } from 'lit-element';

class CatFact extends LitElement {
  constructor() {
    super();

    this.fact = '';
    this.showButton = false;

    this.getFact();
  }

  static get properties() {
    return {
      showButton: { type: Boolean }
    };
  }

  static get styles() {
    return css`
      :host {
        background-color: var(--cat-fact-bg-color, transparent);
        border: var(--cat-fact-border, 0);
        border-radius: var(--cat-fact-border-radius, 0);
        display: block;
        padding: var(--cat-fact-padding, 0);
      }

      h2 {
        margin-bottom: var(--cat-fact-h2-margin-bottom, 1rem);
        margin-top: 0;
      }

      button {
        background-color: var(--cat-fact-button-bg-color, inherit);
        border: var(--cat-fact-button-border, 0);
        color: var(--cat-fact-button-color, inherit);
        font-size: var(--cat-fact-button-font-size, 1rem);
        margin-top: var(--cat-fact-button-margin-top, 2rem);
        padding: var(--cat-fact-button-padding, inherit);
      }
    `;
  }

  getFact() {
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
      ${this.showButton
        ? html`
            <button type="button" @click="${this.getFact}">Get new fact</button>
          `
        : null}
    `;
  }
}

customElements.define('cat-fact', CatFact);
