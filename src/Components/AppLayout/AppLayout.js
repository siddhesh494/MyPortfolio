

// import Header from "../Headers/Headers"
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import '../../App.css'
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';

const AppLayout = () => {

  useEffect(() => {
		createChat({
			webhookUrl: 'https://siddhesh.app.n8n.cloud/webhook/b11ba312-fa8d-438a-b2cd-77bafae88a8d/chat',
      initialMessages: [
        'Hi there! 👋',
        'What do you want to know about Siddhesh?',
      ]
		});
	}, []);

  return (
    <div className=''>
      {/* <Header /> */}
      <Outlet />
    </div>
  )
}

export default AppLayout