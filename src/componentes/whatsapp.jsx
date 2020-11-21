import React from 'react'
import {makeStyles} from '@material-ui/styles'
import Link from '@material-ui/core/Link';


const useStyle=makeStyles({   

        
    whats:{
    height: '89px',
    position: 'fixed',
    bottom: '8px',
    right: '60px',
    zIndex:'2'    
  
    }
  



})


const Whatsapp = () => {

    const clases=useStyle();
    return (
        <div >
            <Link href="https://api.whatsapp.com/send?phone=56976226068&text=Hola,me gustaria hacer una consulta " target="_blank" >
            <img className={clases.whats} src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGxpbmVhckdyYWRpZW50IGlkPSJEZWdyYWRhZG9fc2luX25vbWJyZV8xNyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIyOS4zNCIgeDI9IjQ5MC45OTciIHkxPSIyNTQuODExIiB5Mj0iMjU0LjgxMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjNjJkNDcwIi8+PHN0b3Agb2Zmc2V0PSIuMjgyNyIgc3RvcC1jb2xvcj0iIzU3Y2Q2NyIvPjxzdG9wIG9mZnNldD0iLjc4NTIiIHN0b3AtY29sb3I9IiMzOGJjNGYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMyOWIzNDMiLz48L2xpbmVhckdyYWRpZW50PjxyYWRpYWxHcmFkaWVudCBpZD0icmFkaWFsLWdyYWRpZW50IiBjeD0iMjY5LjY0MiIgY3k9IjMyNC44MTIiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoLjc2NSAtLjY0NCAuNDg5IC41OCAtOTUuMzA1IDMxMC4wMDMpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgcj0iMjcwLjUzNCI+PHN0b3Agb2Zmc2V0PSIwIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9IjAiLz48L3JhZGlhbEdyYWRpZW50PjxyYWRpYWxHcmFkaWVudCBpZD0icmFkaWFsLWdyYWRpZW50LTIiIGN4PSIyMTUuNzc1IiBjeT0iMTQ5LjM1MiIgZng9IjI2Ni41NDkiIGZ5PSIyOTcuNTI4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgcj0iMjE5LjM4NiI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmIi8+PHN0b3Agb2Zmc2V0PSIuMDczNiIgc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIuODI0Ii8+PHN0b3Agb2Zmc2V0PSIuMTY1MiIgc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIuNjMzIi8+PHN0b3Agb2Zmc2V0PSIuMjYyIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9Ii40NjMiLz48c3RvcCBvZmZzZXQ9Ii4zNjIiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iLjMyIi8+PHN0b3Agb2Zmc2V0PSIuNDY2MyIgc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIuMjAzIi8+PHN0b3Agb2Zmc2V0PSIuNTc2MSIgc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIuMTEzIi8+PHN0b3Agb2Zmc2V0PSIuNjk0MSIgc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIuMDUiLz48c3RvcCBvZmZzZXQ9Ii44MjU5IiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9Ii4wMTIiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iMCIvPjwvcmFkaWFsR3JhZGllbnQ+PGcgaXNvbGF0aW9uPSJpc29sYXRlIj48ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIj48Y2lyY2xlIGN4PSIyNjAuMTY5IiBjeT0iMjU0LjgxMSIgZmlsbD0idXJsKCNEZWdyYWRhZG9fc2luX25vbWJyZV8xNykiIHI9IjIzMC44MjkiLz48cGF0aCBkPSJtMjYzLjAwOTMgMTE0LjMyMzNjLTc2LjY4NDMgMC0xMzkuMTY3NCA2MS4wODM3LTEzOS4xNjc0IDEzNy4yMDQ3IDAgMjUuMzcyNyA3LjU3MzggNDkuODA2NCAxOS44OCA3MC40ODEybC0yNS41NjA0IDczLjMwMDggNzcuNjMwOC0yNC40MzM5YzE5Ljg4MTUgMTAuMzM4IDQyLjYwMTUgMTYuOTE1NyA2Ny4yMTcgMTYuOTE1NyA3Ni42ODM4IDAgMTM5LjE2NjktNjEuMDgzOCAxMzkuMTY2OS0xMzcuMjA0M3MtNjIuNDgzMS0xMzcuMjA0NC0xMzkuMTY2OS0xMzYuMjY0MnptLjk0NjQgMjUxLjg1NDhhMTE3LjI3NTUgMTE3LjI3NTUgMCAwIDEgLTY0LjM3NjUtMTguNzk1M2wtNDUuNDQyNSAxNC4wOTU4IDE0LjIwMTItNDMuMjI4NmExMTIuMDQyOCAxMTIuMDQyOCAwIDAgMSAtMjIuNzIyMS02Ny42NjIzYzAtNjMuOTAzOSA1My4wMTY5LTExNS41OSAxMTcuMzkzNS0xMTUuNTlzMTE3LjM5MTggNTEuNjg2IDExOC4zMzkzIDExNS41OWMwIDYzLjkwMzYtNTMuMDE2MyAxMTUuNTkwNC0xMTcuMzkyOSAxMTUuNTkwNHoiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJtMjEyLjA1NDIgMTg5LjI3ODYgOS4xMjYuNTI4NmE0LjczNTEgNC43MzUxIDAgMCAxIDQuMDc1NiAyLjkwNzJsMTMuMjkgMzEuMDFhNC43NTI0IDQuNzUyNCAwIDAgMSAtLjc5NzQgNC45MzM0bC0xMS42MDY2IDEzLjMwMjJhMy40NjMgMy40NjMgMCAwIDAgLS40NDMgMy44NzYyYzE1LjMyODEgMjkuMjQ3OSA0My4xNDg4IDQwLjg3NjYgNTEuNDc3NCA0My43ODM4YTMuNDYzMiAzLjQ2MzIgMCAwIDAgMy44OTg0LTEuMTQ1M2wxMi4xMzgzLTE1LjY4MTFhNC43OTYzIDQuNzk2MyAwIDAgMSA1Ljc1OTItMS40MDk1bDMwLjkyMTggMTQuMDk1OWE0Ljc4NDEgNC43ODQxIDAgMCAxIDIuNjU4IDUuMjg1N2wtMS40MTc2IDYuNzgzNWEyOS41MTMzIDI5LjUxMzMgMCAwIDEgLTEyLjg0NzIgMTguNjc2NGMtOC40MTcxIDUuMjg1Ny0xOS4yMjY1IDcuOTI4Ni0zMy4wNDgzIDQuMDUyNC00Mi43OTQzLTEyLjA2OTItNjYuOTgyNS00MC4yNi04MC4wMDY4LTU3Ljg3OTJzLTE4LjA3NDctMzUuMjM4OC0xNC43OTY1LTQ5LjU5ODhjMi4yMTUxLTkuNjAyNSA5LjMwMzItMTcuMDkwNiAxMy43MzMyLTIwLjg3ODhhMTEuMjgxIDExLjI4MSAwIDAgMSA3Ljg4NTUtMi42NDI5eiIgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PHBhdGggZD0ibTQ3Mi40Mjk0IDE2My45ODMyYTIzMC41MTUzIDIzMC41MTUzIDAgMCAxIDIuNjAxMSAzNC41MjJjMCAxMjkuNDQ1OC0xMDcuNjE1NyAyMzQuMzgyOC0yNDAuMzY2MiAyMzQuMzgyOC03NS4xODcgMC0xNDIuMzAwOC0zMy42Ny0xODYuMzc2OS04Ni4zODE0IDM1LjQ3NTUgODEuODU5OSAxMTYuOTgzOCAxMzkuMTMzNCAyMTEuODgxMyAxMzkuMTMzNCAxMjcuNDgyOSAwIDIzMC44Mjg2LTEwMy4zNDUyIDIzMC44Mjg2LTIzMC44Mjg2YTIzMC4wNjQgMjMwLjA2NCAwIDAgMCAtMTguNTY3OS05MC44MjgyeiIgZmlsbD0idXJsKCNyYWRpYWwtZ3JhZGllbnQpIiBtaXgtYmxlbmQtbW9kZT0ibXVsdGlwbHkiLz48cGF0aCBkPSJtNDQuMjYzIDIxOS41NDdjMjEuOTYgNTYuMjUgMTE2LjIyMTIgNzEuOTk5MiAyMTAuNTM3NiAzNS4xNzcyczE1OC41Mzg4LTExNC43NzU0IDEzMS4wMTE0LTE2OC41MjE1Yy0xNi4yNjMtMzEuNzUzNy02OS40MTQ5LTYwLjMxNDctMTMyLjEyMjktNjIuMTE4MmgtLjM0MjRjLTEwMC45MzM3IDIuOTMwMS0xODUuNjAzMSA3MC42NjQyLTIxMy44OTgzIDE2My4wMzg2YTc3LjM5OTMgNzcuMzk5MyAwIDAgMCA0LjgxNDYgMzIuNDIzOXoiIGZpbGw9InVybCgjcmFkaWFsLWdyYWRpZW50LTIpIi8+PC9nPjwvZz48L3N2Zz4=" />
            </Link>    
        </div>
    )
}

export default Whatsapp
