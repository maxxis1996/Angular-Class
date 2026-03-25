import { Component, inject } from "@angular/core";
import { CharacterList } from "../../components/shared/character-list/character-list";
import { CharacterAdd } from "../../components/shared/character-add/character-add";
import { DragonballServices } from "../../services/dragonball.services";


@Component({
    templateUrl:'./dragonballsuper-page.component.html',
    imports: [CharacterList, CharacterAdd]
})
export class DagronballSuperPageComponent {

    public dragonballService = inject(DragonballServices);
    
}