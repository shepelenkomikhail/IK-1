export class Cell {
    constructor(x, y, type) {
      this.x = x;
      this.y = y;
      this.type = type;
    }
    getLayout() {
        return `<div class="cell bg-orange-300 border rounded-md border-black 
        m-0.5 w-24 h-24 mx-auto
        row-${this.x} col-${this.y}" 
        data-row="${this.x}" data-col="${this.y}" 
        alt="${this.type}"></div>`;
      }
}