import React, {Component} from "react";
import './Registration.css'

export default class Registration extends Component {

    // const [name,setName] = useState('');
    // const [surname,setSurname] = useState('');
    // const [email,setEmail] = useState('');
    // const [password,setPassword] = useState('');
    // const [list,setList] = useState({
    //     FirstName:name,
    //     pass:password
    // })

    state = {
        firstName:'',
        lastName:'',
        password:'',
        email:'',
        passwordSigIn:'',
        emailSigIn:'',
        classname1:'',
        classname2:'',
        arr:[],
    }

    handleChange = (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit = ()=>{
        let obj = {
            id:Date.now(),
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            password:this.state.password,
            email:this.state.email
        }
        this.state.arr.push(obj)
        console.log(this.state.arr)
        this.setState({
            firstName:'',
            lastName:'',
            password:'',
            email:'',
        })
    }

    handleSubmit1 = ()=>{
         if (this.state.emailSigIn.trim()==='' && this.state.passwordSigIn.trim()==='') {
             this.setState({
                 classname1:'warning',
                 classname2:'warning'
             })
             alert('Enter email and password')
        }else if(this.state.emailSigIn.trim()===''){
                this.setState({
                    classname1:'warning',
                    classname2:''
                })
             alert('Enter email')
        }
        else if(this.state.passwordSigIn.trim()===''){
             this.setState({
                 classname2:'warning',
                 classname1:''
             })
             alert('Enter password')
        }else{
            this.state.arr.map((e,i)=>{
                if (e.email===this.state.emailSigIn && e.password===this.state.passwordSigIn){
                    alert('welcome')
                    this.setState({
                        classname1:'',
                        classname2:'',
                        emailSigIn:'',
                        passwordSigIn:''
                    })
                } else if (e.email===this.state.emailSigIn){
                    alert('invalid password')
                    this.setState({
                        classname1:''
                    })
                }else if (e.password===this.state.passwordSigIn) {
                    alert('invalid email')
                    this.setState({
                        classname2:''
                    })
                }else{
                    alert('invalid email and password ')
                    this.setState({
                        classname1:'warning',
                        classname2:'warning'
                    })
                }
            })
        }
    }

    render() {
        return (
            <div className='container-reg'>
                <div >
                    <input type='text' name='firstName' value={this.state.firstName} placeholder={'firstName'} onChange={this.handleChange}/>
                    <input type='text' name='lastName' value={this.state.lastName} placeholder={'lastName'} onChange={this.handleChange}/>
                    <input type='email' name='email' value={this.state.email} placeholder={'email'} onChange={this.handleChange}/>
                    <input type='password' name='password' value={this.state.password} placeholder={'password'} onChange={this.handleChange}/>
                    <input type='submit' value='sign up' onClick={this.handleSubmit}
                           disabled={(this.state.firstName && this.state.lastName && this.state.password && this.state.email).trim().length>0?false:true}
                    />
                </div>
                <div>
                    <input className={this.state.classname1} type='email' name='emailSigIn' value={this.state.emailSigIn} placeholder={'email'} onChange={this.handleChange}/>
                    <input className={this.state.classname2} type='password' name='passwordSigIn' value={this.state.passwordSigIn} placeholder={'password'} onChange={this.handleChange}/>
                    <input type='submit' value='sign in' onClick={this.handleSubmit1}/>
                </div>
            </div>
        )
    }
}