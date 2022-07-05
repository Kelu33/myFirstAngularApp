export class Character {
    constructor(
        public name: string,
        public status: string,
        public species: string,
        public image: string,
        public location: string
    ) {}

}

export class CharacterIdAndName {
    constructor(
        public id: string,
        public name: string
    ) {}
}