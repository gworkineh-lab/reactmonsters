import React, { Component } from 'react';

const FriendContext = React.createContext();

export default class Friend extends Component {

    state = {
        friends: [],
        name: '',
        url: '',
        relation: '',
        input: ''
    };

    filterFriends = (friends) => {
        let { friends, name, url, relation, input } = this.state;
        // to get friend

        if (input === " ") {
            tempFriends = friends.filter(friend => friend);
        }
        this.setState({
            friends: tempFriends
        });
    }

    render() {
        return (
            <RoomContext.Provider
                value={{
                    ...this.state,
                    getFriend: this.getFriend,
                    handleChange: this.handleChange
                }}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}
const FriendConsumer = FriendContext.Consumer;

export function withRoomConsumer(Component) {
    return function ConsumerWrapper(props) {
        return <FriendConsumer>
            {value => <Component {...props} context={value} />}
        </FriendConsumer>
    }
}
export { RoomContext, RoomProvider, RoomConsumer };





