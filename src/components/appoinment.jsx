import React, { Component,useState,createRef} from 'react'
import DatePicker from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import "react-multi-date-picker/styles/layouts/mobile.css";
import Loader from 'react-loader-spinner';
import currencies from '../helper/currencies';
import timeZone from '../helper/timezone';
import * as appointmentService from '../services/appointmentServices';
import { uploadFileandGetLink } from '../services/resourceServices';
import '../assets/Edit-Appointment.css';
import CruspoTimeCalculator from '../helper/cruspoTimeCaluculator';
import '../assets/appointment.css';
import '../assets/program.css';

class CreateAppointment extends Component {
    
    constructor(props){
        super(props); 
        this.state={
            isLoading:true,
            duration:15,
            isDateOverrideCalendarOpen:false,
            showTimePicker:false,
            schedule:{
                'Sun':[{'startTime':"09:00 A.M.",'endTime':'05:00 P.M.'}],
                'Mon':[{'startTime':"09:00 A.M.",'endTime':'05:00 P.M.'}],
                'Tue':[{'startTime':"09:00 A.M.",'endTime':'05:00 P.M.'}],
                'Wed':[{'startTime':"09:00 A.M.",'endTime':'05:00 P.M.'}],
                'Thu':[{'startTime':"09:00 A.M.",'endTime':'05:00 P.M.'}],
                'Fri':[{'startTime':"09:00 A.M.",'endTime':'05:00 P.M.'}],
                'Sat':[{'startTime':"09:00 A.M.",'endTime':'05:00 P.M.'}],
            }
        };
        this.fetchAppointment();
        this.inputRef = createRef();
        this.ctc = new CruspoTimeCalculator(9,0,'12-hour');
        this.timeList = this.ctc.getTimeListBasedOnDuration(this.state.duration);
    }

    fetchAppointment = async () =>{
        var response = await appointmentService.getAppointmentById(window.location.href.split('/').pop());
        if(response.ok)
        {   const data = await response.json();
            this.setState({
                isLoading:false,
                appointmentTitle:data.appointmentTitle,
                appointmentDescription:data.appointmentDescription,
                appointmentThumbnail:data.appointmentThumbnail,
                currency:data.currency,
                isPaid:data.isPaid,
                appointmentPrice:data.appointmentPrice,
                timezone:data.timezone,
                hours:data.duration?.hours,
                mins:data.duration?.minutes,
                dateOverride:data.dateOverride
            });
        }else{

        }

    }

   saveChanges = async (type)=>{
       await appointmentService.updateAppointment({
           appointmentId:window.location.href.split('/').pop(),
           appointmentTitle:this.state.appointmentTitle,
           appointmentDescription:this.state.appointmentDescription,
           appointmentThumbnail:this.state.appointmentThumbnail??await uploadFileandGetLink(this.state.image),
           appointmentPrice:this.state.appointmentPrice,
           currency:this.state.currency,
           isPaid:this.state.isPaid,
           duration:this.getDuration(),
           timezone:this.state.timezone,
           schedule:this.state.schedule
       },type);
   }

   getDuration(){
       var hours = 0;
       var mins = 0;
        if(this.state.duration==='custom'){
            if(this.state.durationUnit==='mins'){
                mins=this.state.durationValue;
            }else{
                hours=this.state.durationValue;
                mins=0;
            }
        }else{
            mins = this.state.duration;
        }
       return {
        hours:hours,
        minutes:mins
    }
   }
    openFileDialog = ()=>{
        this.inputRef.current.click();
    }

    handleThumbnailChange = (e)=>{
        this.setState({
            image:e.currentTarget.files[0]
        });
    }

    openDateOverrideCalendar = ()=>{
        this.setState({isDateOverrideCalendarOpen:true});
    }

    closeDateOverrideCalendar = () => {
        this.setState({isDateOverrideCalendarOpen:false});
    }

    dataOverrideChange = ()=>{
        this.setState({showTimePicker:true});
    }
    
    handleDayChange = (timings) =>{
        this.state.schedule[timings.day] = timings.timings
        this.setState({schedule:this.state.schedule});
    }
    addDateOverride = (value) =>{
        this.state.dateOverride.push(value);
        this.setState({dateOverride:[...this.state.dateOverride]})
    }
    render() {
        return (
            this.state.isLoading
            ?
            <div className="loading-center">
                <Loader
                type="TailSpin"
                color="#ff9f1c"
                height="50px"
                width="50px"
                
                />
            </div>
            :<>
            <div className="create-appointment-body">
                <input type="file" style={{display:'none'}} />
                    <div className="create-appointment-body-row">
                        <div className="program-thumbnail-container">
                            {
                               this.state.image||this.state.appointmentThumbnail?<img
                                src={this.state.image?URL.createObjectURL(this.state.image):this.state.appointmentThumbnail}
                                alt="appointment-thumbnail"
                                className="program-thumbnail"
                                />:<div className="flex" style={{width:'350px',height:'200px',borderRadius:'10px',backgroundColor:'#f5f5f5',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                                    <img src="/Images/upload-thumbnail.svg" style={{width:'80px',marginBottom:'20px'}} alt=""/>
                                    <p>Upload thumbnail Image</p>
                                </div>
                            }
                        <div className="edit-thumbnail" onClick={this.openFileDialog}>
                            <input style={{display:'none'}} type="file" accept="image/*" ref={this.inputRef} onChange={this.handleThumbnailChange}/>
                            <img src="/Images/pen.svg" alt="edit" />
                        </div>
                    </div>
                    <ul style={{display:'flex'}}>
                        <li className="save cruspo-appointment-button" onClick={()=>this.saveChanges('save')}>Save Changes</li>
                        <li className="save-and-publish cruspo-appointment-button"onClick={()=>this.saveChanges('save-and-publish')}>Save and Publish</li>
                        <li className="unpublish cruspo-appointment-button" onClick={()=>this.saveChanges('unpublish')}>unpublish</li>
                    </ul>
                </div>
                <div className="edit-appointment-form">
                    <div style={{flexBasis:'45%'}}>
                        <p className="title1">Appointment Title</p> 
                        <input className="cruspo-input" type="text" value={this.state.appointmentTitle} placeholder="Give a title to appointment" onChange={(e)=>this.setState({appointmentTitle:e.currentTarget.value})}/>
                        <p className="title1">Appointment Description</p> 
                        <textarea className="cruspo-textarea"  value={this.state.appointmentDescription} placeholder="Give a Description to appointment" onChange={(e)=>this.setState({appointmentDescription:e.currentTarget.value})}></textarea>
                        <div className="flex space-between mt-20">
                            <div>
                                <p className="title1">Make this a paid Appointment</p>
                                <p className="description1">
                                    This will require your audience to pay for your appointment
                                </p>
                            </div>
                            <label className="cruspo-switch">
                            <input
                                type="checkbox"
                                checked={this.state.isPaid}
                                onClick={(e)=>this.setState({isPaid:e.currentTarget.checked})}
                            />
                            <span className="slider"></span>
                            </label>
                        </div>
                        {
                            this.state.isPaid?
                            <div className="flex mt-20">
                                <select className="cruspo-select mr-10" onChange={(e)=>this.setState({currency:e.currentTarget.value})}>
                                    <option value="">Select Currency</option>
                                    {
                                        currencies.map(c =>{
                                            if(c.name===this.state.currency.name){
                                                return <option value={c._id.$oid} selected>{`${c.fullName} (${c.symbol})`}</option>
                                            }else{
                                                return <option value={c._id.$oid}>{`${c.fullName} (${c.symbol})`}</option>
                                            }
                                        })
                                    }
                                </select>
                                <input type="number" className="cruspo-input" placeholder="Amount" value={this.state.appointmentPrice} onChange={(e)=>this.setState({appointmentPrice:e.currentTarget.value})}/>
                            </div>:<div></div>
                        }
                        <div className="mt-20">
                            <p className="title1">Date Range</p>
                            <p className="description1">Invitees can schedule</p>
                            <div>
                                <div className="flex mt-20" style={{alignItems:'center'}}>
                                    <label class="cruspo-radio-container">
                                        <input type="radio"  name="bookingPolicy" checked value="FIXEDNUMBEROFDAYS" onChange={(e)=>{this.setState({bookingPolicy:e.currentTarget.value})}}/>
                                        <span class="checkmark"></span>
                                    </label>
                                    <div className="flex">
                                        <input className="cruspo-input mr-20" placeholder="days" value={60} style={{flexBasis:'30%'}}/>
                                        <select className="cruspo-select" style={{flexBasis:'70%'}}>
                                            <option>Business Days(mon-fri)</option>
                                            <option>Calendar Days(all days)</option>
                                        </select>
                                    </div>
                                </div>
                                <label class="cruspo-radio-container mt-20">With in a date range
                                    <input type="radio"  name="bookingPolicy" value="DATERANGE" onChange={(e)=>{this.setState({bookingPolicy:e.currentTarget.value})}}/>
                                    <span class="checkmark"></span>
                                </label>
                                {
                                    this.state.bookingPolicy==='DATERANGE'?
                                    <div>
                                    </div>:<div/>
                                }
                                <label class="cruspo-radio-container mt-20">Indefinitely into the future
                                    <input type="radio"  name="bookingPolicy" value="FUTURE" onChange={(e)=>{this.setState({bookingPolicy:e.currentTarget.value})}}/>
                                    <span class="checkmark"></span>
                                </label>
                                
                            </div>
                        </div>
                        <div className="date-override mt-20"> 
                                <p className="title1">Add date overrides</p>
                                <p className="description1">Add dates when your availability changes from your weekly hours</p>
                                    {
                                        this.state.dateOverride.map(d=>{
                                        return  <div className="flex" style={{alignItems:'center'}}>
                                            <DatePicker
                                                multiple="true"
                                                minDate={new Date()}
                                                placeholder="Add a Date override"
                                                // range="true"
                                                calendarPosition="bottom-center"
                                                inputMode="none"
                                                // className="date-override-calendar"
                                                containerClassName="date-override-calendar-container"
                                                onChange={this.dataOverrideChange}
                                                // onClose={}
                                                plugins={[
                                                    <DatePanel />
                                                ]}
                                                className="rmdp-mobile"
                                                editable="true"
                                                inputClass="date-override-input"
                                                />
                                                <div className="">
                                                    <img src="/Images/delete.svg" />
                                                </div>
                                        </div> 
                                    })

                                    }
                                        {
                                            this.state.showTimePicker?
                                            <>
                                            <p className="title1">What hours are you available?</p>
                                            <div className="flex space-between" style={{alignItems:'center'}}>
                                                <select className="cruspo-select">
                                                    {
                                                        this.timeList.map(t=>{
                                                            if(t==='05:00 P.M.'){
                                                                return <option value={t} selected>{t}</option>
                                                            }else{
                                                                return <option value={t}>{t}</option>
                                                            }
                                                        })
                                                    }
                                                </select>
                                                -
                                                <select className="cruspo-select">
                                                        {
                                                            this.timeList.map(t=>{
                                                                return <option value={t}>{t}</option>
                                                            })
                                                        }
                                                    </select>
                                                <img src="/Images/delete.svg" alt="delete" style={{margin:'0 20px'}} onClick={(e)=>{}}/>
                                            </div>
                                            </>
                                            :<div></div>
                                        }
                                        <div>
                                            <div style={{display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'#e5e5e5',padding:'10px'}} onClick={(e)=>{this.addDateOverride(e.currentTarget.value)}}>
                                                <p style={{fontSize:'20px',marginRight:'10px'}}>Add</p>
                                                <img src="/Images/add-member.svg" alt="add" style={{width:'20px'}} />
                                            </div>
                                        </div>
                            </div>

                    </div>
            <div className="schedule-wrapper">
                        <div className="flex">
                            <div className="mr-20">
                                <p className="title1">Time Zone</p>
                                <select className="cruspo-select time-zone-select" onChange={(e)=>{this.setState({timezone:e.currentTarget.value})}}>
                                    {
                                        timeZone.map(t=>{
                                            if(this.state.timezone===t){
                                                return <option value={t} selected>{t}</option>
                                            }else{
                                                return <option value={t}>{t}</option>
                                            }
                                        })
                                    }
                                </select>
                            </div>
                            <div className="">
                                <p className="title1">Duration</p>
                                <select className="cruspo-select time-zone-select" onChange={(e)=>this.setState({duration:e.currentTarget.value})}>
                                        <option value="15" selected>15 min</option>
                                        <option value="30">30 min</option>
                                        <option value="45">45 min</option>
                                        <option value="60">60 min</option>
                                        <option value="custom">Custom</option>
                                </select>
                                {
                                    this.state.duration==='custom'?
                                    <div className="flex mt-10">
                                        <input type="number" className="cruspo-input mr-10" onChange={(e)=>{this.setState({durationValue:e.currentTarget.vlaue})}}/>
                                        <select className="cruspo-select"  onChange={(e)=>{this.setState({durationUnit:e.currentTarget.value})}}>
                                            <option value="mins">mins</option>
                                            <option value="hour">hour</option>
                                        </select>
                                    </div>
                                    :<div></div>
                                }   
                            </div>
                        </div>
                        <hr></hr>
                        <div className="select-hour">
                            <p className="title1">Set your Weekly Hours</p>
                            <DayTimeSetter day="Sun" duration={this.state.duration} defaultValue = {this.state.schedule['Sun']} checked={this.state.schedule['Sun'].length>0?true:false} onChange = {(e)=>this.handleDayChange(e)}/>
                            <DayTimeSetter day="Mon" duration={this.state.duration} defaultValue = {this.state.schedule['Mon']} checked={this.state.schedule['Mon'].length>0?true:false} onChange = {(e)=>this.handleDayChange(e)}/>
                            <DayTimeSetter day="Tue" duration={this.state.duration} defaultValue = {this.state.schedule['Tue']} checked={this.state.schedule['Tue'].length>0?true:false} onChange = {(e)=>this.handleDayChange(e)}/>
                            <DayTimeSetter day="Wed" duration={this.state.duration} defaultValue = {this.state.schedule['Wed']} checked={this.state.schedule['Wed'].length>0?true:false} onChange = {(e)=>this.handleDayChange(e)}/>
                            <DayTimeSetter day="Thu" duration={this.state.duration} defaultValue = {this.state.schedule['Thu']} checked={this.state.schedule['Thu'].length>0?true:false} onChange = {(e)=>this.handleDayChange(e)}/>
                            <DayTimeSetter day="Fri" duration={this.state.duration} defaultValue = {this.state.schedule['Fri']} checked={this.state.schedule['Fri'].length>0?true:false} onChange = {(e)=>this.handleDayChange(e)}/>
                            <DayTimeSetter day="Sat" duration={this.state.duration} defaultValue = {this.state.schedule['Sat']} checked={this.state.schedule['Sat'].length>0?true:false} onChange = {(e)=>this.handleDayChange(e)}/>
                        </div>
            </div>
                </div>
            </div>

            </>
        )
    }
}

const DayTimeSetter = (props)=>{

    const [timingState, settimingState] = useState(props.defaultValue);
    
    const [isActiveState, setisActiveState] = useState(props.checked)
    const ctc = new CruspoTimeCalculator(9,0,'12-hour');
    var timeList = ctc.getTimeListBasedOnDuration(props.duration);
    
    function addTiming(){
        timingState.push(props.defaultValue[0]);
        console.log(timingState);
        settimingState([...timingState]);
        props.onChange({day:props.day,
            timings:timingState});
    }

    function removeTiming(index){
        if(index){
            timingState.splice(index,1);
            settimingState([...timingState]);
            props.onChange({day:props.day,
                timings:timingState});
        }
    }
    
    function addTime(e,index,type){
        console.log(e.currentTarget.value,index,type);
        timingState[index][type]= e.currentTarget.value;
        settimingState([...timingState]);
        console.log(timingState);
        props.onChange({day:props.day,
            timings:timingState});
    }

    function disableDay(e){
        if(!e.currentTarget.checked){
            setisActiveState(e.currentTarget.checked);
            settimingState([]);
            props.onChange({day:props.day,
                timings:timingState});
        }else{
            setisActiveState(e.currentTarget.checked);
            settimingState(props.defaultValue);
        }
    }

    return (
        <div className="day-time-setter" >
                <div style={{display:'flex',flexBasis:'20%',alignItems:'center'}}>
                    <label className="edit-appointment-checkbox-container">{props.day}
                        <input type="checkbox" checked={isActiveState} style={{width:'50px'}} onChange={(e)=>disableDay(e)}/>
                        <span className="edit-appointment-checkbox"></span>
                    </label>
                </div>
                {isActiveState?
                <div style={{flexBasis:'70%'}}>
                    {
                        timingState.map((time,index)=>{
                           return <div className="flex space-between" style={{alignItems:'center'}}>
                                    <select className="cruspo-select time-select"  key={'startTime'+index} onChange={(e)=>addTime(e,index,'startTime')}>
                                        {
                                            timeList.map(t=>{
                                                if(t===time.startTime)
                                                {
                                                    return <option value={t} selected>{t}</option>
                                                }else{
                                                    return <option value={t}>{t}</option>
                                                }
                                            })
                                        }
                                    </select>
                                -
                                <select className="cruspo-select time-select" key={'endTime'+index} onChange={(e)=>addTime(e,index,'endTime')}>
                                        {
                                            timeList.map(t=>{
                                                if(t===time.endTime)
                                                {
                                                    return <option value={t} selected>{t}</option>
                                                }else{
                                                    return <option value={t}>{t}</option>
                                                }                                            
                                            })
                                        }
                                    </select>
                                    {index?<img src="/Images/delete.svg" alt="delete" style={{margin:'0 20px'}} onClick={(e)=>{removeTiming(index)}}/>:<div style={{margin:'0 20px'}}></div>}
                            </div>
                        })
                    }
                </div>:<div>
                    <p className="disabled">Disabled</p>
                </div>
                }
            {
                isActiveState?
                <div style={{flexBasis:'20%',display:'flex',justifyContent:'center',alignItems:'center'}} >
                    <img src="/Images/add-member.svg" alt="add" style={{width:'20px'}} onClick={(e)=>{addTiming()}}/>
                </div>:
                <div></div>
            }
        </div>
    );
}

export default CreateAppointment;
