import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';
import TodoItem from './components/TodoItem';


const todosdata = [
  {
    id: 1,
    name: "HomeTask"
  },
  {
    id: 2,
    name: "Wash Car"
  },
  {
    id: 3,
    name: "Meditation"
  }
]

export default function App() {

  const [todos, setTodos] = useState(todosdata)
  const [todoName, setTodoName] = useState('')

  const handleAdd = () => {
    if (!todoName.trim()) {
      alert("todoname bos ola bilmez")
      return
    }
    let obj = {
      id: Math.random(10000),
      name: todoName
    }
    setTodos([...todos, obj])
    setTodoName('')
  }

  const handleDelete = (id) => {
    const updatedTodos = todos.filter(todo => todo.id != id)
    setTodos(updatedTodos)
  }

  return (
    <SafeAreaView>
      <View>
        <View style={{ padding: 10, borderColor: "black", borderWidth: 1, marginHorizontal: 16, }}>
          <TextInput maxLength={100} value={todoName} multiline onChangeText={setTodoName} />
        </View>
        <Button title='add' color={'blue'} onPress={handleAdd} />
      </View>

      <ScrollView>
        <View>
          {
            todos.map((todo) => (
              <TodoItem key={todo.id} id={todo.id} name={todo.name} onDelete={handleDelete} />
            ))
          }
        </View>
      </ScrollView>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
