import { Skill } from "./skill.model";

export class Developer {
    constructor(
        public lastname: string,
        public firstname: string,
        public age: number,
        public sexe: string,
        public bio: string,
        public skills: Skill[]
    ){}
}