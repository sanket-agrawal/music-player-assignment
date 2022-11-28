import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import Menu from '../Menu'
import Playlists from '../Playlists'
import {getPlaylists} from '../../API'
import './styles.css'

const Sidebar = () => {
  const [playlists, setPlaylists] = useState<Array<string>>([])
  const [playlistsLoading, setPlaylistsLoading] = useState(true)

  useEffect(() => {
    getPlaylists().then(res => {
      setPlaylists(res)
      setPlaylistsLoading(false)
    })
  }, [])

  return (
    <>
      <aside className="sidebar">
        <Link to="/">
          <svg
            className="sidebar__logo"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0 3c-3.866 0-7 3.134-7 7s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7zm3.21 10.096c-.125.207-.394.271-.6.146-1.643-1.005-3.712-1.232-6.149-.675-.235.053-.469-.094-.522-.328-.054-.235.092-.469.328-.523 2.666-.609 4.954-.347 6.799.78.205.126.27.395.144.6zm.857-1.906c-.158.257-.494.338-.751.18-1.881-1.156-4.75-1.491-6.975-.816-.289.088-.594-.075-.681-.363-.087-.289.076-.593.364-.681 2.542-.771 5.703-.398 7.863.93.257.158.338.494.18.75zm.074-1.984c-2.257-1.34-5.979-1.464-8.133-.81-.345.105-.711-.09-.816-.436-.105-.346.09-.712.436-.817 2.473-.75 6.583-.605 9.181.937.311.184.413.586.229.897-.185.311-.587.413-.897.229z" />
          </svg>
        </Link>
        <Menu />
        <hr className="sidebar__separator" />
        <Playlists playlists={playlists} loading={playlistsLoading} />
      </aside>
      <aside className="sidebar-mobile">
        <Link to="/">
        <svg
            className="sidebar__logo"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            
            <path d="M 10 10 H 90 V 90 H 10 L 10 10"></path>
          </svg>
        </Link>
      </aside>
    </>
  )
}

export default Sidebar
