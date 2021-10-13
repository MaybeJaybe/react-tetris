import { PAUSE, RESUME, MOVE_LEFT, MOVE_RIGHT, ROTATE, MOVE_DOWN, GAME_OVER, RESTART } from '../actions'
import { defaultState } from '../utils'

const gameReducer = (state = defaultState(), action) => {

    switch(action.type) {
        case PAUSE:
            return state
        case RESUME:
            return state
        case MOVE_LEFT:
            return state
        case MOVE_RIGHT:
            return state
        case ROTATE:
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