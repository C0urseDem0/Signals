import { Component, DoCheck, Signal, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.css']
})
export class SignalsComponent implements DoCheck{
   ngDoCheck(): void {
    console.log("Some thing has been change")
   }
   counter=signal(0);
   computecounter=computed(()=>this.counter()*2)//compute signal

   constructor(){
    effect(()=>console.log('the current value '+this.counter()+ ''))//must use signal value to call effect function
   }
   //--change {message: string[] = []; }to signal 
message=signal<string[]>([])
   increment(){
    //---set
    //this.counter.set(this.counter()+1 );
   //---update
   this.counter.update((x)=>x+1)
    //this.message.push('Current counter value is: ' + this.counter);
   // this.message.update((m)=>[...m,'current value of counter is '+this.counter()+''])
   this.message.mutate((m)=>m.push('current value of counter is '+this.counter()+''))
   }

   decrement(){
    //---set
    //this.counter.set(this.counter()-1 );
   //---update
   this.counter.update((x)=>x-1)
    //this.message.pop();
    this.message.mutate((m)=>m.pop())
   }
}
