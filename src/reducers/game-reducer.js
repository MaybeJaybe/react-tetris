import { PAUSE, RESUME, MOVE_LEFT, MOVE_RIGHT, ROTATE, MOVE_DOWN, GAME_OVER, RESTART } from '../actions'
import { defaultState, nextRotation, canMoveTo } from '../utils'

const gameReducer = (state = defaultState(), action) => {
    const { shape, grid, x, y, rotation, nextShape, score, isRunning } = state

    switch(action.type) {
        case PAUSE:
            return state
        case RESUME:
            return state
        case MOVE_LEFT:
            if (canMoveTo(shape, grid, x - 1, y, rotation)) {
                return { ...state, x: x - 1 }
            }
            return state
        case MOVE_RIGHT:
            if (canMoveTo(shape, grid, x + 1, y, rotation)) {
                return { ...state, x: x + 1 }
            }
            return state
        case ROTATE:
            const newRotation = nextRotation(shape, rotation)
            if (canMoveTo(shape, grid, x, y, newRotation)) {
                return { ...state, rotation: newRotation }
            }
            return state
        case MOVE_DOWN:
            return state
        case GAME_OVER:
            return state
        case RESTART:
            return state
        default:
            return state
    }
}
export default gameReducer