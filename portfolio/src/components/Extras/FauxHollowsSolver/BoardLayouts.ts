
export enum Block {
    // Background
    Default = "#4b3431",
    // Locked
    Locked = "black",
    // Blank
    Blank = "#c6ab8c",
    // Swords
    Swords = "blue",
    // Present
    Box = "red",
    // Fox
    Fox = "purple",
}

export function MatchBlock(block: string) {
    switch (block) {
        case "🟫":
            return Block.Default;

        case "⬛":
            return Block.Locked;

        case "⬜":
            return Block.Blank;

        case "🟦":
            return Block.Swords;

        case "🟥":
            return Block.Box;

        case "🟪":
            return Block.Fox;

        default:
            return Block.Default;
    }
}

export function MatchBlockString(block: Block) {
    switch (block) {
        case Block.Default:
            return "🟫";

        case Block.Locked:
            return "⬛";

        case Block.Blank:
            return "⬜";

        case Block.Swords:
            return "🟦";

        case Block.Box:
            return "🟥";

        case Block.Fox:
            return "🟪";

        default:
            return "🟫";
    }
}

export const Boards = {
    Default: [
        ["🟫", "🟫", "🟫", "🟫", "🟫", "🟫"],
        ["🟫", "🟫", "🟫", "🟫", "🟫", "🟫"],
        ["🟫", "🟫", "🟫", "🟫", "🟫", "🟫"],
        ["🟫", "🟫", "🟫", "🟫", "🟫", "🟫"],
        ["🟫", "🟫", "🟫", "🟫", "🟫", "🟫"],
        ["🟫", "🟫", "🟫", "🟫", "🟫", "🟫"],
    ],
    AU_R1_C1: [
        ["🟥", "🟥", "⬜", "🟪", "🟪", "⬜"],
        ["🟥", "🟥", "⬛", "⬜", "⬛", "⬜"],
        ["🟪", "⬛", "⬜", "⬜", "🟦", "🟦"],
        ["⬜", "⬜", "⬜", "⬜", "🟦", "🟦"],
        ["⬜", "⬜", "⬛", "⬜", "🟦", "🟦"],
        ["🟪", "⬜", "⬜", "⬜", "⬜", "⬛"],
    ],
    AU_R1_C2: [
        ["⬜", "⬜", "⬜", "🟪", "🟪", "⬜"],
        ["⬜", "⬜", "⬛", "⬜", "⬛", "⬜"],
        ["🟪", "⬛", "🟥", "🟥", "🟦", "🟦"],
        ["⬜", "⬜", "🟥", "🟥", "🟦", "🟦"],
        ["⬜", "⬜", "⬛", "⬜", "🟦", "🟦"],
        ["🟪", "⬜", "⬜", "⬜", "⬜", "⬛"],
    ],
    AU_R2_C1: [
        ["🟥", "🟥", "⬜", "⬜", "⬜", "⬜"],
        ["🟥", "🟥", "⬛", "🟪", "⬛", "⬜"],
        ["⬜", "⬛", "⬜", "🟦", "🟦", "🟪"],
        ["⬜", "⬜", "⬜", "🟦", "🟦", "⬜"],
        ["⬜", "⬜", "⬛", "🟦", "🟦", "⬜"],
        ["⬜", "⬜", "⬜", "🟪", "🟪", "⬛"],
    ],
    AU_R2_C2: [
        ["⬜", "⬜", "⬜", "⬜", "⬜", "⬜"],
        ["⬜", "⬜", "⬛", "🟪", "⬛", "⬜"],
        ["⬜", "⬛", "⬜", "🟦", "🟦", "🟪"],
        ["🟥", "🟥", "⬜", "🟦", "🟦", "⬜"],
        ["🟥", "🟥", "⬛", "🟦", "🟦", "⬜"],
        ["⬜", "⬜", "⬜", "🟪", "🟪", "⬛"],
    ],
    AU_R3_C1: [
        ["🟥", "🟥", "⬜", "⬜", "⬜", "🟪"],
        ["🟥", "🟥", "⬛", "⬜", "⬛", "⬜"],
        ["⬜", "⬛", "⬜", "🟪", "🟪", "⬜"],
        ["⬜", "⬜", "🟪", "🟦", "🟦", "⬜"],
        ["⬜", "⬜", "⬛", "🟦", "🟦", "⬜"],
        ["⬜", "⬜", "⬜", "🟦", "🟦", "⬛"],
    ],
    AU_R3_C2: [
        ["⬜", "⬜", "⬜", "⬜", "⬜", "🟪"],
        ["⬜", "⬜", "⬛", "⬜", "⬛", "⬜"],
        ["⬜", "⬛", "⬜", "🟪", "🟪", "⬜"],
        ["🟥", "🟥", "🟪", "🟦", "🟦", "⬜"],
        ["🟥", "🟥", "⬛", "🟦", "🟦", "⬜"],
        ["⬜", "⬜", "⬜", "🟦", "🟦", "⬛"],
    ],
    AU_R4_C1: [
        ["⬜", "⬜", "⬜", "🟪", "🟪", "⬜"],
        ["⬜", "⬜", "⬛", "⬜", "⬛", "⬜"],
        ["🟪", "⬛", "⬜", "🟦", "🟦", "🟦"],
        ["🟥", "🟥", "⬜", "🟦", "🟦", "🟦"],
        ["🟥", "🟥", "⬛", "⬜", "⬜", "⬜"],
        ["🟪", "⬜", "⬜", "⬜", "⬜", "⬛"],
    ],
    AU_R4_C2: [
        ["⬜", "⬜", "⬜", "🟪", "🟪", "⬜"],
        ["⬜", "⬜", "⬛", "⬜", "⬛", "⬜"],
        ["🟪", "⬛", "⬜", "🟦", "🟦", "🟦"],
        ["⬜", "⬜", "⬜", "🟦", "🟦", "🟦"],
        ["⬜", "⬜", "⬛", "🟥", "🟥", "⬜"],
        ["🟪", "⬜", "⬜", "🟥", "🟥", "⬛"],
    ],
    AU_R5_C1: [
        ["🟥", "🟥", "⬜", "⬜", "⬜", "🟪"],
        ["🟥", "🟥", "⬛", "⬜", "⬛", "⬜"],
        ["⬜", "⬛", "⬜", "🟪", "🟪", "⬜"],
        ["⬜", "⬜", "🟪", "🟦", "🟦", "🟦"],
        ["⬜", "⬜", "⬛", "🟦", "🟦", "🟦"],
        ["⬜", "⬜", "⬜", "⬜", "⬜", "⬛"],
    ],
    AU_R5_C2: [
        ["⬜", "⬜", "⬜", "⬜", "⬜", "🟪"],
        ["⬜", "⬜", "⬛", "⬜", "⬛", "⬜"],
        ["⬜", "⬛", "⬜", "🟪", "🟪", "⬜"],
        ["⬜", "⬜", "🟪", "🟦", "🟦", "🟦"],
        ["🟥", "🟥", "⬛", "🟦", "🟦", "🟦"],
        ["🟥", "🟥", "⬜", "⬜", "⬜", "⬛"],
    ],
    AU_R6_C1: [
        ["🟥", "🟥", "🟪", "⬜", "⬜", "⬜"],
        ["🟥", "🟥", "⬛", "⬜", "⬛", "🟪"],
        ["⬜", "⬛", "🟦", "🟦", "🟦", "⬜"],
        ["⬜", "⬜", "🟦", "🟦", "🟦", "⬜"],
        ["⬜", "⬜", "⬛", "⬜", "⬜", "🟪"],
        ["⬜", "⬜", "🟪", "⬜", "⬜", "⬛"],
    ],
    AU_R6_C2: [
        ["⬜", "⬜", "🟪", "⬜", "⬜", "⬜"],
        ["⬜", "⬜", "⬛", "⬜", "⬛", "🟪"],
        ["⬜", "⬛", "🟦", "🟦", "🟦", "⬜"],
        ["⬜", "⬜", "🟦", "🟦", "🟦", "⬜"],
        ["🟥", "🟥", "⬛", "⬜", "⬜", "🟪"],
        ["🟥", "🟥", "🟪", "⬜", "⬜", "⬛"],
    ],
    AU_R7_C1: [
        ["⬜", "⬜", "🟪", "⬜", "⬜", "⬜"],
        ["⬜", "⬜", "⬛", "⬜", "⬛", "🟪"],
        ["⬜", "⬛", "⬜", "⬜", "⬜", "⬜"],
        ["🟦", "🟦", "⬜", "⬜", "⬜", "⬜"],
        ["🟦", "🟦", "⬛", "🟥", "🟥", "🟪"],
        ["🟦", "🟦", "🟪", "🟥", "🟥", "⬛"],
    ],
    AU_R7_C2: [
        ["⬜", "⬜", "🟪", "⬜", "⬜", "⬜"],
        ["⬜", "⬜", "⬛", "⬜", "⬛", "🟪"],
        ["⬜", "⬛", "⬜", "⬜", "🟥", "🟥"],
        ["🟦", "🟦", "⬜", "⬜", "🟥", "🟥"],
        ["🟦", "🟦", "⬛", "⬜", "⬜", "🟪"],
        ["🟦", "🟦", "🟪", "⬜", "⬜", "⬛"],
    ],
    AU_R7_C3: [
        ["⬜", "⬜", "⬜", "⬜", "⬜", "⬜"],
        ["⬜", "⬜", "⬛", "🟪", "⬛", "⬜"],
        ["⬜", "⬛", "⬜", "⬜", "⬜", "🟪"],
        ["🟦", "🟦", "⬜", "⬜", "🟥", "🟥"],
        ["🟦", "🟦", "⬛", "⬜", "🟥", "🟥"],
        ["🟦", "🟦", "⬜", "🟪", "🟪", "⬛"],
    ],
    AU_R7_C4: [
        ["⬜", "⬜", "⬜", "⬜", "⬜", "⬜"],
        ["⬜", "⬜", "⬛", "🟪", "⬛", "⬜"],
        ["⬜", "⬛", "🟥", "🟥", "⬜", "🟪"],
        ["🟦", "🟦", "🟥", "🟥", "⬜", "⬜"],
        ["🟦", "🟦", "⬛", "⬜", "⬜", "⬜"],
        ["🟦", "🟦", "⬜", "🟪", "🟪", "⬛"],
    ],
}
