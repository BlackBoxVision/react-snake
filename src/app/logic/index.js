import Stage from '../utils/stage-config';

export default class GameLogic {
    static snakeEatsApple(head, position) {
        return head.x === position.x && head.y === position.y;
    }

    static snakeEatsItSelf = (head, tail) => (newX, newY) => {
        return tail.filter(({ x, y }) => x === newX && y === newY).length > 0 || (head.x === newX && head.y === newY);
    };

    static updateSnake(head, tail, direction) {
        const newHead = GameLogic._recomputeHead(head, direction);
        const newTail = GameLogic._recomputeTail(head, tail);

        //const isHeadInTail = newTail.find(it => it.x === newHead.x && it.y === newHead.y);

        return {
            head: newHead,
            tail: newTail
        };
    }

    static updateApple(head, tail) {
        const hasCollisions = GameLogic.snakeEatsItSelf(head, tail);

        let newX;
        let newY;

        do {
            newX = Math.floor(Math.random() * Stage.xBlocks);
            newY = Math.floor(Math.random() * Stage.yBlocks);
        } while (hasCollisions(newX, newY));

        return {
            x: newX,
            y: newY
        };
    }

    static _recomputeHead(head, direction) {
        let newX = head.x + direction.x;
        let newY = head.y + direction.y;

        newX = newX < 0 ? Stage.xBlocks - 1 : newX;
        newX = newX > Stage.xBlocks - 1 ? 0 : newX;

        newY = newY < 0 ? Stage.yBlocks - 1 : newY;
        newY = newY > Stage.yBlocks - 1 ? 0 : newY;

        return {
            x: newX,
            y: newY
        };
    }

    static _recomputeTail(head, tail) {
        return tail.map((item, index) => (index === 0 ? head : tail[index - 1]));
    }
}
