const Game = {
    Players: [],
    Picture_Deck: [],
    Caption_Deck: [],
    Dealer: -1,
    Captions_In_Play: [], //strings
    Picture_In_Play: "",
    Caption_Chosen: -1,
    captions:[],
}

export const Game_Server = {
    Players: [],
    Picture_Deck: [],
    Caption_Deck: [],
    Dealer: -1,
    Captions_In_Play: [], //strings
    Picture_In_Play: "",
    Caption_Chosen: -1,
    captions:[],
}
export const Game_Client = {
    Players: [
        {name: "Moshe", points: 0}, 
        {name: "Bernie", points: 0}, 
        {name: "Donald", points: 0}, 
        {name: "Andrew", points: 0}, 

    ],
    Dealer: -1,
    Captions_In_Play: [], //strings
    Picture_In_Play: "",
    Caption_Chosen: -1,
    Hand: [
        {captions: "I Have no Mouth, But I must Scream"},
        {captions: "When you have to take a dump"},
        {captions: "ROCKET PAAAAAANCH"},
        {captions: "The Great War, 1945. Colorized."},
    ],
}
export var My_Captions = [];
class Player {
    name;
    points;
}
class Hand {
    captions;
}