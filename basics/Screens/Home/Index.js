import React, { Component } from 'react'
import { Text, View, FlatList, StyleSheet, SafeAreaView } from 'react-native'
import { connect } from 'react-redux';
import { fetchDataAll } from '../../actions/app';
import User from './User';

const RenderUser = ({ item:{name,email} }) => <User name={name} email ={email} />
   

export class Index extends Component {

    componentDidMount() {
        const { fetchDataAll } = this.props;
        fetchDataAll()
    }
    render() {
        const { data } = this.props;
        if (data) {
            console.log(data)
        }
        return (
            <SafeAreaView>
                <View style={styles.container}>
                    <Text style={{ fontSize: 40 }}>

                    </Text>
                    <FlatList
                        data={data}
                        renderItem={RenderUser}
                    />
                </View>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
const mapStateToPrps = (state) => {
    return {
        data: state.app.data
    }
}
const mapDispatchToProps = {
    fetchDataAll
}


export default connect(mapStateToPrps, mapDispatchToProps)(Index);
