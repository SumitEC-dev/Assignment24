import React from 'react';

class Calculator extends React.Component
{
    constructor()
    {
        super();
        this.state={ scale:'c',
                     temp:0}
    }

 celsiusValue=(event)=>
 {
    this.setState({
        scale:'c', temp:event.target.value
    })
 }  
 
 fahrenheitValue=(event)=>
 {
    this.setState({
        scale:'f', temp:event.target.value
    })
 }
    render()
    {
        const temp=this.state.temp;
        const scale=this.state.scale;
        const celsius=scale==='f' ? ((temp-32)*5)/9 : temp;
        const fahrenheit=scale==='c' ? ((temp *9)/5)+32 :temp;
        return(
            <React.Fragment>
                <section className='mt-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className='card '>
                                <div className="card-body bg-dark text-center rounded-3 ">
                                <input value={celsius} onChange={this.celsiusValue}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className='card'>
                                <div className="card-body bg-success text-center rounded-3">
                                <input value={fahrenheit} onChange={this.fahrenheitValue}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Calculator;