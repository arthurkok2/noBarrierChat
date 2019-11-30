import React, { Component } from "react";
import LanguageSelector from "./LanguageSelector";
import SubmitButton from "./SubmitButton";
import firebase from "firebase";

class SettingsPage extends Component {

    constructor() {
        super();
        this.state = {
            language: "",
            currentLanguage: "English"
        }
    }

    componentDidMount() {
        
        // Getting the user current language when the settings button is clicked

        firebase.database().ref(`${this.props.userUid}/settings/language`).once("value").then((snapshot) => {
            const currentLanguage = this.props.languages.filter((languageObject) => {
                
                return languageObject.code === snapshot.val()
            })
            console.log(currentLanguage)
            this.setState({
                currentLanguage: currentLanguage[0].name
            })
        })
    }

    // Event to handle change on the select selection element

    languagesSelection = (event) => {
        this.setState({
            language: event.target.value
            
        })
        console.log(event.target.value)
    }

    // Funtion to apply changes to firebase database

    applyChange = () => {
        firebase.database().ref(`${this.props.userUid}/settings/`).update({
            language: this.state.language
        });
    }

    render() {
        return (
            <div className="settingsPage">
                <button className="close" onClick={this.props.closeSettings}><i class="fas fa-times-circle"></i></button>
                <h2>Settings</h2>
                <p>Current language is set to: {this.state.currentLanguage}</p>
                <p>Changing the language wont translate your old messages, only new messages will be recieved in the new selected language.</p>
                <form action="" onSubmit={this.applyChange}>
                    <LanguageSelector function={this.languagesSelection} languages={this.props.languages} />
                    <SubmitButton label="Apply change"/>
                </form>
            </div>
        )
        
    }
}

export default SettingsPage