window.onload = () => {
    const width = 10;
    let score = document.body.appendChild(document.createElement('h1'));
    let board = generateBoard(width);
    score.textContent = 'Heads +100; Ass -200; Empty: +0';
    board.style = 'display: flex; height: 100vh;';
    let b = document.body.appendChild(board);
    
    var timer = setInterval(()=>{
        score.textContent = points;
        document.body.removeChild(b);
        board = generateBoard(width);
        board.style = 'display: flex; height: 100vh;';
        b = document.body.appendChild(board);

        if(points< 0 || points > 1000){
            score.textContent = 'Game Over';
            clearInterval(timer);
        }
    },1000);
}

let points = 0;

let game_over = false;

function generateImage(state) {
    let container = document.createElement('div');
    let src;

    if (state === 0) {
        src = "grass.png";
        container.addEventListener('click', () => {
            
            points += 0;
        });
    }
    else if (state === 1) {
        src = "rear.png";
        container.addEventListener('click', () => points -= 200);
    }
    else
    {
        src = "head.png";
        container.addEventListener('click', () => points += 100);
    }

    let image = document.createElement('img');
    image.src = src;
    
    container.appendChild(image);

    return container;
}

function generateBoard(width) {
    let board = document.createElement('div');
    board.id = 'board'
    for (let index = 0; index < width; index++,board.appendChild(document.createElement('br'))) {
        let row = document.createElement('div');
        row.id = 'row'
        for (let i = 0; i < width; i++) {
            row.appendChild(generateImage(Math.floor(Math.random() * 3)));
        }
        board.appendChild(row);
    }
    return board;
}