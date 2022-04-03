import React, { useState,useEffect } from "react";
import './notfound.css'
import Snake from "./Snake";
import SnakeFood from "./SnakeFood";
import 'animate.css';

const randomCoordinates = () => {
    let min=1;
    let max = 94;
    let x = Math.floor((Math.random()*(max-min+1)+min)/2)*2
    let y = Math.floor((Math.random()*(max-min+1)+min)/2)*2
    return [x,y]
}

function NotFound (props) {

    const defaultState = {
        snakeFood:randomCoordinates(),
        speed:200,
        direction:'Right',
        snakeDots:[
            [0,0],
            [2,0]
        ]
    }

    const [position, setPosition] = useState(defaultState);

    const [gameOver,setGameOver]= useState(false)

    const [score, setScore] = useState(-1);

    const {snakeDots,speed,direction,snakeFood} = position

    useEffect( () => {
        document.onkeydown= onKeyDown
        checkBorders()
        checkFood()
        checkSnakeCollides()
       const interval =setInterval(() => {
           moveSnake()
          }, speed);
          return () => clearInterval(interval)
    },[position])

    useEffect( () => {
        setTimeout(() => {
            setGameOver(false)
        }, 3000);
    },[gameOver])

    useEffect( () => {
     eatFood()
    },[snakeFood])

    const onKeyDown = (e) => {
        e=e||window.event
        switch (e.keyCode) {
            case 38:
                setPosition({...position,direction:'Up'})
                break;
            case 40:
                setPosition({...position,direction:'Down'})
                break;
            case 37:
                setPosition({...position,direction:'Left'})
                break;
            case 39:
                setPosition({...position,direction:'Right'})
                break;
            default:
                break;
        }
    }

    const moveSnake = () => {
        let dots = [...snakeDots]
        let head = dots[dots.length-1]
        switch(direction){
            case 'Right':
                head = [head[0]+2,head[1]]
                break
            case 'Left':
                head = [head[0]-2,head[1]]
                break
            case 'Down':
                head = [head[0],head[1]+2]
                break
            case 'Up':
                head = [head[0],head[1]-2]
                break
            default:
                break
        }
        dots.push(head)
        dots.shift()
        setPosition({...position,snakeDots:dots})
        console.log(dots[0],dots[1],dots[2])
    }

    const checkSnakeCollides = () => {
        let snake = [...snakeDots]
        let head = snake[snake.length-1]
        snake.pop()
        snake.forEach(dot=>{
            if(head[0]===dot[0] && head[1]===dot[1]){
                loseGame()
            }
        })
    }

    const eatFood = () => {
        let strechSnake = [...snakeDots]
        strechSnake.unshift([])
        console.log('NewSnake',strechSnake)
        setPosition({...position,
            snakeDots:strechSnake,
            speed:speed-10
        })
        setScore(score=>score+=1)
    }

    const checkFood = () => {
        let head = snakeDots[snakeDots.length - 1]
        let food = snakeFood

        if (head[0]===food[0]&&head[1]===food[1]){
             setPosition({...position,snakeFood:randomCoordinates()})
            //  setScore(score+1)
        }
    }

    const checkBorders = () => {
        let head = snakeDots[snakeDots.length-1]
        if (head[0]>=100||head[1]>=100||head[0]<0||head[1]<0){
            loseGame()
        }
    }


    const loseGame = () => {
        setGameOver(!gameOver)
        setPosition(defaultState)
        setScore(-1)
    }
  
    return (
        <div className="page">
        <h1 className='title animate__animated animate__pulse'>404 - No worries, chill and play</h1>
        <p className="score">Score: {score===-1?"Loading":score}</p>
       <div className='box'>
            <Snake position={position}/>
            <SnakeFood position={position}/>
            {gameOver?<h1 id='gameover' className="animate__animated animate__rotateOut">Try Again</h1>:null}
       </div>
       </div>
    );
}

export default NotFound;