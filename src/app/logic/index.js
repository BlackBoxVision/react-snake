import Config from '../config';

export default class GameLogic {
    static update(currentState) {
        const foodState = GameLogic._updateFood(currentState);
        const snakeState = GameLogic._updateSnake(currentState);

        if (foodState === currentState) {
            //Food wasn't touched yet!
            return {
                ...currentState,
                gameOver: snakeState.gameOver,
                snake: {
                    ...currentState.snake,
                    head: snakeState.snake.head,
                    tail: snakeState.snake.tail
                }
            };
        } else {
            //Food was touched, merge is achieved different
            return {
                ...currentState,
                gameOver: snakeState.gameOver,
                food: foodState.food,
                snake: {
                    ...currentState.snake,
                    tailLength: foodState.snake.tailLength,
                    head: snakeState.snake.head,
                    tail: foodState.snake.tail
                }
            };
        }
    }

    static _updateFood(currentState) {
        const { food: { position }, snake: { head, tail, tailLength } } = currentState;

        if (position.x === head.x && position.y === head.y) {
            const newTail = [head, ...tail];
            const newTailLength = tailLength + 1;
            const newPosition = GameLogic._recomputeFood(currentState);

            return {
                food: {
                    position: newPosition
                },
                snake: {
                    tail: newTail,
                    tailLength: newTailLength
                }
            };
        }
        return currentState;
    }

    static updateSnake(currentState) {
        const newHead = GameLogic._recomputeHead(currentState);
        const newTail = GameLogic._recomputeTail(currentState);

        const isHeadInTail = newTail.find(it => it.x === newHead.x && it.y === newHead.y);

        return {
            head: newHead,
            tail: newTail
        };
    }

    static _recomputeFood(currentState) {
        const { snake: { head, tail } } = currentState;

        const hasCollisions = (newX, newY) =>
            tail.filter(({ x, y }) => x === newX && y === newY).length > 0 || (head.x === newX && head.y === newY);

        let newX;
        let newY;

        do {
            newX = Math.floor(Math.random() * Config.World.xBlocks);
            newY = Math.floor(Math.random() * Config.World.yBlocks);
        } while (hasCollisions(newX, newY));

        return {
            x: newX,
            y: newY
        };
    }

    static _recomputeHead(currentState) {
        const { head, direction } = currentState;

        let newX = head.x + direction.x;
        let newY = head.y + direction.y;

        newX = newX < 0 ? Config.World.xBlocks - 1 : newX;
        newX = newX > Config.World.xBlocks - 1 ? 0 : newX;

        newY = newY < 0 ? Config.World.yBlocks - 1 : newY;
        newY = newY > Config.World.yBlocks - 1 ? 0 : newY;

        return {
            x: newX,
            y: newY
        };
    }

    static _recomputeTail(currentState) {
        const { head, tail } = currentState;

        return tail.map((item, index) => (index === 0 ? head : tail[index - 1]));
    }
}
