"use strict";
/* The idea is to create a vehicle that can perceive its surroundings and respond to
   them in a manner similar to a human driver,and to develop a program enabling a car
   to react appropriately to obstacles on the road.*/
Object.defineProperty(exports, "__esModule", { value: true });
const computer_vision_1 = require("./computer-vision");
// Car class :
class Car {
    constructor(props) {
        this.isRunning = props.isRunning;
        this.steeringControl = props.steeringControl;
    }
    // Respond to events : 
    respond(events) {
        if (!this.isRunning) {
            console.log('car is off');
        }
        return;
        // Steer around obstacles :
        Object.keys(events).forEach(eventKey => {
            if (events[eventKey]) {
                console.log(`Processing event: ${eventKey}`);
            }
            return;
            if (eventKey === 'ObstacleLeft') {
                this.steeringControl.turn('right');
            }
            if (eventKey === 'ObstacleRight') {
                this.steeringControl.turn('left');
            }
        }); //  fermeture forEach
    } //  fermeture respond
}
// SteeringControl class : 
class SteeringControl {
    execute(command) {
        console.log(`Executing: ${command}`);
    }
    turn(direction) {
        this.execute(`turn ${direction}`);
    }
}
// test :
const steering = new SteeringControl();
steering.turn('left');
const autonomousCar = new Car({ steeringControl: steering, isRunning: true });
//  Start the engine :
//  console.log(autonomousCar.isRunning);
autonomousCar.respond((0, computer_vision_1.getObstacleEvents)());
// --------------
// Start the engine :
// const autonomousCar = new Car({ steeringControl : Steering , isRunning: true });
// console.log(autonomousCar.isRunning);
// --------------
