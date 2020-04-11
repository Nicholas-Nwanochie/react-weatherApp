import React, { Component } from 'react'
import ReactDom from 'react-dom'
import Seasons from './components/seasons'
import Spinner from './components/spinner'


// const App2 = ()=>{
//     window.navigator.geolocation.getCurrentPosition((position) => 
//         console.log(position),
//         // failure callback
//       (err) => console.log(err)
//       )
//     return (
//         <div>
//            Latitude:
//         </div>
//     )
// };


class App2 extends Component {
    // constructor(props) {
    //     super(props)
    //     // this.state={Lat: null, log:null, error:""}
 

    // }

    state = { lat: null, error: "" }
        componentDidMount(){


            window.navigator.geolocation.getCurrentPosition((position) => {

                this.setState({ lat: position.coords.latitude })
                // console.log(positiom   },
                // failure callback
                (err) => {
                    this.setState({ error: err.message });
                }
            )
        }
        
 renderContent(){



     if (this.state.error && !this.state.lat) {
         return <> Error:{this.state.error} </>

     }
     if (this.state.lat && !this.state.error) {
         return <>
             <Seasons lat={this.state.lat} />
             {/* Latitude:{this.state.Lat}
            <br></br>
            Longitude:{this.state.log} */}
         </>
     } else {
         return (
             <>
                 <Spinner message="Please accept message request" />
             </>
         )

 }
}



  render() {

    
      return(
          <div className="border red">
              {this.renderContent()}
          </div>
      )
           
          
           

    
    
  
}
}




export default App2
