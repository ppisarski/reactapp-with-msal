import { connect } from 'react-redux';
import config from '../config';

class GraphService {
    constructor(props) {
        this.graphUrl = config.azure.graph.endpoint;
    }

    getUserInfo = async (token = this.props.accessToken) => {
        // const headers = new Headers({ Authorization: `Bearer ${token}` });
        const options = {
            method: "GET",
            headers: new Headers({
                "Authorization": `Bearer ${token}`
            }).entries(),
            credentials: "same-origin"
        };
        return fetch(`${this.graphUrl}/me`, options)
            .then(response => response.json())
            .catch(response => {
                throw new Error(response.text());
            });
    };

    getUserPhoto = async (token = this.props.accessToken) => {
        const headers = new Headers({ Authorization: `Bearer ${token}` });
        const options = {
            headers
        };
        return fetch(`${this.graphUrl}/me/photos/240x240/$value`, options)
            .then(response => response.blob())
            .catch(response => {
                throw new Error(response.text());
            });
    };
}

const mapStateToProps = state => {
    return {
        accessToken: state.authentication.accessToken,
        state: state.authentication.state,
        account: state.authentication.account,
    };
}

export default connect(mapStateToProps)(GraphService);
