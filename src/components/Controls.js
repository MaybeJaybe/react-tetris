import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { moveLeft, moveRight, rotate, moveDown } from '../actions'

export default function Controls(props) {
    const dispatch = useDispatch()
    const isRunning = useSelector((state) => state.game.isRunning)
    const gameOver = useSelector((state) => state.game.gameOver)

    const handleKeyboardActions = (event) => {
        if (!isRunning || gameOver) { return }
        switch (event.keyCode) {
            //left arrow and a key
            case 37:
                if (!isRunning || gameOver) { return }
                else {
                    dispatch(moveLeft());
                }
                break;
            case 65:
                if (!isRunning || gameOver) { return }
                else {
                    dispatch(moveLeft());
                }
                break;
            //right arrow and d key
            case 39:
                if (!isRunning || gameOver) { return }
                else { 
                    dispatch(moveRight());
                }
                break;
            case 68:
                if (!isRunning || gameOver) { return }
                else {
                    dispatch(moveRight());
                }
                break;
            //up arrow and w key
            case 38:
                event.preventDefault();
                dispatch(rotate());
                break;
            case 87:
                event.preventDefault();
                dispatch(rotate());
                break;
            //down arrow and s key
            case 40:
                event.preventDefault();
                dispatch(moveDown());
                break;
            case 83:
                event.preventDefault();
                dispatch(moveDown());
                break;

            default:
                return
        }
    };
    useEffect(() => {
        document.addEventListener('keydown', handleKeyboardActions)
        return () => {
            document.removeEventListener('keydown', () => {console.log("removed")});
        }
    }, [handleKeyboardActions])

    return (
        <div className="controls">
            <button disabled={!isRunning || gameOver} className="control-button" onClick={(e) => {
                if (!isRunning || gameOver) { return }
                dispatch(moveLeft())
            }}>Left</button>
            <button disabled={!isRunning || gameOver} className="control-button" onClick={(e) => {
                if (!isRunning || gameOver) { return }
                dispatch(moveRight())
            }}>Right</button>
            <button disabled={!isRunning || gameOver} className="control-button" onClick={(e) => {
                if (!isRunning || gameOver) { return }
                dispatch(rotate())
            }}>Rotate</button>
            <button disabled={!isRunning || gameOver} className="control-button" onClick={(e) => {
                if (!isRunning || gameOver) { return }
                dispatch(moveDown())
            }}>Down</button>
        </div>

    )
}