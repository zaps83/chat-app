import { ChatEngine } from 'react-chat-engine'
import './App.css'
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm'


const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />
    return (
        <ChatEngine
            height='100vh'
            projectID='cb98245d-8138-4181-a9fa-f009d7d4c73c'
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App