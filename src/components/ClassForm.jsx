import React, { Component } from "react";


class ClassForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: [{
                name: "Frank",
                Email: "i just want to florish in coding"
            },

            {
                name: "Osei",
                Email: "i just want to florish in coding"
            },
            ],

            name: "",
            Email: "",
        }
    }

handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value})
}
handleSubmit = (e) => {
    e.preventDefault();
    const newPerson ={
        name: this.state.name,
        Email:this.state.Email
    }
    this.setState({
        persons: [...this.state.persons, newPerson],
        name:"",
        Email: ""
    })


}

    render() {
        console.log(this.state.persons);

        return (
            <section style={{ margin: "2rem" }}>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Name</label>  
                        <br />
                        <input type="text"
                            name="name" value={this.state.name} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label>Email</label>
                        <br />
                        <input
                            name="Email" type="email" value={this.state.Email} onChange={this.handleChange}/>
                        <br />
                        <label>Password</label>
                        <br />
                        <input
                            name="text" type="password" value={this.state.Email} onChange={this.handleChange}/>
                        <br />
                        <button>Submit</button>
                    </div>
                </form>
                {this.state.persons.map((item, index) => {
                    return (
                        <div key={index}>
                            <h4>Name: {item.name}</h4>
                            <p>{item.Email}</p>
                            <hr />
                        </div>
                    )
                })}

            </section>
        );
    }
}

export default ClassForm;