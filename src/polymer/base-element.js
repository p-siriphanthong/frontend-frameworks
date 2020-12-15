import { PolymerElement, html } from '@polymer/polymer/polymer-element.js'

export class BaseElement extends PolymerElement {
  static get styleTemplate() {
    return html`
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <link href="./index.css" rel="stylesheet" />
    `
  }
}
