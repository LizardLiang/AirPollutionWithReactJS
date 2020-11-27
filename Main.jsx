import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'
import { store, setItemEnable, setIndexItem } from './index.js'
import { Footer, Pic_Area } from './Components'

const MapStoreToProps = state => {
    return { data: state.itemList }
}

const MapDispatchToProps = dispatch => {
    return {
        // To initial the game
        setItemEnable:  article => dispatch(setItemEnable(article)),
        // To set specific item to normal status
        setIndexItem:   article => dispatch(setIndexItem(article))
      }   
}

class EndWindow extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const Visibility = this.props.visible === true ? 'visible' : 'hidden'
        return(
            <div id="message_box" class="msg_b" style={{visibility: Visibility}}>
                <span>{this.props.text}</span>
            </div>
        )
    }
}

class MainView extends Component {
    constructor(props){
        super(props)
        this.state = {
            isPlaying:  false,                                  // Identify game status
            remainTime: 2                                       // Keep remain time
        }
        this.TotalTime      = 1 * 60 * 1000                     // How much time can user play
        this.timer          = 0                                 // Keep timer ID
        this.ElapseTime     = '1:00'                            // This is for Timer label
        this.setPlayStatus  = this.setPlayStatus.bind(this)     // Set game status
        this.startTimer     = this.startTimer.bind(this)        // Start the game
        this.TimeOutFunc    = this.TimeOutFunc.bind(this)
        this.ItemCheck      = 0                                 // Keep how many item is click
        this.EndWinVisible  = false                             // Set end indo window visibility
        this.EndWinText     = 'Congratulation'                  // Set end info window text 
    }

    changeItemStatus(obj){
        this.props.setIndexItem(obj)
        this.ItemCheck++
        if (this.ItemCheck >= 5 ){
            clearInterval(this.timer)
            this.setState({isPlaying: false})
            this.EndWinText     = 'Congratulation'
            this.EndWinVisible = true
            this.ElapseTime     = '1:00'
        }
    }

    CreateRandomArray(){
        let ranArray = []
        while(ranArray.length < 5){
            let rannum = Math.floor(Math.random() * Math.floor(8))
            if(!ranArray.includes(rannum))
                ranArray.push(rannum)
        }
        let resArray = []
        for(let i = 0; i < 8; i++){
            if(ranArray.includes(i)){
                resArray[i] = true
            }
            else{
                resArray[i] = false
            }
        }
        this.props.setItemEnable(resArray)
    }

    TimeToString(time){
        // Translate seconds to string
        time = time / 1000
        let min = Math.floor(time / 60)
        let sec = time % 60

        if (sec < 10){
            // Keep seconds to two digits
            sec = '0' + sec
        }
        this.ElapseTime = min + ':' + sec
    }

    TimeOutFunc(){
        this.EndWinText = 'Time Out'
        this.EndWinVisible = true
        clearInterval(this.timer)
        this.setState({isPlaying: false})
    }

    CountDownTimer(){
        // Count remain time
        let sec = this.state.remainTime - 1000
        this.setState({remainTime: sec})
        this.TimeToString(sec)
        if (sec <= 0){
            this.TimeOutFunc()
        }
    }

    InitialGame(){
        this.ElapseTime     = '1:00'
        this.EndWinVisible = false
        this.ItemCheck = 0
    }

    startTimer(){
        this.InitialGame()
        this.CreateRandomArray()
        this.setState({remainTime: this.TotalTime})
        this.timer = setInterval(
            // when timeout cut a time
            function(){
                this.CountDownTimer()
            }.bind(this), 
            1000
        )
    }

    setPlayStatus(){
        // Set Game Status
        if (this.state.isPlaying){
            clearInterval(this.timer)
            this.setState({isPlaying: false})
        }
        else{
            this.setState({isPlaying: true})
            this.startTimer()
        }
    }

    render(){
        const Styles = {
            MainContainer:{
                position:           'relative',
                backgroundImage:    'url("./image/room_0.jpg")',
                width:              '100vw',
                maxWidth:           '1150px',
                height:             '100vh',
                maxHeight:          '920px',
                backgroundSize:     '100% 100%',
                backgroundRepeat:   'no-repeat',
                overflow:           'hidden'
            }
        }
        return(
            <div style={Styles.MainContainer}>
                <Pic_Area   ItemList={this.props.data} 
                            setIndexItem={this.changeItemStatus.bind(this)}/>
                <Footer setPlay={this.setPlayStatus} isPlay={this.state.isPlaying} 
                        remainTime={this.ElapseTime} Score={this.ItemCheck}/>
                <EndWindow  visible={this.EndWinVisible} text={this.EndWinText}/>
            </div>
        )
    }
}

const MainWithState = connect(MapStoreToProps, MapDispatchToProps)(MainView)

ReactDOM.render(
    <Provider store={store}>
        <MainWithState/>
    </Provider>, document.getElementById('root'))