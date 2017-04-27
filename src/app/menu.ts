export class Menu {
    link:string;
    icon:string;
    label:string;

    constructor(link: string, icon: string, label) {
        this.link = link;
        this.icon = icon;
        this.label = label;
    }
}