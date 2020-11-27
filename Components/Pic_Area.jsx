import React, { Component } from 'react'
import { store, setIndexItem } from '../index.js'
import { Provider, connect } from 'react-redux'

class Sunk extends Component    {
    constructor(props){
        super(props)
        this.ImgSrc = ["image/sunk_1.png", '']
    }
    clickCheck(){
        if(this.props.enabled){
            let obj = {index: 0, value: false}
            this.props.setIndexItem(obj)
        }
    }
    render(){
        let BaseClass   = "r_sunk"
        let CurrClass   = this.props.enabled === true ? BaseClass + " hvr-ripple-out" : BaseClass
        let visible         = this.props.enabled === true ? 'visible'    : 'hidden'
        return(
            <div class={CurrClass} onClick={this.clickCheck.bind(this)}>
                <img id="sunk" class="r_sunk no_event" style={{visibility: visible}} 
                     src="image/sunk_1.png"/>
            </div>
        )
    }
}

class Stove extends Component{
    clickCheck(){
        if(this.props.enabled){
            let obj = {index: 1, value: false}
            this.props.setIndexItem(obj)
        }
    }
    render(){
        let BaseClass = "r_stove"
        let CurrClass = this.props.enabled === true ? BaseClass + " hvr-ripple-out" : BaseClass
        let visible = this.props.enabled === true ? "visible" : 'hidden'
        return(
            <div class={CurrClass} onClick={this.clickCheck.bind(this)}>
                <img id="stove" class="r_stove no_event" src="image/stove_1.png"/>
                <img id="smoke" class="r_smoke no_event" src="image/smoke.png" 
                                style={{visibility: visible}}/>
            </div>
        )
    }
}

class Paint extends Component{
    clickCheck(){
        if(this.props.enabled){
            let obj = {index: 2, value: false}
            this.props.setIndexItem(obj)
        }
    }

    render(){
        let BaseClass = "r_paint"
        let CurrClass = this.props.enabled === true ? BaseClass + " hvr-ripple-out" : BaseClass
        let visible = this.props.enabled === true ? 'visible' : 'hidden'
        return(
            <div class={CurrClass} onClick={this.clickCheck.bind(this)}>
                <img id="paint" class="r_paint no_event" src="image/paint.png" 
                                style={{visibility: visible}}/>
            </div>
        )
    }
}

class Hood extends  Component{
    constructor(props){
        super(props)
        this.ImgSrc = ['image/hood_1.png', 'image/hood_0.png']
    }
    clickCheck(){
        if(this.props.enabled){
            let obj = {index: 1, value: false}
            this.props.setIndexItem(obj)
        }
    }
    render(){
        let BaseClass = "r_hood"
        let CurrClass = this.props.enabled === true ? BaseClass + " hvr-ripple-out" : BaseClass
        let src = this.props.enabled === true ? this.ImgSrc[0] : this.ImgSrc[1]
        return(
            <div class={CurrClass} onClick={this.clickCheck.bind(this)}>
                <img id="hood" class="r_hood no_event" src={src} />
            </div>
        )
    }
}

class WindowPic extends Component{
    constructor(props){
        super(props)
        this.ImgSrc = ['image/win_1.png', 'image/win_0.png']
    }
    render(){
        let BaseClass = "r_win"
        let Src = this.props.enabled === true ? this.ImgSrc[0]  :   this.ImgSrc[1]
        return(
            <div class={BaseClass}>
                <img id="win" class="r_win no_event" src={Src} />
            </div>
        )
    }
}

class Cleaner extends Component{
    clickCheck(){
        if(this.props.enabled){
            let obj = {index: 3, value: false}
            this.props.setIndexItem(obj)
        }
    }
    render(){
        let BaseClass = "r_clean"
        let CurrClass = this.props.enabled === true ? BaseClass + " hvr-ripple-out" : BaseClass
        let Display = this.props.enabled === true ? 'block' : 'none'
        return(
            <div    class={CurrClass} onClick={this.clickCheck.bind(this)} 
                    style={{display: Display}}>
                <img id='cleaner' class='r_cleaner_1 cleaner_font' src='image/cleaner_bubble.png'/>
                <img id='cleaner' class='r_cleaner_2 cleaner_font' src='image/cleaner_bubble.png'/>
                <img id='cleaner' class='r_cleaner_3 cleaner_font' src='image/cleaner_bubble.png'/>
            </div>
        )
    }
}

class Carpet extends Component{
    constructor(props){
        super(props)
        this.ImgSrc = ['image/carpet_1.png', 'image/carpet_0.png']
    }
    clickCheck(){
        if(this.props.enabled){
            let obj = {index: 4, value: false}
            this.props.setIndexItem(obj)
        }
    }
    render(){
        let BaseClass = "d_c_b"
        let CurrClass = this.props.enabled === true ? BaseClass + " hvr-ripple-out" : BaseClass
        let Src = this.props.enabled === true ? this.ImgSrc[0] : this.ImgSrc[1]
        return(
            <div class={CurrClass} onClick={this.clickCheck.bind(this)}>
                <img id="carpet" class="r_carpet no_event" src={Src} />
            </div>
        )
    }
}

class Spray extends Component{
    clickCheck(){
        if(this.props.enabled){
            let obj = {index: 5, value: false}
            this.props.setIndexItem(obj)
        }
    }
    render(){
        let BaseClass = "r_spray_1"
        let CurrClass = this.props.enabled === true ? BaseClass + " hvr-ripple-out" : BaseClass
        let Display = this.props.enabled === true ? 'block' : 'none'
        return(
            <div    class={CurrClass} onClick={this.clickCheck.bind(this)} 
                    style={{display: Display}}>
                <img id="spray" class="r_spray_1 no_event" src="image/spray_1.png" />
            </div>
        )
    }
}

class BookShelf extends Component{
    clickCheck(){
        if(this.props.enabled){
            let obj = {index: 6, value: false}
            this.props.setIndexItem(obj)
        }
    }
    render(){
        let BaseClass = "d_s_b"
        let CurrClass = this.props.enabled === true ? BaseClass + " hvr-ripple-out" : BaseClass
        let Display = this.props.enabled === true ? 'block' : 'none'
        return(
            <div    class={CurrClass} onClick={this.clickCheck.bind(this)}
                    style={{display: Display}}>
                <img id="s_b_1" class="s_b_1 no_event" src="image/new_smoke.png"/>
                <img id="s_b_2" class="s_b_2 hcho_font_s no_event" src="image/hcho.png" />
                <img id="s_b_3" class="s_b_3 hcho_font_s no_event" src="image/hcho.png" />
            </div>
        )
    }
}

class Floor extends Component{
    clickCheck(){
        if(this.props.enabled){
            let obj = {index: 7, value: false}
            this.props.setIndexItem(obj)
        }
    }
    render(){
        let BaseClass = "d_f_b"
        let CurrClass = this.props.enabled === true ? BaseClass + " hvr-ripple-out" : BaseClass
        let Display = this.props.enabled === true ? 'block' : 'none'
        return(
            <div    class={CurrClass} onClick={this.clickCheck.bind(this)}
                    style={{display: Display}}>
                <img id="f_b_1" class="f_b_1 no_event" src="image/new_smoke.png" />
                <img id="f_b_2" class="f_b_2 hcho_font_f no_event" src="image/hcho.png" />
                <img id="f_b_3" class="f_b_3 hcho_font_f no_event" src="image/hcho.png" />
            </div>
        )
    }
}

class Pic_Area extends Component    {
    constructor(props){
        super(props)
        this.ImgList = []
    }

    setWindowEnable(){
        if(this.props.ItemList[2] || this.props.ItemList[3] || this.props.ItemList[7]){
            return true
        }
        else{
            return false
        }
    }

    render(){
        const Styles = {
            divContainer:   {
                width:      '100%',
                height:     '90%',
            }
        }
        const WindowEnable = this.setWindowEnable()
        return(
            <div style={Styles.divContainer}>
                <Sunk       enabled={this.props.ItemList[0]}  
                            setIndexItem={this.props.setIndexItem}/>
                <Stove      enabled={this.props.ItemList[1]}  
                            setIndexItem={this.props.setIndexItem}/>
                <Paint      enabled={this.props.ItemList[2]}  
                            setIndexItem={this.props.setIndexItem}/>
                <Hood       enabled={this.props.ItemList[1]}  
                            setIndexItem={this.props.setIndexItem}/>
                <WindowPic  enabled={WindowEnable}/>
                <Cleaner    enabled={this.props.ItemList[3]}  
                            setIndexItem={this.props.setIndexItem}/>
                <Carpet     enabled={this.props.ItemList[4]}  
                            setIndexItem={this.props.setIndexItem}/>
                <Spray      enabled={this.props.ItemList[5]}  
                            setIndexItem={this.props.setIndexItem}/>
                <BookShelf  enabled={this.props.ItemList[6]}  
                            setIndexItem={this.props.setIndexItem}/>
                <Floor      enabled={this.props.ItemList[7]}  
                            setIndexItem={this.props.setIndexItem}/>
                <img id="table" class="r_table no_event" src="image/table.png" />
                <img id="chair" class="r_chair no_event" src="image/chair.png" />
                <img id="d_bar" class="r_bar" src="image/bar_red.png"/>
            </div>
        )
    }
}

export  { Pic_Area }