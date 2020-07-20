import React, { Component } from "react";
import { withTranslation, Trans } from 'react-i18next';
import { connect } from "react-redux";

class Login extends Component {

    changeLanguage = () => {
        this.props.i18n.changeLanguage('hi');
    }

    render() {
        const { t, i18n } = this.props;

        console.log("Props are", this.props);
        console.log("UsuseTranslatione", this.props, t, i18n)
        return (
            <div onClick={this.changeLanguage}>
                {t("Login")}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default withTranslation('translations')(connect(mapStateToProps)(Login));