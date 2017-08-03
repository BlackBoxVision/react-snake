import Config from '../config';

export default class GameLogic {
    static update(currentState) {
        const foodState = GameLogic._updateFood(currentState);
        const snakeState = GameLogic._updateSnake(currentState);

        if (foodState === currentState) {
            //Food wasn't touched yet!
            return {
                ...currentState,
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
        const { food, snake } = currentState;

        if (food.position.x === snake.head.x && food.position.y === snake.head.y) {
          let newX;
          let newY;
          do {
            newX = Math.floor(Math.random() * Config.World.xBlocks);
            newY = Math.floor(Math.random() * Config.World.yBlocks);
          } while( snake.tail.filter( item => item.x === newX && item.y === newY ).lenght > 0  || ( snake.head.x === newX && snake.head.y === newY) );
          const newTailLength = snake.tailLength + 1;

          return {
              food: {
                  position: {
                      x: newX,
                      y: newY
                  }
              },
              snake: {
                  tailLength: newTailLength,
                  tail: [currentState.snake.head, ...currentState.snake.tail]
              }
          };
        }
        return currentState;
    }

    static _updateSnake(currentState) {
        const newHead = GameLogic._recomputeHead(currentState);
        const newTail = GameLogic._recomputeTail(currentState);

        return {
            snake: {
                head: newHead,
                tail: newTail
            }
        };
    }

    static _recomputeHead(currentState) {
        const X_BLOCKS = Config.World.xBlocks;
        const Y_BLOCKS = Config.World.yBlocks;

        let x = currentState.snake.head.x + currentState.snake.direction.x;
        let y = currentState.snake.head.y + currentState.snake.direction.y;

        x = x < 0 ? X_BLOCKS - 1 : x;
        x = x > X_BLOCKS - 1 ? 0 : x;

        y = y < 0 ? Y_BLOCKS - 1 : y;
        y = y > Y_BLOCKS - 1 ? 0 : y;

        return { x, y };
    }

    static _recomputeTail(currentState) {
        const { snake: { head, tail } } = currentState;
        return tail.map((item, index) => (index === 0 ? head : tail[index - 1]));
    }
}
