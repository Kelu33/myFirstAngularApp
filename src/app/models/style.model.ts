import { Icon } from "./icon.model";

export class Style {
    constructor(
        public color: string,
        public innerHtml: string,
        public icon: Icon = new Icon('', false)
    ) {}
}