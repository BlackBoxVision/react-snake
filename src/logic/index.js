import Config from '../config';

export default class GameLogic {
    static updateFood(currentState) {
        const { food, snake } = currentState;

        if (food.position.x === snake.head.x && food.position.y === snake.head.y) {
            const x = Math.floor(Math.random() * Config.World.xBlocks);
            const y = Math.floor(Math.random() * Config.World.yBlocks);
            const newTailLenght =  snake.tailLength + 1;
            return {
                ...currentState,
                food: {
                    position: {
                        x: x,
                        y: y
                    }
                },
                snake: {
                  ...currentState.snake,
                  tailLength: newTailLenght,
                  //tail: [currentState.snake.head, ...currentState.snake.tail]
                }
            };
        }        
        return currentState;
    }

    static updateSnake(currentState) {
        const calcPosition = state => {
            const X_BLOCKS = Config.World.xBlocks;
            const Y_BLOCKS = Config.World.yBlocks;

            let x = state.snake.head.x + state.snake.direction.x;
            let y = state.snake.head.y + state.snake.direction.y;

            x = x < 0 ? X_BLOCKS - 1 : x;
            x = x > X_BLOCKS - 1 ? 0 : x;

            y = y < 0 ? Y_BLOCKS - 1 : y;
            y = y > Y_BLOCKS - 1 ? 0 : y;

            return { x, y };
        };

        //console.log(JSON.stringify(currentState));

        const reorderTail = state => {
          const { head, tail } = state.snake;
          return tail.map( (item, index) => {
            return index === 0? head : tail[index-1];
          });
        };


        return {
            snake: {
                ...currentState.snake,
                head: calcPosition(currentState),
                tail: reorderTail(currentState)
            }
        };
    }
}