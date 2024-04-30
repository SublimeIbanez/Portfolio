import { useState, useMemo } from "react";

import { Boards, Block } from "./BoardLayouts";


const FauxHollows = () => {
    const [selectedBlock, changeBlock] = useState(Block.Locked);

    const [board, changeBoard] = useState(Boards.Default);

    return (
        <div className="faux-hollows-main flex flex-col min-w-screen-md max-w-screen-md lg:h-[95dvh] h-[75dvh] lg:pt-24">
            <button
                className="px-4 py-1 bg-sky-500 rounded-md my-4"
                onClick={_ => {
                    changeBoard(Boards.Default);
                    changeBlock(Block.Locked);
                }}
            >Reset Board</button>
            <div className="flex gap-4 sm:flex-row justify-around align-center mb-6">
                <div>
                    <ul className="flex flex-col gap-1">
                        <li><button
                            className="p-3"
                            style={{
                                backgroundColor: Block.Locked.toString(),
                                border: "4px solid",
                                borderColor: selectedBlock === Block.Locked ? "green" : Block.Locked.toString()
                            }}
                            onClick={_ => changeBlock(Block.Locked)}
                        ></button></li>
                        <li><button
                            className="p-3"
                            style={{
                                backgroundColor: Block.Blank.toString(),
                                border: "4px solid",
                                borderColor: selectedBlock === Block.Blank ? "green" : Block.Blank.toString()
                            }}
                            onClick={_ => changeBlock(Block.Blank)}
                        ></button></li>
                        <li><button
                            className="p-3"
                            style={{
                                backgroundColor: Block.Swords.toString(),
                                border: "4px solid",
                                borderColor: selectedBlock === Block.Swords ? "green" : Block.Swords.toString()
                            }}
                            onClick={_ => changeBlock(Block.Swords)}
                        ></button></li>
                        <li><button
                            className="p-3"
                            style={{
                                backgroundColor: Block.Crate.toString(),
                                border: "4px solid",
                                borderColor: selectedBlock === Block.Crate ? "green" : Block.Crate.toString()
                            }}
                            onClick={_ => changeBlock(Block.Crate)}
                        ></button></li>
                        <li><button
                            className="p-3"
                            style={{
                                backgroundColor: Block.Fox.toString(),
                                border: "4px solid",
                                borderColor: selectedBlock === Block.Fox ? "green" : Block.Fox.toString()
                            }}
                            onClick={_ => changeBlock(Block.Fox)}
                        ></button></li>
                    </ul>
                </div>
                <Board layout={board} setLayout={changeBoard} selectedBlock={selectedBlock} modifiable={true} />
            </div>

            <Solutions layout={board} modifiable={false} />
        </div>
    );
};

export default FauxHollows;


type BoardProps = {
    layout: Block[][];
    setLayout?: React.Dispatch<React.SetStateAction<Block[][]>>;
    selectedBlock?: Block;
    modifiable: boolean;
}

const Board = ({ layout, setLayout, selectedBlock, modifiable }: BoardProps) => {
    const handleClick = (row: number, column: number) => {
        if (!modifiable) {
            return;
        }
        const newLayout = layout.map(row => [...row]);
        if (layout[row][column] === selectedBlock!) {
            newLayout[row][column] = Block.Default;
        } else {
            newLayout[row][column] = selectedBlock!;
        }
        setLayout!(newLayout);
    };

    const padding = modifiable ? `p-3.5` : `p-3`;

    return (
        <div className="board">
            {layout.map((row, rowIndex) => (
                <div key={rowIndex} className="flex">
                    {row.map((block, columnIndex) => (
                        <div
                            key={columnIndex}
                            className={`${padding} border-2 border-black`}
                            style={{ backgroundColor: block }}
                            onClick={() => handleClick(rowIndex, columnIndex)}
                        ></div>
                    ))}
                </div>
            ))}
        </div>
    );
};

const Solutions = ({ layout }: BoardProps) => {
    const testEquality = (board: Block[][]) => {
        for (let row = 0; row < layout.length; ++row) {
            for (let column = 0; column < layout[row].length; ++column) {
                if (layout[row][column] !== Block.Default && layout[row][column] !== board[row][column]) {
                    return false;
                }
            }
        }
        return true;
    };

    const solutions = useMemo(() => {
        let list: Block[][][] = [];

        Object.entries(Boards).forEach(([set, board]) => {
            if (set !== "Default") {
                if (testEquality(board)) {
                    list.push(board);
                }
            }
        });

        return list;
    }, [layout, Boards]);

    const colStyle = (solutions.length < 4) ? `md:grid-cols-${solutions.length}` : `md:grid-cols-4`
    return (
        <div className={`faux-hollows-solutions grid grid-cols-2 ${colStyle} gap-4 min-w-0 sm:min-w-[768px] max-w-screen-md`} >
            {solutions.map((set) => {
                return <Board layout={set} modifiable={false} />
            })}
        </div>
    );
}
