import { api } from "./my-fetch";

export const Game_Server = {
    Get_Hand(amount = 7){
        return api('hand')
    },
    Get_Next_Picture(){
        return api('picture/flip')
    },
    Get_State(){
        return api('')
    }
}

//to remind us the shape of the player
export class Player {
    name;
    points;
    captions;
}