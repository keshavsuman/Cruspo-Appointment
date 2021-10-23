export default class CruspoTimeCalculator{

    constructor(hour,min,timeFormat='12-hour'){
        this.hour=hour;
        this.min= min;
        this.timeFormat = timeFormat;
    }
    
    addTime(duration){
        duration=parseInt(duration);
        if(duration<60)
        {
            this.min=this.min+duration;
        }else if(duration>=60){
            this.hour = this.hour+60/60;            
            this.min = this.min+(duration-(60/60)*60);
        }
        if(this.min>=60){
            this.hour++;
            this.min=this.min-(60/60)*60;
        }
        if(this.hour>12 && this.timeFormat==='12-hour'){
            this.hour=1
        }
        if(this.hour>=24){
            this.hour=0
        }
        
    }

    getTime(){
            if(this.hour.toString().length===1){
                return this.min===0?`0${this.hour}:${this.min}0`:`0${this.hour}:${this.min}`
            }else{
                return this.min===0?`${this.hour}:${this.min}0`:`${this.hour}:${this.min}`
            }
    }

    getTimeListBasedOnDuration(duration){
        var timeList = [];
        var newTimeList = [];

        while(!timeList.includes(this.getTime())){
            timeList.push(this.getTime());
            this.addTime(duration);
        }
        timeList.map(t=>{
            newTimeList.push(`${t} A.M.`); 
        });
        timeList.map(t=>{
            newTimeList.push(`${t} P.M.`); 
        });
        return newTimeList;
    }
}