/* The idea is to create a vehicle that can perceive its surroundings and respond to 
   them in a manner similar to a human driver,and to develop a program enabling a car 
   to react appropriately to obstacles on the road.*/ 

   import { getObstacleEvents } from './computer-vision';

// Start the engine :
interface AutonomousCar {
  isRunning?: boolean;
  respond: (events:Events) => void;
}
interface AutonomousCarProps {
   isRunning?: boolean;
   steeringControl : Steering | undefined;
}

interface Events {
  [Obstacle:string]:boolean;
}


// Car class :
class Car implements AutonomousCar {
  isRunning;
    steeringControl;
    constructor(props:AutonomousCarProps){
    this.isRunning = props.isRunning;
    this.steeringControl = props.steeringControl;//Let the Car take the wheel : 
  }
  // Respond to events : 
  respond(events:Events){
  if(!this.isRunning ){
      console.log('car is off');
      }
      return;
 } 
 }


// Add steering : 
interface Control {
  execute: (command:string) => void;
}
interface Steering extends Control {
  turn: (direction:string) => void;
}

// SteeringControl class : 
class SteeringControl implements Steering  {
  execute(command:string) {
      console.log( `Executing: ${command}` )
  }
  turn(direction:string){
    this.execute(`turn ${direction}`);
 }
 } 
 

// Test :
const steering =  new SteeringControl();
 steering.turn('left');
 const autonomousCar = new Car({ steeringControl : steering , isRunning: true });
//  Start the engine :
//  console.log(autonomousCar.isRunning);
autonomousCar.respond(getObstacleEvents());



