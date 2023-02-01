const WIDTH = 7;
const HEIGHT = 6;

function createBoard(width, height) {
    let board = [];
    for (let x = 0; x < width; x++) {
        let column = [];
        for (let y = 0; y < height; y++) {
            column.push(0);
        }
        board.push(column);
    }
    return board
}

((board, currentPlayer) => {
    function renderBoard(board, currentPlayer) {
        const $board = document.createElement('div');
        $board.classList.add('board');

        for (let x = 0; x < board.length; x++) {
            let column = board[x];
            const $column = document.createElement('div');
            $column.classList.add('board__column');

            const $button = document.createElement('button');
            $button.classList.add('column__button')
            $button.addEventListener('click', () => {
                const newBoard = addChip(x, board, currentPlayer);
                board = newBoard;
                updateBoard(board);

                currentPlayer = currentPlayer == 1 ? 2 : 1;
            });
            $column.appendChild($button);

            for (let y = 0; y < column.length; y++) {
                const $cell = document.createElement('div');
                $cell.classList.add('board__cell');
                $cell.setAttribute('id', `cell-${x}-${y}`)

                $column.appendChild($cell);
            }

            $board.appendChild($column);
        }

        document.body.appendChild($board);

        console.log(board)
    }

    function updateBoard(board) {
        for (let x = 0; x < board.length; x++) {
            const column = board[x];
            for (let y = 0; y < column.length; y++) {
                const cellValue = column[y];
                if (cellValue == 0) {
                    continue;
                }
                const $cell = document.getElementById(`cell-${x}-${y}`);

                $cell.classList.add('board__cell--player' + cellValue);
            }
        }
    }

    function addChip(columnIndex, board, currentPlayer) {
        const column = board[columnIndex];

        for (let i = column.length - 1; i >= 0; i--) {
            if (column[i] != 0) {
                continue;
            }
            column[i] = currentPlayer;
            break;
        }

        return board;
    }

    window.addEventListener('DOMContentLoaded', () => renderBoard(board, currentPlayer));
})(createBoard(WIDTH, HEIGHT), 1);