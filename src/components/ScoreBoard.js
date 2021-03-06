import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { pause, resume, restart } from '../actions';

export default function ScoreBoard(props) {
    const dispatch = useDispatch()
    const game = useSelector((state) => state.game)
    const { score, isRunning, gameOver } = game

    return (
        <div className="score-board">
            <div>Score:</div>
            <div>{ score }</div>
            <div>Level:</div>
            <div>1</div>
            {/* if implementing key listener events, spacebar is 32, escape is 27 */}
            <button className="score-board-button" onClick={(e) => {
                if (gameOver) { return }
                if (isRunning) {
                    dispatch(pause())
                } else {
                    dispatch(resume())
                }
            }}>{isRunning ? 'Pause' : 'Play'}</button>

            <button className="score-board-button" onClick={(e) => {
                dispatch(restart())
            }}>Restart</button>
        </div>
    )
}