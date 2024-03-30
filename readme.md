**JavaScript assignment (home project)**

Stargate: The IK-1 team is on a mission
During the discovery of the planet EIK-235, the scout plane sent through the stargate crashed. General Hammond requested his IK-1 team to locate and repair the aircraft. Due to the lack of data on the plane, there is no information about the planet EIK-235, but the planet may play an essential role in establishing a scientific colony.

Passing through the stargate, the members of IK-1 arrive on a planet whose surface is 100% desert. The downed plane was found relatively quickly, but upon inspection, the engineers noticed that some parts needed for repair were missing. Help them find the lost parts.

Description of the game
Brief overview
This is a cooperative game for 1-4 players in which players must find clues and their corresponding parts hidden in the sand on a 5x5 board. Each player has a water bottle containing six units of water, and the players aim to find the parts before someone runs out of water.

The initial state of the board
The board is a 5x5-square grid, where four squares show an oasis, and the rest show sand. In addition, the positions of clues and parts are assigned and hidden from the player.

Traces and parts
The following components must be found:

![image](https://github.com/shepelenkomikhail/IK-1/assets/121188620/af0a4b76-2383-40ad-b6ba-ab593e3029f8)
![image](https://github.com/shepelenkomikhail/IK-1/assets/121188620/a0cadd9c-c44f-4529-8185-f8977768cd1c)
![image](https://github.com/shepelenkomikhail/IK-1/assets/121188620/d95a3286-27eb-48e3-9feb-82cb232e4439)

Each part has two traces, which mark the field on which the part is located: one trace marks the column (north-south direction), while the other marks the row (east-west direction). The clues are randomly assigned.

When the player unearths the first clue space, they determine which row the engine will be in. When the second clue is discovered, the player can choose the exact location of that part. After that, if a player goes to the part's location and uses the Dig action, they have obtained the given part.

Oases
There are also four spaces marked as oases on the desert board:

![image](https://github.com/shepelenkomikhail/IK-1/assets/121188620/4807c6a8-13be-4230-9e29-6224d74028a7)


Only three of the four oases are actual water bodies:

![image](https://github.com/shepelenkomikhail/IK-1/assets/121188620/583de913-216b-4e82-82a7-b16e9ab96f48)


, and one is just a mirage:

![image](https://github.com/shepelenkomikhail/IK-1/assets/121188620/a84ce47d-3aae-4902-bddf-a132c42ccb7e)


When a player first uses the Dig action on an oasis, it becomes public whether or not it is a natural body of water. In the case of a water reservoir, the given player's water supply will filled (so it recovers to 6 units of water). In the rest of the game, if the player uses the Dig action on an already discovered water source, the player's water supply will be replenished.

**Gameplay**
A player's turn ends after using three actions. At the end of the round, the given player's water supply decreases by one, and the next player comes. In a one-player game, the player performs the actions one after the other, but in his case, after using three actions, his water decreases by one.

Actions
There are the following action types: Move, Dig. The player, in turn, performs the three actions from the action types. You can choose any of them in any order you want. (e.g. he uses 3 Moves in his turn or 2 Moves and 1 Dig...etc)

Move
If the player chooses the Move action, he can move to an adjacent square: up, down, left, or right, but never diagonally.

Digging
If the player chooses the Dig action, they can "dig up" the space they are standing on, revealing what was hidden under the space. If the player performs the Dig action on a sand field, the following may be below it:

Clue (3*2 pieces): This clue concerns where the flying part is. Each component has two clues: one tells you which row it is in and the other which column it is in. After digging it out, you must indicate which part it belongs to and whether the given clue refers to the row or column.
Component (3 pieces): The component is located at the intersection of the two clues belonging to the given component, which is available if the two clues that belong to it have already been revealed.
Empty Tile (12 pcs): Empty tiles, so no clues, no parts, no oasis.
If the player performs the Dig action on an oasis square (4 pieces) with a water reservoir (3 of the four oases) under it, their water resources are replenished. If there is a mirage (1 of the four oases) under the oasis square, it is indicated on the board that such a square is there, and nothing happens to the player's water supply.


The end of the game
Victory: If the player(s) find all three parts, they win together.
Failure: If either player runs out of water or time, you collectively lose the game.

The following things appear on the playing field:

5x5 matrix showing oases, player pieces, and fields revealed during the game
Player data: indicating which piece belongs to whom, the amount of water in the water bottle, how many more actions are available in the given round
The acquired parts

