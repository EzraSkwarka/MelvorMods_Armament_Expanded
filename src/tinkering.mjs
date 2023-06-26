export class CustomSkillRenderQueue extends SkillRenderQueue{
    constructor(){
        super.constructor();
    }
}

export class Tinkering extends Skill{
    constructor(namespace, game){
        super(namespace, 'Tinkering', game);
        this._media = 'melvor:assets/media/skills/slayer/slayer.svg'
        this.renderQueue = new SkillRenderQueue();
    }
}