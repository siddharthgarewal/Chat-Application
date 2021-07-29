import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {
    return (
        <ChatEngine
            height="100vh"
            projectID="d5946b8c-f6c9-42e1-8681-7a5df4a305ba"
            userName="Siddharth"
            userSecret="12345"
            renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App;