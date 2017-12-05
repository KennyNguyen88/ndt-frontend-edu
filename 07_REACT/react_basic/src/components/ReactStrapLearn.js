import React, {Component} from 'react';
import { Button,ButtonGroup } from 'reactstrap';
/* ALERT */
/*
class ReactStrapLearn extends Component{

    constructor(props){
        super(props);
        this.state = {visible: true};
    }

    onDismiss = (e) => {
      e.preventDefault();
      this.setState(prevState => ({visible: false}));
    };

    render(){
        return(
            <Alert color="success" isOpen={this.state.visible} toggle={this.onDismiss}>
                <h4 className="alert-heading">Well done! </h4>
                <p> Some paragraph </p>
                <hr/>
                <strong>This is a success alert</strong>
            </Alert>
        );
    }
}
*/

/* BADGE */
/*
class ReactStrapLearn extends Component{
    render(){
        return(
            <div>
                <h1>Heading <Badge color="success">badge</Badge> </h1>
                <h6>Heading <Badge color="success">badge</Badge> </h6>
                <Badge color="danger" pill>success</Badge>
                <button>Notifications<Badge color="primary" pill>4</Badge></button>
            </div>
        );
    }
}
*/

/* BREADCRUMB */
/*
class ReactStrapLearn extends Component{
    render(){
        return(
            <div>
                <Breadcrumb>
                    <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                    <BreadcrumbItem><a href="#">Library</a></BreadcrumbItem>
                    <BreadcrumbItem active>Data</BreadcrumbItem>
                </Breadcrumb>

                <Breadcrumb tag="nav">
                    <BreadcrumbItem tag="a" href="#">Home</BreadcrumbItem>
                    <BreadcrumbItem tag="a" href="#">Library</BreadcrumbItem>
                    <BreadcrumbItem tag="a" href="#">Data</BreadcrumbItem>
                    <BreadcrumbItem active tag="span">Bootstrap</BreadcrumbItem>
                </Breadcrumb>
            </div>
        );
    }
}
*/
/* Button */
/*
class ReactStrapLearn extends Component{
    render(){
        return(
            <div>
                <Button color="success">success</Button>{' '}
                <Button outline color="success">success</Button>{' '}
                <Button color="primary" size="lg">Large Button</Button>{' '}
                <Button color="primary" size="lg" block>Block level button</Button>
                <Button color="primary" size="lg" disabled>Disable button</Button>{' '}
            </div>
        );
    }
}
*/

class ReactStrapLearn extends Component{
    constructor (props) {
        super(props);

        this.state = { cSelected: [] };

        this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
        this.onCheckboxBtnClick = this.onCheckboxBtnClick.bind(this);
    }

    onRadioBtnClick(rSelected) {
        this.setState({ rSelected });
    }

    onCheckboxBtnClick(selected) {
        const index = this.state.cSelected.indexOf(selected);
        if (index < 0) {
            this.state.cSelected.push(selected);
        } else {
            this.state.cSelected.splice(index, 1);
        }
        this.setState({ cSelected: [...this.state.cSelected] });
    }
    render(){
        return(
            <div>
                <h5>Radio Buttons</h5>
                <ButtonGroup>
                    <Button color="primary" onClick={() => this.onRadioBtnClick(1)} active={this.state.rSelected === 1}>One</Button>
                    <Button color="primary" onClick={() => this.onRadioBtnClick(2)} active={this.state.rSelected === 2}>Two</Button>
                    <Button color="primary" onClick={() => this.onRadioBtnClick(3)} active={this.state.rSelected === 3}>Three</Button>
                </ButtonGroup>
                <p>Selected: {this.state.rSelected}</p>

                <h5>Checkbox Buttons</h5>
                <ButtonGroup>
                    <Button color="primary" onClick={() => this.onCheckboxBtnClick(1)} active={this.state.cSelected.includes(1)}>One</Button>
                    <Button color="primary" onClick={() => this.onCheckboxBtnClick(2)} active={this.state.cSelected.includes(2)}>Two</Button>
                    <Button color="primary" onClick={() => this.onCheckboxBtnClick(3)} active={this.state.cSelected.includes(3)}>Three</Button>
                </ButtonGroup>
                <p>Selected: {JSON.stringify(this.state.cSelected)}</p>
            </div>
        );
    }
}

export default ReactStrapLearn;