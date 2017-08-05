export const UPDATE_POSITION = '@@apple/UPDATE_POSITION';
export const SAVE_CURRENT_TIME = '@@apple/SAVE_CURRENT_TIME';

export const updatePosition = (newX, newY) => ({
    type: UPDATE_POSITION,
    payload: {
        position: {
            x: newX,
            y: newY
        }
    }
});

export const saveCurrentTime = newTime => ({
    type: SAVE_CURRENT_TIME,
    payload: {
        lastTime: newTime
    }
});

export const update = currentTime => {
    return (dispatch, getState) => {
        if (currentTime) {
            const { apple } = getState();

            if (currentTime - apple.lastTime > 100) {
                dispatch(saveCurrentTime(currentTime));
            }
        }
    };
};
