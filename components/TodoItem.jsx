import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TodoItem = (props) => {

    const { onDelete, item } = props
    return (
        <View style={{ padding: 10, marginBottom: 5, backgroundColor: "#e3e3e3", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <Text>{item.name}</Text>
            <Button title='Delete' color={"red"} onPress={() => onDelete(item.id)} />
        </View>
    )
}

export default TodoItem

const styles = StyleSheet.create({})